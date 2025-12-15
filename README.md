# 🎬 Netstream


**Netstream** is a Netflix-inspired full-stack streaming platform built with the **MERN stack** (MongoDB, Express, React, Node.js). It features user authentication, responsive UI, media content display, and a modern design.

---

## 🔧 Tech Stack

- **Frontend:** React, CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** Google OAuth  
- **Deployment:** [Coming Soon] / [Deployed on Render/Vercel/Netlify]   

---

## ✨ Features

- 👤 User registration & login (Google authentication)  
- 🎥 Browse and watch streaming content  
- 🔍 Search bar to filter media  
- 🎨 Fully responsive design  
- 🔐 Protected routes and user sessions  

---

## 🚀 Getting Started (Run Locally)

You can run **Netstream** locally by setting up the **frontend** and **backend** separately.

---

### **Frontend Setup**
```
git clone https://github.com/Dabral2005/Netstream.git
cd Netstream/frontend
npm install
npm run dev
```

### **Backend Setup**
```
cd Netstream/backend
npm install
```

### **.env(Create File)**
```
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
---

# ⚡ Usage

- 👤 Register or login using Google account  
- 🎬 Browse the collection of streaming media  
- 🔍 Use the search bar to find specific movies/shows  
- ▶️ Click on any media item to view details and stream content  

---

# 🖼️ Images
## Sign Up
<img width="692" height="900" alt="image" src="https://github.com/user-attachments/assets/f3b4310a-3a09-4ef4-b04c-afa196a62320" />

## Sign In
<img width="706" height="838" alt="image" src="https://github.com/user-attachments/assets/14630cd8-29b7-4e10-9568-a6f58d5f3a43" />

## Homepage
<img width="1919" height="921" alt="image" src="https://github.com/user-attachments/assets/0cca9f20-693a-48f8-bd9f-e36704d9d262" />

## Movies
<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/eb5c486d-0c96-48f0-a6f7-d5ceb76c289b" />

## Result after searching movies
<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/5ddf5354-3234-4bc5-b02a-a9b02811ef12" />

---

# 🚧 Limitations

📺 No Actual Video Streaming
The project uses placeholder routes (e.g., /player/:id) and can only simulate video playback. Real Netflix-level streaming is not implemented.

🌐 Google OAuth Dependency
While Google login is integrated, the authentication process relies entirely on Google’s API. If the API fails or the internet connection is unstable, users cannot log in. Additionally, no fallback authentication mechanism is provided.

👤 No Multi-User Profiles
Unlike Netflix, this project does not support multiple user profiles under a single account, limiting personalized experiences.

📶 Limited Offline Support
Content cannot be downloaded for offline usage, and caching is not implemented, restricting access in low or no internet connectivity scenarios.

🗂️ Static Content
Movies and TV shows are either hardcoded or fetched from demo APIs. The system does not provide dynamic content updates or personalized recommendations based on watch history.

⚡ Scalability Limitations
The project lacks backend server infrastructure or cloud support, which limits its ability to handle a large number of concurrent users.

⚖️ Legal and Copyright Constraints
Due to copyright restrictions, real Netflix content cannot be integrated. Only demo content or open APIs are used, limiting the variety and quality of available media.

---

# 📫 Contact
GitHub: Dabral2005

**For any questions or suggestions: dabralmohit78@gmail.com**
