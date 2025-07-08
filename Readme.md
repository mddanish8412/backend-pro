# Backend for youtube 

This is a video series on backend with javascript

 - [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

 # 🎬 YouTube Backend API

A full-featured backend API for a YouTube-like platform built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary**. This API handles user management, video uploads, likes, subscriptions, comments, playlists, tweets, and more.

---

## 📦 Features

- 🔐 User Authentication & Authorization (JWT)
- 📤 Video Upload (via Cloudinary)
- 📺 Video CRUD & Streaming Support
- 🧡 Like System (Videos, Comments, Tweets)
- 💬 Comments on Videos
- 📃 Playlist Management
- 📣 Tweets (Micro posts)
- 🔁 Subscriptions between users/channels
- 📊 Channel Statistics
- 🧪 API Error & Response Handling

---

## 📁 Folder Structure

.
==> config/ # DB, Cloudinary, and environment configs
==> controllers/ # Route handlers
==> models/ # Mongoose schemas
==> routes/ # API routes
==> middlewares/ # Auth, error handlers, etc.
==> utils/ # Helper functions (e.g. asyncHandler, ApiError)
==> uploads/ # (optional) local storage for uploads
==> app.js # Express app setup
==> server.js # App bootstrap
==> .env # Environment variables



## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/youtube-backend.git
cd youtube-backend
2. Install dependencies

npm install
3. Environment Variables
Create a .env file in the root directory and configure it:


PORT=5000
MONGODB_URI=mongodb://localhost:27017/youtube-clone
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


4. Run the server

npm run dev
API is now running at http://localhost:5000/api.


📡 API Endpoints
Module	        Endpoint	                           Description
Auth	        POST /api/auth/register	               Register user
                POST/api/auth/login	                   Login user
Videos	        POST /api/videos/	                   Upload video
                GET /api/videos/	                   Get all published videos
                PATCH /api/videos/:videoId	           Update video details
                DELETE /api/videos/:videoId	           Delete a video
Comments	    POST /api/comments/:videoId	           Add comment to video
                GET /api/comments/:videoId	           Get comments for video
Likes	        POST /api/likes/video/:videoId	       Toggle like on video
Subscriptions	POST /api/subscriptions/:channelId	   Toggle subscribe
Playlists	    POST /api/playlists/	               Create playlist
Tweets	        POST /api/tweets/	                   Create tweet
Users	        GET /api/users/:userId	               Get user profile

Full Postman collection available soon.

📦 Tech Stack
Node.js
Express
MongoDB + Mongoose
Cloudinary (media upload)
JWT Authentication
Multer (file handling)
Bcrypt, dotenv, cors, etc.


✅ To-Do
 JWT Auth
 Video CRUD
 Playlist feature
 Comment system
 Tweet module
 Subscription logic
 Admin dashboard
 Postman Docs

🤝 Contributing
PRs are welcome! Fork the repo and submit your contributions.

📝 License
This project is licensed under the MIT License.

✨ Author
Made with ❤️ by Md Danish
