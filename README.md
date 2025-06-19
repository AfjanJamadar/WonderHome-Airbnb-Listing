# MERN-Stack Airbnb Clone Web App

A full-featured web application inspired by Airbnb, built using Node.js, Express, MongoDB, EJS, and additional tools like Cloudinary, Multer, Passport, and JOI for validations and authentication.

 # Features

- Listings and Reviews  
  Create, view, and manage listings. Add and delete reviews with full validation.

- User Authentication & Authorization  
  Secure registration and login system using passport. Includes authorization to ensure only listing owners can modify their content.

- Validations  
  - Client-side: Bootstrap + HTML5 validation  
  - Server-side: JOI schema validation with custom error handling using ExpressError

- File Uploads  
  - Upload multiple images per listing using Multer and store them via Cloudinary  
  - .env used to secure Cloudinary credentials

- Express Routing  
  Modular route structure using express.Router for clean code and maintainability  
  - Used mergeParams in nested routes (e.g., reviews inside listings)

- Flash Messages  
  Used connect-flash to show user-friendly messages on various actions

- Sessions and Cookies  
  Managed via express-session, including cookie configuration for user tracking

- MVC Structure  
  Refactored the project into Model-View-Controller architecture for scalability
 # Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: EJS Templates, Bootstrap 5
- Authentication: Passport.js, express-session
- Validation: JOI (server-side), HTML5 (client-side)
- File Storage: Multer + Cloudinary
- Flash Messages: connect-flash

 # Setup Instructions

 Clone the repository

git clone [https://github.com/your-username/airbnb-clone.git](https://github.com/your-username/airbnb-clone.git)
cd airbnb-clone

 Install dependencies

npm install

 Run MongoDB locally (refer to MongoDB docs or use Atlas)

mongod

 Add .env file with:

 CLOUDINARY\_CLOUD\_NAME=...

 CLOUDINARY\_API\_KEY=...

 CLOUDINARY\_API\_SECRET=...

 SESSION\_SECRET=...

 Start the server

node app.js



# Folder Structure (MVC)

.
├── models/          # Mongoose schemas for Listing & Review  
├── routes/          # Modular express routers (listings, reviews, users)  
├── views/           # EJS templates with layouts  
├── controllers/     # Logic abstracted into controller functions  
├── public/          # Static assets  
└── app.js           # Main Express app

# Author

Afjan Jamadar  


 Note

This project was built from scratch to understand the structure of real-world full-stack applications. Special care was taken to implement:
- MVC best practices
- Scalable code design
- Reusability through partials/layouts


