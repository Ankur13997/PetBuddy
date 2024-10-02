// controller.js

const XLSX = require('xlsx');
const path = require('path');

// Function to subscribe an email and save it to an Excel file
const subscribeEmail = (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
  
    // Path to your Excel file
    const filePath = path.join(__dirname, '../subscriber_emails.xlsx');
  
    // Load the workbook
    const workbook = XLSX.readFile(filePath);
    const worksheetName = 'Subscribers'; // Define the name of your worksheet
    let worksheet;
  
    // Check if the worksheet exists, if not create it
    if (workbook.Sheets[worksheetName]) {
      worksheet = workbook.Sheets[worksheetName];
    } else {
      // If the sheet doesn't exist, create a new one
      worksheet = XLSX.utils.aoa_to_sheet([]); // Create a new empty sheet
      workbook.SheetNames.push(worksheetName);
      workbook.Sheets[worksheetName] = worksheet;
    }
  
    // Get existing emails
    const existingEmails = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).flat();
  
    // Check for duplicates
    if (existingEmails.includes(email)) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }
  
    // Add new email to the worksheet
    const newRow = [email]; // Creating a new row for the email
    XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 }); // Append new email to the end
  
    // Write the updated workbook back to the file
    XLSX.writeFile(workbook, filePath);
  
    return res.status(200).json({ message: 'Subscribed successfully!' });
};

module.exports = { subscribeEmail };
