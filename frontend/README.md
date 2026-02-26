# MyLoanApprove.com - Full Stack Fintech Platform

A professional, production-ready loan assistance website built with React + TypeScript frontend and Node.js + Express + MongoDB backend.

**Status:** ✅ **Complete & Production Ready**

## Overview

MyLoanApprove is a comprehensive fintech platform providing loan assistance services. The platform features a modern responsive website (React frontend) integrated with a secure production-grade API (Node.js backend) for handling contact submissions and loan applications with automated email notifications.

## � Quick Start (3 Steps)

### Step 1: Install Frontend Dependencies
```bash
npm install
```

### Step 2: Install Backend Dependencies
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
```

### Step 3: Run Both Servers

**Terminal 1 - Frontend:**
```bash
npm run dev
# http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
# http://localhost:5000
```

---

## 📊 Tech Stack

### Frontend
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React Router (navigation)
- Swiper.js (carousel)
- Lucide React (icons)

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Nodemailer (email)
- Helmet (security)
- Express Validator (validation)
- Rate Limiter (protection)

---

## �🌟 Features

### Frontend Features

**5 Professional Pages:**
- ✅ Home - Hero, services, testimonials carousel, FAQ
- ✅ About - Company info, mission/vision, loan process
- ✅ Services - 4 loan types with detailed info
- ✅ Contact - Working form with backend integration
- ✅ Apply - Multi-step loan application (NEW)

**Design & UX:**
- ✅ Fintech-grade professional design
- ✅ Responsive mobile-first layout
- ✅ Smooth animations & transitions
- ✅ Interactive components (carousel, accordion)
- ✅ Form validation with error messages
- ✅ SEO optimized meta tags
- ✅ Fast performance (Vite bundle)

### Backend Features

**REST API:**
- ✅ Contact form submissions (`POST /api/contact`)
- ✅ Loan applications (`POST /api/applications`)
- ✅ Admin dashboard endpoints
- ✅ Statistics and reporting
- ✅ Input validation & error handling

**Database:**
- ✅ MongoDB with Mongoose ODM
- ✅ Contact & Application models
- ✅ Automatic timestamps & indexing

**Email Integration:**
- ✅ Auto confirmations to users
- ✅ Admin notifications
- ✅ Professional HTML templates
- ✅ Gmail/SMTP support

**Security:**
- ✅ Helmet security headers
- ✅ CORS protection
- ✅ Rate limiting (5/hour contact, 3/day applications)
- ✅ Input validation & sanitization
- ✅ MongoDB injection protection
- ✅ Environment variables (no exposed secrets)

## 📁 Project Structure

```
MyLoanApprove/
├── src/                           # Frontend (React + TypeScript)
│   ├── components/
│   │   ├── Navigation.tsx        # Sticky navbar with mobile menu
│   │   └── Footer.tsx            # Footer with links
│   ├── pages/
│   │   ├── Home.tsx              # Landing page
│   │   ├── About.tsx             # Company info
│   │   ├── Services.tsx          # Loan products
│   │   ├── Contact.tsx           # Contact form (uses backend API)
│   │   └── Apply.tsx             # Loan application form (NEW)
│   ├── utils/
│   │   └── api.ts                # API client utility
│   ├── App.tsx                   # Routing
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── server/                        # Backend (Node.js + Express + MongoDB)
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── applicationController.js
│   ├── models/
│   │   ├── Contact.js
│   │   └── Application.js
│   ├── routes/
│   │   ├── contact.js
│   │   └── application.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── utils/
│   │   └── emailService.js
│   ├── server.js                 # Main entry point
│   ├── package.json
│   ├── .env.example
│   └── README.md                 # API documentation
│
├── .env                          # Frontend env vars
├── .env.example
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MongoDB Atlas account (free)
- Gmail account with 2FA enabled

### Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build
```

### Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with:
# - MongoDB URI (from MongoDB Atlas)
# - Gmail credentials (app password)
# - Admin email address

# Run development server
npm run dev
# Runs at http://localhost:5000
```

### Configure .env Files

**Frontend (.env in root):**
```
VITE_API_URL=http://localhost:5000/api
```

**Backend (server/.env):**
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/myloanapprove
PORT=5000
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=noreply@myloanapprove.com
ADMIN_EMAIL=admin@myloanapprove.com
CLIENT_URL=http://localhost:5173
JWT_SECRET=change-this-in-production
```

### Running Both Servers Simultaneously

**Option 1: Two Terminal Windows**
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd server && npm run dev
```

**Option 2: Using Concurrently**
```bash
npm install -D concurrently

# Update package.json scripts:
"dev": "concurrently \"npm run dev\" \"cd server && npm run dev\""

# Then run:
npm run dev
```

---

## 📞 API Endpoints

### Contact Form
- `POST /api/contact` - Submit form
- `GET /api/contact` - List (admin)
- `GET /api/contact/:id` - Get one
- `PATCH /api/contact/:id` - Update
- `DELETE /api/contact/:id` - Delete

### Loan Applications
- `POST /api/applications` - Submit application
- `GET /api/applications` - List all (admin)
- `GET /api/applications/:id` - Get one
- `GET /api/applications/stats` - Dashboard stats
- `PATCH /api/applications/:id` - Update status

### Health
- `GET /api/health` - Server status

**For detailed API documentation, see [server/README.md](server/README.md)**

---

## 🔐 Security

✅ Helmet security headers
✅ CORS protection
✅ Rate limiting
✅ Input validation
✅ No hardcoded secrets
✅ Environment variables
✅ MongoDB injection protection
✅ XSS prevention

---

## 📧 Email Setup (Gmail)

1. Enable 2-factor authentication
2. Go to https://myaccount.google.com/apppasswords
3. Generate app password (16 characters)
4. Add to server/.env:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=paste-16-char-password-here
```

---

## 🎨 Design System

**Colors:**
- Navy: #0F172A (primary)
- Royal Blue: #1D4ED8 (accent)
- Emerald: #059669 (success)
- Background: #F8FAFC

**Typography:**
- Headings: Poppins 600-700
- Body: Inter 400-500
- Line height: 1.6

---

## 🧪 Testing the API

```bash
# Contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "subject": "Personal Loan",
    "message": "I want to apply for a personal loan."
  }'

# Loan application
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "loanType": "personal",
    "loanAmount": 200000,
    "employmentType": "salaried",
    "annualIncome": 500000,
    "creditScore": "good",
    "documents": {"aadhaar": true, "pan": true}
  }'
```

---

## 📱 Responsive Breakpoints

- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+
- All components use Tailwind responsive classes
