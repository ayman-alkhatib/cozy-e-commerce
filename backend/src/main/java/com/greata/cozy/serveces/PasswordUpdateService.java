package com.greata.cozy.serveces;

import com.greata.cozy.dao.UserDao;
import com.greata.cozy.dto.UpdatePasswordRequestDTO;
import com.greata.cozy.entities.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordUpdateService {
    private final UserDao userDao;
    private final PasswordEncoder encoder;

    public PasswordUpdateService(UserDao userDao, PasswordEncoder encoder) {
        this.userDao = userDao;
        this.encoder = encoder;
    }

    public ResponseEntity<String> updatePassword(UpdatePasswordRequestDTO updatePasswordRequestDTO, Authentication authentication) {
        User currentUser = userDao.findByEmail(authentication.getName());

        boolean passwordMatches = encoder.matches(updatePasswordRequestDTO.getCurrentPassword(), currentUser.getPassword());

        if(passwordMatches) {
            return userDao.updatePassword(currentUser.getEmail(), encoder.encode(updatePasswordRequestDTO.getNewPassword()));
        }
        return ResponseEntity.badRequest().body("Error: your password is not correct !");
    }
}
