// Bitcoin Price Tracker - Google Apps Script
// Fetches Bitcoin price and logs to Google Sheets

function getBitcoinPrice() {
  try {
    // Fetch Bitcoin price from CoinGecko API
    const response = UrlFetchApp.fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = JSON.parse(response.getContentText());
    const price = data.bitcoin.usd;
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Log to Google Sheets
    logPriceToSheet(timestamp, price);
    
    // Optional: Send notification if price crosses threshold
    checkPriceAlert(price);
    
    return price;
  } catch (error) {
    console.error('Error fetching Bitcoin price:', error);
    return null;
  }
}

function logPriceToSheet(timestamp, price) {
  // Replace 'YOUR_SHEET_ID' with your actual Google Sheets ID
  const sheetId = 'YOUR_SHEET_ID';
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
  // Append new row with timestamp and price
  sheet.appendRow([timestamp, price]);
}

function checkPriceAlert(currentPrice) {
  // Set your price thresholds here
  const HIGH_THRESHOLD = 100000; // Alert if Bitcoin goes above $100k
  const LOW_THRESHOLD = 30000;   // Alert if Bitcoin goes below $30k
  
  if (currentPrice > HIGH_THRESHOLD) {
    sendAlert(`🚀 Bitcoin Alert: Price is HIGH at $${currentPrice.toLocaleString()}`);
  } else if (currentPrice < LOW_THRESHOLD) {
    sendAlert(`📉 Bitcoin Alert: Price is LOW at $${currentPrice.toLocaleString()}`);
  }
}

function sendAlert(message) {
  // Send email alert
  const email = 'your-email@gmail.com'; // Replace with your email
  GmailApp.sendEmail(email, 'Bitcoin Price Alert', message);
  
  // Optional: Log alert to console
  console.log(message);
}

// Function to set up automatic triggers
function setupTriggers() {
  // Delete existing triggers
  ScriptApp.getProjectTriggers().forEach(trigger => {
    ScriptApp.deleteTrigger(trigger);
  });
  
  // Create new trigger to run every hour
  ScriptApp.newTrigger('getBitcoinPrice')
    .timeBased()
    .everyHours(1)
    .create();
}

// Manual test function
function testBitcoinTracker() {
  const price = getBitcoinPrice();
  console.log(`Current Bitcoin price: $${price}`);
}
