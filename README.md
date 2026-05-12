# 🔐 Authentication Flow (Full Stack App)

A full-stack authentication system built with React (Vite) on the frontend and Node.js + Express on the backend. It includes user registration, login, JWT authentication, and protected routes.



# 🚀 Live Links

🌐 Frontend (Vercel):  
https://authentication-flow-topaz.vercel.app/

🛠 Backend API (Render):  
https://authentication-flow-5.onrender.com/



# 📦 Tech Stack

# Frontend
- React (Vite)
- Context API
- Axios
- React Router DOM

# Backend
- Node.js
- Express.js
- JWT (JSON Web Token)
- bcryptjs
- CORS



# 🔐 Features

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- Protected routes
- Persistent login using localStorage
- Global auth state using Context API



# 📁 Project Structure

Authentication-Flow/
│
├── frontend/
│   ├── src/
│   │   ├── context/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   └── server.js



# ⚙️ Environment Variables

# Backend (.env)

JWT_SECRET=your_secret_key  
PORT=5000  



# ▶️ Run Locally

# 1. Clone repo
git clone https://github.com/thamimkhonza-12/Authentication-Flow.git  
cd Authentication-Flow  


# 2. Backend setup
cd backend  
npm install  
npm start  



# 3. Frontend setup
cd frontend  
npm install  
npm run dev  



# 🌍 Deployment

- Frontend: Vercel  
- Backend: Render  


# 🔗 API Endpoints

POST /register → Register user  
POST /login → Login user  
GET /profile → Protected route  



# 🧠 What I Learned

- JWT authentication flow  
- Full-stack deployment  
- React Context API  
- CORS handling between frontend & backend  
- Debugging Vite build issues  
- Monorepo project structure  



# 👨‍💻 Author

Thami Dlamini


# 📌 Status

✔ Fully deployed  
✔ Frontend working  
✔ Backend working  
✔ Authentication system complete