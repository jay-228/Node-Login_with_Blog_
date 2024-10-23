
==================== Project Description ====================

![Screenshot 2024-10-23 110003](https://github.com/user-attachments/assets/c481a52e-db2f-4ce7-9ad5-a1770684e357)

![Screenshot 2024-10-23 110034](https://github.com/user-attachments/assets/17f826a0-291f-43b6-a4c2-9f9d827ef908)

![Screenshot 2024-10-23 110227](https://github.com/user-attachments/assets/2137d294-8d6b-4a2d-bac6-938fdaf54bde)

![Screenshot 2024-10-23 110249](https://github.com/user-attachments/assets/7503ed32-282e-4fb8-970d-b28f4976299e)

![Screenshot 2024-10-23 110323](https://github.com/user-attachments/assets/e6ce66ec-1bb0-4739-b140-ccca1a44287e)

### **Objective**

Develop a full-stack web application titled **"Blog Management System"** using **React.js** for the frontend and **Node.js, Express, and MongoDB** for the backend. The application should support **CRUD operations** on blog posts with **authentication and role-based access** for **admin** and **user** roles. Key features include **JWT-based authentication**, **bcrypt for password encryption**, and **cookie-based session management**.

### **Requirements**

1. **Frontend (React.js)**:
    - **User Interface**:
        - **Sign Up & Login**: Pages for user registration and login, storing JWT tokens in cookies for authentication.
        - **User Roles**:
            - **Admin**: Can create, update, delete, and view all posts.
            - **User**: Can view all posts and create, update, and delete their own posts only.
        - **Post Management**:
            - **Create a New Blog Post**: Form for adding new posts.
            - **View All Blog Posts**: Display a list of posts with details like title, author, content, and tags.
            - **Update a Blog Post**: Form to update an existing post.
            - **Delete a Blog Post**: Button to delete a post (role-restricted).
    - **Styling**: The frontend should be responsive and styled with **CSS** or **Bootstrap**.
2. **Backend (Node.js, Express, MongoDB)**:
    - **Authentication**:
        - **Sign Up**: Store hashed passwords using bcrypt.
        - **Login**: Generate a JWT token upon successful login.
        - **Role-Based Access**: Implement middleware to verify JWT and check user roles (admin or user).
    - **CRUD API for Posts**:
        - **GET /posts**: Allow all users to fetch posts.
        - **POST /posts**: Allow authenticated users to add posts.
        - **PUT /posts/**: Allow users to update their own posts, admins can update any post.
        - **DELETE /posts/**: Allow users to delete their own posts, admins can delete any post.
    - **Security**:
        - Use JWT tokens stored in **HTTP-only cookies** for security.
        - **Mongoose** to define the blog post and user schemas.
        - Passwords hashed using **bcrypt**.
3. **MongoDB**:
    - **BlogPost Model**:
        - Title (String)
        - Author (String, references User)
        - Content (String)
        - Tags (Array of Strings)
        - Published Date (Date)
    - **User Model**:
        - Username (String)
        - Email (String, unique)
        - Password (String, hashed)
        - Role (String, enum: [‘admin’, ‘user’])
    - Store blog post and user details in MongoDB.
4. **Routing & Communication**:
    - **Axios** or **Fetch API** to handle API calls between frontend and backend.
    - **JWT** tokens stored in HTTP-only cookies for session management.
    - Frontend handles server responses (e.g., displaying success/error messages).

### **Instructions**

1. **Backend Setup (Node.js, Express, MongoDB)**:
    - Initialize a Node.js project, install necessary dependencies (express, mongoose, bcrypt, jsonwebtoken, cors, dotenv, cookie-parser, etc.).
    - Set up:
        - **Authentication Routes** for sign-up and login.
        - **Middleware for JWT verification and role-based access**.
        - **Routes and Controllers for CRUD operations on blog posts**.
    - Connect to MongoDB using **Mongoose**.
2. **Frontend Setup (React.js)**:
    - Initialize a React app and install Axios or use Fetch API for HTTP requests.
    - **Components**:
        - **Auth Components**: SignUp.js, Login.js, and Logout functionality.
        - **Blog Components**:
            - **BlogList**: Displays all posts.
            - **BlogForm**: For adding and updating posts.
            - **BlogDetails**: Shows detailed information about a single post.
    - Implement **React Router** for navigation.
    - Store JWT tokens in cookies and set up protected routes for role-based access.
