
##  ShoppyGlobe Backend API


A RESTful backend API for an e-commerce application built using Node.js, Express, and MongoDB.
This project supports user authentication, product management, and cart operations using JWT authentication.


##  Features

* User Registration & Login (JWT Authentication)
* Secure Password Handling
* View All Products
* View Single Product
* Add to Cart
* Update Cart Quantity
* Delete Cart Item
* Protected Routes using Middleware
 
## Tech Stack

1.Node.js
2.Express.js
3. MongoDB
4. Mongoose
5.JWT (JSON Web Token)
6.bcryptjs
7.dotenv
8.cors


## Project Structure

shoppyglobe-be/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── cartController.js
│   └── productController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── routes/
│   ├── authRoutes.js
│   ├── cartRoutes.js
│   └── productRoutes.js
│
├── server.js
├── package.json
├── .env
└── README.md


## GitHub LInk:
https://github.com/1Vandhana/shoppyglobe-BE/blob/main/README.md

Server will run on:


http://localhost:8000


## API Endpoints

## Authentication

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | /api/register | Register new user |
| POST   | /api/login    | Login user        |

## Products

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /api/products     | Get all products   |
| GET    | /api/products/:id | Get single product |


##  Cart (Protected Routes)

⚠️ Requires Authorization Header:


Authorization: Bearer YOUR_TOKEN


| Method | Endpoint      | Description          |
| ------ | ------------- | -------------------- |
| POST   | /api/cart     | Add product to cart  |
| PUT    | /api/cart/:id | Update cart quantity |
| DELETE | /api/cart/:id | Delete cart item     |


##  Testing

You can test APIs using:

->Thunder Client (VS Code)
->Postman
->MongoDB Compass (for database check)
## Screenshots:
<img width="1440" height="900" alt="1 post" src="https://github.com/user-attachments/assets/1d4ee131-5107-4f31-abca-c8cf42366532" />


##  Authentication Flow

1. User registers or logs in
2. Server generates JWT token
3. Token must be included in headers for protected routes
4. Middleware verifies token before allowing access

