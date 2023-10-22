# Awesome Blog Website API Project 🚀

Welcome to our amazing blog website API project! This API allows you to manage user authentication, blog creation, editing, and deletion.

## Endpoints 🛠️

- `POST /api/signup` - Register a new user.
- `POST /api/login` - Authenticate a user.

### Blogs 📚

- `GET /api/blogs` - Get a list of all blogs.
- `GET /api/blogs/:id` - Get a specific blog by ID.
- `POST /api/blogs` - Create a new blog.
- `PUT /api/blogs/:id` - Update an existing blog.
- `DELETE /api/blogs/:id` - Delete a blog.

## Technologies Used 🛠️

- Node.js 🚀
- Express.js 🔥
- MongoDB 🍃
- Mongoose ODM 🏗️

## How to Use 🚀

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mayank1242/Blogify-API-Empowering-Your-Blogs-
   cd blog-api
2. **Install dependencies:
  npm install

3. **Set up environment variables:
Create a .env file in the root directory with the following content:

MONGODB_URI=mongodb://username:password@localhost:27017/blogdb
SECRET_KEY=yoursecretkey

4. **Run the server:
   npm start
