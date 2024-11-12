# PetBuddy - Pet Adoption Platform
[Link](https://petbuddy.onrender.com/)

PetBuddy is a full-stack web platform built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js) to assist animal shelters and pet adoption agencies in listing pets for adoption. It allows potential adopters to search for pets, apply for adoption, and much more.

# Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)


# Features

### Core Features:
- **User Authentication**: Users can sign up, log in, and manage their profiles.
- **Pet Listings**: Shelters can add pets for adoption, and users can search and filter through the listings.
- **Adoption Applications**: Users can apply to adopt pets, and shelters can review, approve, or reject applications.
- **Adoption Status**: Users can track the status of their adoption applications.
- **Blog & Articles**: Admins can publish articles and tips related to pet care, behavior, and training.
- **Compatibility Quiz**: Users can take a quiz to find pets that best match their preferences and lifestyle.
- **Contact Us**: A functional contact form to send messages to the team.

### Additional Features:
- **Admin Dashboard**: Manage pets, articles, and adoption applications via a centralized admin panel.
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices.
- **Google Maps Integration**: View shelter locations directly on the contact page.
- **Testimonials Section**: Dynamic testimonials carousel to showcase adoption success stories.

# Tech Stack
- **Front-end**: React.js, Material-UI, React Icons
- **Back-end**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT) for session management
- **Database**: MongoDB for storing pets, users, applications, and articles
- **Deployment**: Instructions for running locally

# Installation

### Prerequisites
Ensure the following are installed:
- Node.js (v14 or higher)
- MongoDB
- npm (or yarn)

### Steps to Install Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/PetBuddy.git
   cd PetBuddy

2. **Install Dependencies**:
    For the server:
   ```bash
   cd server
   npm install
   ````
   
   For the client:
   ```bash
   cd client
   npm install
   ```
3. **Set up MongoDB**:
Ensure MongoDB is running locally, or use MongoDB Atlas.

4. **Environment Variables**:
    MONGO_URI=mongodb://localhost:27017/petbuddy
    JWT_SECRET=your_jwt_secret

## Running the Project
1. **Run the Server**:
    Start the back-end server in the server directory:
    ```bash
    cd server
    npm start
    ```
    This will run the server at http://localhost:5000
2. **Run the Client**:
    Start the React front-end in the client directory:
    ```bash
    cd client
    npm start
    ```
    The React app will run at http://localhost:3000


