# Bitcoin Price Tracker

A Google Apps Script project that automatically tracks Bitcoin prices and logs them to Google Sheets.

## Features

- **Real-time Price Fetching**: Uses CoinGecko API to get current Bitcoin price
- **Automated Logging**: Records prices with timestamps to Google Sheets
- **Price Alerts**: Sends email notifications when price crosses thresholds
- **Scheduled Execution**: Runs automatically every hour using triggers

## Setup Instructions

### 1. Google Sheets Setup
1. Create a new Google Sheets document
2. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
3. Replace `YOUR_SHEET_ID` in `Code.gs` with your actual Sheet ID

### 2. Apps Script Setup
1. Open [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Replace the default code with the contents of `Code.gs`
4. Copy the `appsscript.json` configuration

### 3. Configuration
1. **Email Alerts**: Replace `your-email@gmail.com` with your actual email
2. **Price Thresholds**: Adjust `HIGH_THRESHOLD` and `LOW_THRESHOLD` values
3. **Frequency**: Modify the trigger interval in `setupTriggers()` function

### 4. Permissions
1. Run the `setupTriggers()` function once to create automatic execution
2. Grant necessary permissions:
   - Google Sheets access
   - Gmail access (for alerts)
   - External URL access (for API calls)

## Usage

### Manual Execution
```javascript
testBitcoinTracker(); // Test the price fetching
```

### Automatic Execution
The script runs automatically every hour once triggers are set up.

## API Reference

- **CoinGecko API**: Free cryptocurrency price API
- **Endpoint**: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`

## Customization

- **Add More Cryptocurrencies**: Modify the API call to include other coins
- **Different Intervals**: Change trigger frequency in `setupTriggers()`
- **Additional Notifications**: Add Slack, Discord, or other notification methods
- **Data Analysis**: Add functions to calculate moving averages, trends, etc.

## Troubleshooting

- **API Limits**: CoinGecko has rate limits for free tier
- **Sheet Permissions**: Ensure the script has access to your Google Sheets
- **Email Limits**: Gmail has daily sending limits for Apps Script

## License

MIT License - Feel free to modify and use for your own projects.
