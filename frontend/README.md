# Cozy E-Commerce Frontend

A modern, responsive e-commerce web application built with React. This frontend provides a complete shopping experience with user authentication, product browsing, cart management, and order tracking.

## 🚀 Features

- **User Authentication**: Login and registration with JWT token management
- **Product Catalog**: Browse and search products with detailed product pages
- **Shopping Cart**: Add items to cart, manage quantities, and checkout
- **Order Management**: Track order history and view order details
- **Payment Integration**: Secure payment processing
- **Responsive Design**: Mobile-friendly interface with modern UI components
- **Real-time Updates**: Dynamic cart updates and order status tracking

## 🛠️ Tech Stack

- **React 19.0.0**: Modern React with hooks and context
- **React Router 7.1.5**: Client-side routing and navigation
- **CSS Modules**: Scoped styling for components
- **JWT Authentication**: Secure token-based authentication
- **RESTful API Integration**: Backend communication via fetch API

## 📁 Project Structure

```
src/
├── api/                    # API integration layer
├── components/            # Reusable UI components
│   ├── cartPageComponents/   # Cart-specific components
│   └── ordersPageComponents/ # Order management components
├── hooks/                 # Custom React hooks
├── logic/                 # Business logic and context providers
├── pages/                 # Page components
└── services/              # Service layer for API calls
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cozy-e-commerce/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory with the following variables:
   ```env
   REACT_APP_API_URL=your_backend_api_url
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
The page will reload when you make changes, and lint errors will appear in the console.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
The build is optimized and minified for the best performance.

### `npm run eject`
**Note: This is a one-way operation. Once you eject, you can't go back!**
Ejects from Create React App to gain full control over configuration files.

## 🔐 Authentication

The application uses JWT-based authentication:
- **Login**: Users can log in with email/username and password
- **Registration**: New users can create accounts
- **Token Management**: JWT tokens are stored in localStorage
- **Protected Routes**: Certain pages require authentication

## 🛒 Shopping Features

### Product Management
- Browse all products with pagination
- View detailed product information
- Search products by name or category
- Product images and descriptions

### Cart Management
- Add/remove items from cart
- Update item quantities
- Cart persistence across sessions
- Real-time cart total calculation

### Order Processing
- Secure checkout process
- Address management
- Payment integration
- Order confirmation and tracking

## 🎨 UI Components

- **NavBar**: Navigation with cart icon and user menu
- **ProductCard**: Product display with image and details
- **SearchBar**: Product search functionality
- **Modal**: Reusable modal component
- **Loading**: Loading states and spinners
- **Forms**: Login, registration, and checkout forms

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## 🔗 API Integration

The frontend communicates with a backend API for:
- User authentication (`/auth/login`, `/auth/register`)
- Product data (`/product/all`, `/product/:id`)
- Cart operations
- Order management
- Payment processing

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting platform (Netlify, Vercel, etc.)

3. **Configure environment variables** on your hosting platform

## 📊 Browser Support

The application supports modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the DWWM (Développeur Web et Web Mobile) training program.

## 👥 Team

Developed by Greta DWWM students as part of the e-commerce project.

---

*Built with ❤️ using React and modern web technologies*
