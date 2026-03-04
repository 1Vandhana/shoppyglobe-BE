
##  ShoppyGlobe Backend API


A RESTful backend API for an e-commerce application built using Node.js, Express, and MongoDB.
This project supports user authentication, product management, and cart operations using JWT authentication.


## 🚀 Features

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

##  Installation & Setup

## Clone the Repository

bash
git clone https://github.com/YOUR_GITHUB_USERNAME/shoppyglobe-be.git
cd shoppyglobe-be

##  Install Dependencies

bash
npm install


## Create `.env` File

Create a `.env` file in the root directory and add:


PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

###  Start the Server

bash
npm run dev


or

bash
node server.js


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

##  Authentication Flow

1. User registers or logs in
2. Server generates JWT token
3. Token must be included in headers for protected routes
4. Middleware verifies token before allowing access

