# Cozy E-Commerce

Cozy E-Commerce is a full-stack e-commerce application built with a Spring Boot backend and a React frontend. The application provides a complete online shopping experience with user authentication, shopping cart functionality, order processing, and integrated payment processing using Stripe.

## 🚀 Features

### User Features
- **User Authentication & Authorization**: Secure JWT-based login and registration system
- **Product Browsing**: View products with detailed information, images, and categories
- **Product Search**: Find products by name or category
- **Shopping Cart**: Add, remove, and manage products in the cart
- **Order Management**: Place orders and track order history
- **Payment Processing**: Secure payment handling with Stripe integration
- **User Profile**: Update password and manage account settings

### Admin Features
- **Order Management**:  update order status

## 🛠️ Technologies Used

### Backend
- **Java 23**: Modern Java features and performance
- **Spring Boot 3.4.2**: Enterprise-grade framework
- **Spring Data JDBC**: Database operations and ORM
- **Spring Security**: Authentication and authorization
- **Spring Validation**: Input validation
- **MySQL**: Relational database
- **JWT**: Stateless authentication tokens
- **Stripe API**: Payment processing
- **Maven**: Dependency management and build tool

### Frontend
- **React 19**: Modern React with latest features
- **React Router 7**: Client-side routing
- **CSS Modules**: Scoped styling
- **JavaScript ES6+**: Modern JavaScript features

## 📁 Project Structure

```
cozy-e-commerce/
├── backend/
│   ├── src/main/java/com/greata/cozy/     # Java source files
│   │   ├── controller/                    # REST API controllers
│   │   ├── service/                       # Business logic
│   │   ├── repository/                    # Data access layer
│   │   ├── model/                         # Entity classes
│   │   └── config/                        # Configuration classes
│   ├── src/main/resources/
│   │   ├── application.properties         # Application configuration
│   │   └── schema.sql                     # Database schema
│   ├── pom.xml                           # Maven dependencies
│   └── postman_collection.json          # API testing collection
└── frontend/
    ├── src/
    │   ├── components/                   # Reusable React components
    │   ├── pages/                        # Page components
    │   ├── api/                          # API service functions
    │   ├── logic/                        # Context providers and routing
    │   ├── hooks/                        # Custom React hooks
    │   └── services/                     # Business logic services
    ├── public/                           # Static assets
    └── package.json                      # Node.js dependencies
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Java 23** or higher
- **Node.js 18** or higher
- **MySQL 8.0** or higher
- **Maven 3.6** or higher (or use the included wrapper)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/cozy-e-commerce.git
   cd cozy-e-commerce
   ```

2. **Set up the database:**
   ```bash
   # Start MySQL server and create database
   mysql -u root -p
   CREATE DATABASE cozy_db;
   EXIT;
   ```

3. **Configure environment variables:**
   Create a `.env` file in the `backend` directory:
   ```env
   # Database Configuration
   DB_URL=jdbc:mysql://localhost:3306/cozy_db
   DB_USERNAME=root
   DB_PASSWORD=your_mysql_password
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRATION=86400000
   
   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key_here
   ```

4. **Install backend dependencies:**
   ```bash
   cd backend
   ./mvnw clean install
   ```

5. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
   The backend will run on `http://localhost:8080`

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`

## 🔧 API Endpoints

The backend provides the following main API endpoints:

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `PUT /auth/update-password` - Update user password
- `DELETE /auth/delete` - Delete user account

### Products
- `GET /product/all` - Get all products
- `GET /product/{id}` - Get product by ID
- `POST /product/add` - Add new product (Admin)
- `DELETE /product/{id}` - Delete product (Admin)
- `GET /product/quantity/{id}` - Get product quantity
- `POST /product/quantity/{id}/{quantity}` - Update product quantity (Admin)

### Orders
- `POST /orders` - Create new order
- `GET /orders/user` - Get user's orders
- `GET /orders/all/user` - Get all orders (Admin)
- `GET /orders/id/{id}` - Get order by ID
- `PUT /orders/delivered/{orderId}` - Mark order as delivered (Admin)

### Payment
- `POST /payment/create-payment-intent` - Create Stripe payment intent
- `POST /payment/confirm-payment` - Confirm payment

## 🗄️ Database Schema

The application uses the following main entities:
- **Users**: User authentication and profile information
- **Products**: Product catalog with images and inventory
- **Orders**: Order information and status tracking
- **Order Items**: Individual items within orders
- **Product Images**: Multiple images per product

## 🧪 Testing

Use the included Postman collection (`backend/postman_collection.json`) to test the API endpoints. Set the `baseUrl` variable to `http://localhost:8080` for local testing.

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file: `./mvnw clean package`
2. Deploy the JAR to your server
3. Configure environment variables for production
4. Ensure MySQL database is accessible

### Frontend Deployment
1. Build the production bundle: `npm run build`
2. Deploy the `build` folder to your web server
3. Configure the API base URL for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please open an issue in the GitHub repository.
```
