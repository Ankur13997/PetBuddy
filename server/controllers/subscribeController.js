const { google } = require('googleapis');
require('dotenv').config(); // Load environment variables from the .env file

// Parse the Google OAuth credentials from the environment variable
const credentials = JSON.parse(process.env.GOOGLE_OAUTH_CREDENTIALS);
// Setup the Google Sheets API client
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

// Google Sheet ID and sheet name
const SPREADSHEET_ID = '1R0KocC87Uj3HnyK8M6sczYkkoDjcupRpUEZ0Xzh47PU'; // Your Google Sheet ID
const SUBSCRIBERS_SHEET_NAME = 'Subscribers'; // Your subscribers sheet name
const CONTACT_SHEET_NAME = 'Contact'; // Your contact sheet name

// Function to subscribe an email and save it to a Google Sheet
const subscribeEmail = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Fetch the existing emails from the Google Sheet
        const getRows = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SUBSCRIBERS_SHEET_NAME}!A:A` // Fetch all emails in column A
        });

        const existingEmails = getRows.data.values ? getRows.data.values.flat() : [];

        // Check if the email is already subscribed
        if (existingEmails.includes(email)) {
            return res.status(400).json({ message: 'Email is already subscribed' });
        }

        // Append the new email to the Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SUBSCRIBERS_SHEET_NAME}!A:A`,
            valueInputOption: 'RAW',
            resource: {
                values: [[email]] // Add new email as a new row
            }
        });

        return res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Error subscribing email:', error);
        return res.status(500).json({ message: 'Failed to subscribe email' });
    }
};

// Function to save contact information to Google Sheets
const saveContactUsInfo = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    try {
        // Append the new contact info to the Google Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${CONTACT_SHEET_NAME}!A:C`, // Assuming A is Name, B is Email, C is Message
            valueInputOption: 'RAW',
            resource: {
                values: [[name, email, message]] // Add new contact info as a new row
            }
        });

        return res.status(200).json({ message: 'Contact information saved successfully!' });
    } catch (error) {
        console.error('Error saving contact info:', error);
        return res.status(500).json({ message: 'Failed to save contact information' });
    }
};

module.exports = { subscribeEmail, saveContactUsInfo };
