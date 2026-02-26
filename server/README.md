# MyLoanApprove Backend API Server

Production-ready Node.js + Express + MongoDB backend for MyLoanApprove fintech platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB Atlas account (free tier available at https://www.mongodb.com/cloud/atlas)
- Gmail account with App Password enabled (for email notifications)

### Installation

1. **Install Dependencies**
```bash
cd server
npm install
```

2. **Create Environment File**
```bash
cp .env.example .env
```

3. **Configure .env**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myloanapprove
PORT=5000
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=noreply@myloanapprove.com
ADMIN_EMAIL=admin@myloanapprove.com
CLIENT_URL=http://localhost:5173
JWT_SECRET=your-super-secret-jwt-key-here-change-in-production
```

### Running the Server

**Development Mode (with auto-reload)**
```bash
npm run dev
```

**Production Mode**
```bash
npm start
```

Server runs at: `http://localhost:5000`

## 📚 API Documentation

### Contact Form Endpoint

**POST** `/api/contact`

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Personal Loan",
  "message": "I am interested in a personal loan..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you within 24 hours.",
  "contactId": "60d5ec49c1234567890abcde"
}
```

**Rate Limiting:** 5 submissions per hour per IP
**Validation:**
- Name: required, min 2 characters
- Email: required, valid email format
- Phone: required, exactly 10 digits
- Message: required, min 10 characters
- Subject: optional

---

### Loan Application Endpoint

**POST** `/api/applications`

Submit a loan application.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "loanType": "personal",
  "loanAmount": 200000,
  "employmentType": "salaried",
  "annualIncome": 500000,
  "businessType": null,
  "yearsInBusiness": null,
  "creditScore": "good",
  "documents": {
    "aadhaar": true,
    "pan": true,
    "salarySlips": true,
    "bankStatements": true,
    "propertyDocs": false
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your application has been submitted successfully. Our team will review it within 2-3 business days.",
  "applicationId": "60d5ec49c1234567890abcde"
}
```

**Rate Limiting:** 3 submissions per 24 hours per IP

**Validation:**
- Loan Type: personal, home, business, or car
- Loan Amount: must be within loan type range
- Employment Type: salaried, self-employed, business-owner, retired
- Annual Income: min ₹100,000

**Loan Amount Ranges:**
- Personal Loan: ₹10,000 - ₹500,000
- Home Loan: ₹500,000 - ₹10,000,000
- Business Loan: ₹100,000 - ₹5,000,000
- Car Loan: ₹50,000 - ₹2,000,000

---

### Get All Contacts (Admin)

**GET** `/api/contact`

Retrieve all contact form submissions.

**Query Parameters:**
- `status`: Filter by status (new, read, responded)
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "total": 25,
  "page": 1,
  "limit": 10,
  "pages": 3,
  "contacts": [...]
}
```

---

### Get All Applications (Admin)

**GET** `/api/applications`

Retrieve all loan applications.

**Query Parameters:**
- `status`: Filter by status (submitted, under-review, approved, rejected, disbursed)
- `loanType`: Filter by loan type
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

**Response:**
```json
{
  "success": true,
  "total": 50,
  "page": 1,
  "limit": 10,
  "pages": 5,
  "applications": [...]
}
```

---

### Get Application Stats (Admin)

**GET** `/api/applications/stats`

Get dashboard statistics for loan applications.

**Response:**
```json
{
  "success": true,
  "stats": {
    "total": 150,
    "totalAmount": 15000000,
    "byLoanType": [
      {
        "_id": "personal",
        "count": 80,
        "totalAmount": 5000000,
        "avgAmount": 62500
      }
    ],
    "byStatus": [
      {
        "_id": "submitted",
        "count": 30
      }
    ]
  }
}
```

---

### Get Single Contact (Admin)

**GET** `/api/contact/:id`

Retrieve a specific contact submission.

---

### Update Contact Status (Admin)

**PATCH** `/api/contact/:id`

Update the status of a contact submission.

**Request Body:**
```json
{
  "status": "responded"
}
```

---

### Update Application (Admin)

**PATCH** `/api/applications/:id`

Update loan application details.

**Request Body:**
```json
{
  "status": "under-review",
  "adminNotes": "Reviewing documents..."
}
```

---

## 🔐 Security Features

✅ **Helmet.js** - HTTP headers security
✅ **CORS** - Cross-origin request handling
✅ **Rate Limiting** - Prevents abuse and DDoS
✅ **Input Validation** - Express-validator for all inputs
✅ **MongoDB** - Data persistence with encryption
✅ **Environment Variables** - No hardcoded secrets
✅ **Error Handling** - Comprehensive error messages

## 📧 Email Integration

### Gmail Setup (Recommended)

1. Enable 2-factor authentication on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an app-specific password
4. Add to `.env`:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

### Email Features

- **Contact Confirmation**: Auto-reply to users who submit contact form
- **Admin Notification**: Notify admin of new contacts and applications
- **Application Confirmation**: Confirm receipt of loan application
- **Professional Templates**: HTML formatted emails with branding

## 📊 Database Schema

### Contact Model
```javascript
{
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: String (new, read, responded),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Application Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  loanType: String,
  loanAmount: Number,
  employmentType: String,
  annualIncome: Number,
  businessType: String,
  yearsInBusiness: Number,
  creditScore: String,
  documents: Object,
  status: String,
  adminNotes: String,
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔧 Project Structure

```
server/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   ├── contactController.js
│   └── applicationController.js
├── models/
│   ├── Contact.js
│   └── Application.js
├── routes/
│   ├── contact.js
│   └── application.js
├── middleware/
│   ├── errorHandler.js
│   └── validation.js
├── utils/
│   └── emailService.js
├── .env.example           # Environment variables template
├── package.json
└── server.js              # Main entry point
```

## 🧪 Testing the API

### Using cURL

**Contact Form:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "subject": "Personal Loan",
    "message": "I am interested in applying for a personal loan."
  }'
```

**Loan Application:**
```bash
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
    "documents": {
      "aadhaar": true,
      "pan": true,
      "salarySlips": true,
      "bankStatements": true,
      "propertyDocs": false
    }
  }'
```

### Using Postman

1. Import the API endpoints into Postman
2. Set `{{BASE_URL}}` to `http://localhost:5000/api`
3. Test each endpoint with provided JSON payloads

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Error
- Verify MongoDB URI in `.env`
- Check IP whitelist on MongoDB Atlas
- Ensure database credentials are correct

### Email Not Sending
- Verify Gmail app password is correct
- Check email configuration in `.env`
- Ensure 2FA is enabled on Gmail account
- Check spam folder

### CORS Errors
- Verify `CLIENT_URL` in `.env` matches frontend URL
- Check browser console for exact error message
- Ensure frontend is running on correct port

## 📈 Production Deployment

### Recommendations
1. **Render.com** - Great for Node.js (free tier available)
2. **Railway.app** - Simple deployment
3. **Heroku** - Industry standard
4. **AWS** - For large scale

### Environment Variables for Production
```
NODE_ENV=production
JWT_SECRET=very-long-random-string-here
MONGODB_URI=your-production-mongodb-uri
PORT=5000
```

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Support

For issues or questions:
- Email: support@myloanapprove.com
- Documentation: See main README.md

---

**Version:** 1.0.0  
**Last Updated:** February 2025  
**Status:** Production Ready ✅
