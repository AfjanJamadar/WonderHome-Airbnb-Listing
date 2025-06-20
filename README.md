# 🏡 MERN-Stack Airbnb Clone Web App  
🔗 Live Demo: [(https://wonderhome-airbnb-listing.onrender.com/listings)]
Please click on explore tab once you visit the website.

A full-featured web application inspired by Airbnb, built using **Node.js**, **Express**, **MongoDB**, **EJS**, and additional tools like **Cloudinary**, **Multer**, **Passport**, and **JOI** for validations and authentication.

---

## ✨ Features

- 🏘️ **Listings and Reviews**  
  Create, view, and manage listings. Add and delete reviews with full validation.

- 🔐 **User Authentication & Authorization**  
  Secure registration and login system using Passport. Only listing owners can modify their content.

- ✅ **Validations**  
  - Client-side: Bootstrap + HTML5 validation  
  - Server-side: JOI schema validation with custom error handling using ExpressError

- 🖼️ **File Uploads**  
  - Upload multiple images using Multer and store via Cloudinary  
  - Credentials handled securely using `.env` file

- 🧭 **Express Routing**  
  Modular routing using `express.Router` with `mergeParams` for nested routes (e.g., reviews in listings)

- 💬 **Flash Messages**  
  Displayed using `connect-flash` for user-friendly feedback on actions

- 🍪 **Sessions and Cookies**  
  Managed using `express-session`, including cookie setup for user tracking

- 🧱 **MVC Structure**  
  Fully refactored into Model-View-Controller architecture for cleaner and scalable code

---

## 🖼️ Screenshots

![Screenshot 2025-06-20 114335](https://github.com/user-attachments/assets/2677a8cf-9d03-40be-81c3-d74140c61282)


## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Frontend:** EJS Templates, Bootstrap 5  
- **Authentication:** Passport.js, express-session  
- **Validation:** JOI (server-side), HTML5 (client-side)  
- **File Storage:** Multer + Cloudinary  
- **Flash Messages:** connect-flash

---

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/airbnb-clone.git
cd airbnb-clone

# Install dependencies
npm install

# Run MongoDB locally or connect to Atlas
mongod

# Create a .env file with the following:
CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret  
SESSION_SECRET=your_session_secret

# Start the server
node app.js
```

---

## 📁 Folder Structure (MVC)

```
.
├── models/          # Mongoose schemas for Listing & Review  
├── routes/          # Modular express routers (listings, reviews, users)  
├── views/           # EJS templates with layouts  
├── controllers/     # Logic abstracted into controller functions  
├── public/          # Static assets  
└── app.js           # Main Express app
```

---

## 👤 Author

**Afjan Jamadar**  


---

## 📝 Note

This project was built from scratch to simulate a real-world full-stack application.  
Focus areas include:
- MVC best practices  
- Clean and scalable codebase  
- Reusability via modular components and partials
