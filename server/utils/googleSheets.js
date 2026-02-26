import { google } from 'googleapis';

let sheetsClient = null;
let spreadsheetId = null;

function initSheets() {
  if (sheetsClient) return { sheetsClient, spreadsheetId };

  const credsJson = process.env.GOOGLE_SHEETS_CREDENTIALS;
  const sheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

  if (!credsJson || !sheetId) {
    console.log('⚠️ Google Sheets not configured. Provide credentials and spreadsheet ID.');
    return null;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credsJson),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheetsClient = google.sheets({ version: 'v4', auth });
    spreadsheetId = sheetId;
    return { sheetsClient, spreadsheetId };
  } catch (err) {
    console.error('⚠️ Failed to initialize Google Sheets client:', err.message);
    return null;
  }
}

async function appendRow(values, sheetName = 'Contacts') {
  const result = initSheets();
  if (!result) return false;

  const { sheetsClient: sheets, spreadsheetId: id } = result;

  try {
    // Use the format "SheetName!A:A" to append to the end of the sheet
    const range = `${sheetName}!A:A`;
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: id,
      range,
      valueInputOption: 'RAW',
      resource: { values: [values] },
    });
    console.log(`✅ Appended to Google Sheet (${sheetName})`);
    return true;
  } catch (error) {
    console.error(`❌ Google Sheets append failed (${sheetName}):`, error.message);
    // Don't stop the process - Google Sheets failure shouldn't block form submission
    return false;
  }
}

export const appendContact = (contact) => {
  // row: timestamp, name, email, phone, subject, message
  const row = [
    new Date(contact.createdAt).toISOString(),
    contact.name,
    contact.email,
    contact.phone,
    contact.subject || '',
    contact.message.replace(/\n/g, ' '),
  ];
  // Use "Contacts" sheet (create this sheet in Google Sheets if it doesn't exist)
  return appendRow(row, 'Contacts');
};

export const appendApplication = (application) => {
  // row: timestamp, first, last, email, phone, loanType, amount, employment, income, businessType, yearsInBiz, creditScore
  const row = [
    new Date(application.createdAt).toISOString(),
    application.firstName,
    application.lastName,
    application.email,
    application.phone,
    application.loanType,
    application.loanAmount,
    application.employmentType,
    application.annualIncome,
    application.businessType || '',
    application.yearsInBusiness || '',
    application.creditScore || '',
  ];
  // Use "Applications" sheet (create this sheet in Google Sheets if it doesn't exist)
  return appendRow(row, 'Applications');
};
