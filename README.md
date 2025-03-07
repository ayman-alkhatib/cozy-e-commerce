# Cozy E-Commerce

Cozy E-Commerce is a full-stack e-commerce application built with a Spring Boot backend and a React frontend. The application allows users to browse products, add them to a cart, and place orders. Administrators can manage products and view orders.

## Features

- User authentication and authorization
- Product listing and search
- Shopping cart functionality
- Order placement and management
- Admin panel for product management

## Technologies Used

### Backend

- Java
- Spring Boot
- Spring Data JDBC
- MySQL

### Frontend

- React
- React Router
- CSS Modules

## Project Structure

### Backend

- `src/main/java/com/greata/cozy`: Java source files
- `src/main/resources`: Configuration files and SQL scripts

### Frontend

- `src/components`: React components
- `src/pages`: React pages
- `src/logic`: Context and router logic
- `src/api`: API calls

## Getting Started

### Prerequisites

- Java 23
- Node.js
- MySQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/cozy-e-commerce.git
   cd cozy-e-commerce

   ```

2. Set up the backend:
   ```sh
   cd backend
   ./mvnw clean install
   ```
3. Set up the frontend:
   ```sh
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the MySQL server and create a database named `cozy_db`.

2. Create a .env file in the backend directory and add the following environment variables::
   ```
   DB_URL=jdbc:mysql://localhost:3306/cozy_db
   DB_USERNAME=root
   DB_PASSWORD=yourpassword
   ```
3. Run the backend:

   ```
   cd backend
   ./mvnw spring-boot:run
   ```

4. Run the frontend:

```
    cd ../frontend
    npm start`

```

5. Open your browser and navigate to http://localhost:3000:

```
Feel free to replace `yourpassword` with the actual password for your MySQL database.
Feel free to replace `yourpassword` with the actual password for your MySQL database.s
```
