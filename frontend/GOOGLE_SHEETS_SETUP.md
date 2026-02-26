# Google Sheets Integration for MyLoanApprove

This guide explains how to set up Google Sheets integration to automatically log form submissions.

## Steps to Set Up

### 1. Create a Google Cloud Project
- Go to [Google Cloud Console](https://console.cloud.google.com)
- Create a new project
- Enable the **Google Sheets API**

### 2. Create a Service Account
- In the Cloud Console, go to **Service Accounts**
- Create a new service account (e.g., "myloanapprove-sheets")
- Generate a **JSON key** and download it

### 3. Create a Google Sheet
- Go to [Google Sheets](https://sheets.google.com)
- Create a new spreadsheet (e.g., "MyLoanApprove Submissions")
- Set up column headers:
  - **Contact submissions**: Date | Name | Email | Phone | Subject | Message
  - **Applications**: Date | FirstName | LastName | Email | Phone | LoanType | Amount | Employment | Income | BusinessType | YearsInBusiness | CreditScore

### 4. Share with Service Account
- In your new Google Sheet, click **Share**
- Share it with the service account email (found in the JSON key, format: `xxx@xxx.iam.gserviceaccount.com`)
- Give it **Editor** permissions

### 5. Set Environment Variables
Add to `server/.env`:

```dotenv
GOOGLE_SHEETS_SPREADSHEET_ID=YOUR_SHEET_ID
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account",...full json content...}'
```

Replace:
- `YOUR_SHEET_ID`: From the Google Sheet URL (`/spreadsheets/d/{SHEET_ID}/edit`)
- The JSON key content from step 2 (keep it as a valid JSON string)

### 6. Restart Backend
```bash
cd server
node server.js
```

### Example .env
```dotenv
MONGODB_URI=mongodb+srv://...
PORT=5000
NODE_ENV=development

EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@myloanapprove.com
ADMIN_EMAIL=admin@myloanapprove.com

CLIENT_URL=http://localhost:3000
JWT_SECRET=your-secret

GOOGLE_SHEETS_SPREADSHEET_ID=1a2b3c4d5e6f7g8h9i0j
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"my-project",...}'
```

## How It Works

When a form is submitted:
1. Data is saved to MongoDB
2. Confirmation email is sent (if configured)
3. **New row is appended to Google Sheet** with all submission details
4. User gets success message immediately (email/sheets delays don't block response)

## Testing

Submit a contact form or application and check your Google Sheet – you should see a new row appear within seconds!

## Troubleshooting

**No rows appearing in Google Sheet?**
- Check backend logs for `Failed to append to Google Sheets`
- Verify you shared the sheet with the service account email
- Verify the spreadsheet ID is correct in `.env`

**Authentication errors?**
- Ensure JSON credentials are properly formatted in `.env`
- Check that the service account has Editor permissions on the sheet

**Still having issues?**
- Check the backend console for detailed error messages
- The form will still work and save to MongoDB even if Sheets fails
