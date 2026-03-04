
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
<img width="1440" height="900" alt="1 post" src="https://github.com/user-attachments/assets/28ff35c9-d24d-4d5c-aac7-5b9e2f9fe579" />
<img width="1440" height="900" alt="2 post login " src="https://github.com/user-attachments/assets/2b693a99-3781-4678-9a7e-cae906466e79" />
<img width="1440" height="900" alt="3 product id" src="https://github.com/user-attachments/assets/0c47d140-39cc-4f83-a2fa-30b443428aa8" />
<img width="1440" height="900" alt="4 cart pid" src="https://github.com/user-attachments/assets/45d6e54e-be54-4d93-87ad-7e99635bf145" />
<img width="1440" height="900" alt="5 get id product" src="https://github.com/user-attachments/assets/37a96a29-b0fa-41b8-8941-2046e322ce2b" />
<img width="1440" height="900" alt="6 Cart APIs (Protected Routes)" src="https://github.com/user-attachments/assets/cde9929f-af86-4308-8cf2-5d5395ef8be5" />
<img width="1440" height="900" alt="7 added in cart" src="https://github.com/user-attachments/assets/df043e5b-8aac-4f3b-aeb1-75617d103578" />
<img width="1440" height="900" alt="8 put Update Cart Quantity" src="https://github.com/user-attachments/assets/87ae755c-4046-41f8-877c-76314d6f8e79" />
<img width="1440" height="900" alt="9 delete the cart id" src="https://github.com/user-attachments/assets/116a66fb-fe23-4954-9fc0-cc7569b3c2fd" />


##  Authentication Flow

1. User registers or logs in
2. Server generates JWT token
3. Token must be included in headers for protected routes
4. Middleware verifies token before allowing access

