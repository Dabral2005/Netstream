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
<img width="559" height="522" alt="image" src="https://github.com/user-attachments/assets/3581d744-8228-40f1-9626-8aad75a78830" />

## Sign In
<img width="558" height="700" alt="image" src="https://github.com/user-attachments/assets/52282066-ba6c-4c85-a095-04df147fc9ae" />

## Homepage
<img width="952" height="421" alt="image" src="https://github.com/user-attachments/assets/c4ccd7c6-2d12-4d0e-8abf-0896e88fe6f3" />

## Result after searching movies
<img width="916" height="370" alt="image" src="https://github.com/user-attachments/assets/72d45426-07c5-4a75-85dc-adc4927c1828" />

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

**For any questions or suggestions: dabralmohit78@gmail.com**
