
# Capstone Project - Blog Application


---

## 🏗️ Project Structure

The project is organized into two main directories:

```
capstone-updated/
└── 24EG105G63/
    ├── Frontend/          # React + Vite application
    └── Backend/           # Express.js API server
```

---

## 🎨 Frontend

**Stack:** React + Vite  
**Location:** `24EG105G63/Frontend/`

### Technology Stack
- **Framework:** React 19.2.4
- **Build Tool:** Vite 8.0.8
- **Styling:** TailwindCSS 4.2.2
- **Routing:** React Router 7.13.2
- **Form Management:** React Hook Form 7.72.0
- **HTTP Client:** Axios 1.14.0
- **State Management:** Zustand 5.0.12
- **UI Notifications:** 
  - React Hot Toast 2.6.0
  - React Toastify 11.0.5

### Key Features
- Responsive and dynamic user interface
- Component-based architecture
- Client-side routing for seamless navigation
- Form validation and management
- Toast notifications for user feedback
- Optimized performance with Vite

### Available Scripts
```bash
npm run dev      # Start development server with HMR
npm run build    # Create production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

---

## 🔧 Backend

**Stack:** Express.js + MongoDB  
**Location:** `24EG105G63/Backend/`

### Technology Stack
- **Framework:** Express.js 5.2.1
- **Database:** MongoDB (via Mongoose 9.3.3)
- **Authentication:** JSON Web Tokens (jsonwebtoken 9.0.3)
- **Security:** 
  - bcryptjs 3.0.3 (password hashing)
  - CORS 2.8.6
- **File Upload:** Multer 2.1.1
- **Cloud Storage:** Cloudinary 2.9.0
- **Cookie Handling:** Cookie Parser 1.4.7
- **Environment:** Dotenv 16.6.1

### Node Version
- Requires Node.js 18+ or 20+

### Key Features
- RESTful API architecture
- JWT-based authentication
- Secure password hashing
- Cloud-based image uploads
- MongoDB for persistent data storage
- CORS support for frontend communication

### Available Scripts
```bash
npm run dev      # Start development server with environment variables
npm start        # Start production server
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn
- MongoDB instance (local or Atlas)
- Cloudinary account (for image uploads)

### Frontend Setup
```bash
cd 24EG105G63/Frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd 24EG105G63/Backend
npm install
# Create .env file with required environment variables
npm run dev
```

---

## 📝 Key Technologies at a Glance

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, Vite, TailwindCSS, React Router |
| **Backend** | Express.js, Node.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT, bcryptjs |
| **Storage** | Cloudinary |
| **Styling** | TailwindCSS |
| **Build** | Vite |

---

## 📦 Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DeekshithaCholleti/capstone-updated.git
   cd capstone-updated
   ```

2. **Install and run frontend:**
   ```bash
   cd 24EG105G63/Frontend
   npm install
   npm run dev
   ```

3. **Install and run backend:**
   ```bash
   cd 24EG105G63/Backend
   npm install
   npm run dev
   ```

4. **Configure environment variables** in `.env` file for backend (database URL, JWT secret, Cloudinary credentials, etc.)

---

## 🔐 Environment Variables

Backend `.env` file should include:
- MongoDB connection URL
- JWT secret key
- Cloudinary API credentials
- CORS allowed origins
- Port configuration

---

## 📚 Dependencies Highlights

**Frontend:**
- Modern React with hooks
- Form validation with React Hook Form
- State management with Zustand
- Real-time feedback with toast notifications
- Professional styling with TailwindCSS

**Backend:**
- Secure authentication with JWT and bcryptjs
- Cloud-based image storage via Cloudinary
- Database modeling with Mongoose
- Cross-origin resource sharing enabled

---

## 👥 Author

**Deekshitha Cholleti**

---

## 🎯 Features Summary

✅ Full-stack blog application  
✅ User authentication & authorization  
✅ Create, read, update, delete blog posts  
✅ Image uploads to cloud storage  
✅ Responsive design  
✅ Modern tech stack  
✅ Production-ready structure
