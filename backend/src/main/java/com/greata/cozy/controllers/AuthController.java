package com.greata.cozy.controllers;

import com.greata.cozy.dao.UserDao;
import com.greata.cozy.dto.UpdatePasswordRequestDTO;
import com.greata.cozy.entities.User;
import com.greata.cozy.serveces.JwtUtil;
import com.greata.cozy.serveces.PasswordUpdateService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
        private final AuthenticationManager authenticationManager;
        private final PasswordUpdateService passwordUpdateService;
        private final UserDao userDao;
        private final PasswordEncoder encoder;
        private final JwtUtil jwtUtils;

        public AuthController(AuthenticationManager authenticationManager, UserDao userDao, PasswordUpdateService passwordUpdateService, PasswordEncoder encoder, JwtUtil jwtUtils) {
                this.authenticationManager = authenticationManager;
                this.userDao = userDao;
                this.passwordUpdateService = passwordUpdateService;
                this.encoder = encoder;
                this.jwtUtils = jwtUtils;
        }

        @PostMapping("/register")
        public ResponseEntity<?> registerUser(@Valid @RequestBody User user) {
                boolean alreadyExists = userDao.existsByEmail(user.getEmail());
                if (alreadyExists) {
                        return ResponseEntity.badRequest().body("Error: Email is already in use!");
                }
                User newUser = new User(
                                user.getEmail(),
                                encoder.encode(user.getPassword()),
                                "USER");
                newUser = userDao.save(newUser);

                if (newUser != null) {
                        String jwtToken = jwtUtils.generateToken(newUser.getEmail());
                        return ResponseEntity.ok(Map.of(
                                        "access_token", jwtToken,
                                        "token_type", "Bearer",
                                        "expires_in", 3600));
                }
                return ResponseEntity.badRequest().body("Error: user registration failed!");
        }

        @PostMapping("/login")
        public ResponseEntity<?> authenticateUser(@RequestBody User user) {
                Authentication authentication = authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(
                                                user.getEmail(),
                                                user.getPassword()));
                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                String token = jwtUtils.generateToken(userDetails.getUsername());

                return ResponseEntity.ok(Map.of(
                                "access_token", token,
                                "token_type", "Bearer",
                                "expires_in", 3600));
        }

        @PutMapping("update-password")
        public ResponseEntity<String> updatePassword(
                        @Valid @RequestBody UpdatePasswordRequestDTO updatePasswordRequestDTO,
                        Authentication authentication) {
                return passwordUpdateService.updatePassword(updatePasswordRequestDTO, authentication);
        }

        @DeleteMapping("delete")
        public ResponseEntity<String> deleteUser(Authentication authentication) {
                User currentUser = userDao.findByEmail(authentication.getName());
                return userDao.deleteUserById(currentUser.getId());
        }
}