# Google Apps Script Projects

A collection of Google Apps Script mini-projects for automation and data processing.

## 🚀 Projects Overview

### 1. Bitcoin Price Tracker 📈

A comprehensive Bitcoin price monitoring system that automatically tracks prices, logs data to Google Sheets, and sends intelligent alerts.

#### 🎯 Key Features

- **Real-time Price Fetching**: Uses CoinMarketCap API for accurate Bitcoin prices
- **Automated Data Logging**: Records prices with timestamps to Google Sheets
- **Smart Price Alerts**: Email notifications when price crosses custom thresholds
- **Scheduled Execution**: Runs automatically using Google Apps Script triggers
- **Data Visualization**: Clean, organized data perfect for charts and analysis

#### 📊 Live Demo Results

##### Google Apps Script Code Editor
![Apps Script Code](./img/Screenshot%20from%202026-04-17%2016-22-17.png)
*Professional Google Apps Script implementation with CoinMarketCap API integration*

##### Google Sheets Data & Visualization
![Google Sheets Chart](./img/Screenshot%20from%202026-04-17%2016-22-59.png)
*Real Bitcoin price data automatically logged with beautiful chart visualization*

#### 🛠️ Technical Implementation

The project demonstrates professional Google Apps Script development with:

- **API Integration**: CoinMarketCap API for real-time cryptocurrency data
- **Error Handling**: Robust exception management and logging
- **Automated Scheduling**: Time-based triggers for regular execution
- **Data Persistence**: Google Sheets as a database with automatic formatting
- **Visualization**: Built-in Google Sheets charting for trend analysis

```javascript
// Core price fetching function
function getBitcoinPrice() {
  const response = UrlFetchApp.fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/');
  const data = JSON.parse(response.getContentText());
  return parseFloat(data[0].price_usd);
}
```

#### 📈 Project Outcomes

- **✅ Automated Data Collection**: 24/7 Bitcoin price monitoring
- **📊 Visual Analytics**: Professional charts showing price trends
- **🔔 Smart Notifications**: Threshold-based alert system
- **📱 Mobile Access**: Google Sheets mobile app integration
- **🔄 Zero Maintenance**: Set-and-forget automation

## 🏗️ Project Structure

```
google-apps-script-projects/
├── README.md                    # This comprehensive guide
├── img/                         # Project screenshots
│   ├── Screenshot from 2026-04-17 16-22-17.png  # Apps Script code
│   └── Screenshot from 2026-04-17 16-22-59.png  # Google Sheets data
├── bitcoin-price-tracker/       # Bitcoin tracker project
│   ├── Code.gs                  # Main Apps Script code
│   ├── README.md                # Detailed setup guide
│   └── appsscript.json          # Configuration file
└── .gitignore                   # Git ignore rules
```

## 🚀 Quick Start Guide

### 1. **Clone Repository**
```bash
git clone https://github.com/fvgm-spec/google-apps-script-projects.git
cd google-apps-script-projects
```

### 2. **Setup Google Apps Script**
1. Open [Google Apps Script](https://script.google.com/)
2. Create new project → Copy code from `bitcoin-price-tracker/Code.gs`
3. Configure your Google Sheets ID and email preferences
4. Run `setupTriggers()` to enable automation

### 3. **Customize & Deploy**
- Set your price alert thresholds
- Configure notification preferences  
- Test with `testBitcoinTracker()`
- Monitor execution in Apps Script dashboard

## 📱 Mobile-Friendly Features

The Bitcoin Price Tracker is designed for modern workflows:

- **📊 Google Sheets Mobile App**: Access your data anywhere
- **📧 Email Notifications**: Instant alerts on all devices  
- **📱 Responsive Charts**: Beautiful visualizations on mobile
- **☁️ Cloud Sync**: Real-time data across all platforms

## 🔮 Future Projects Pipeline

- **📊 Stock Portfolio Tracker**: Monitor multiple stocks with dividend tracking
- **🌤️ Weather Alert System**: Location-based weather notifications
- **📧 Email Automation Suite**: Smart email processing and responses
- **📅 Calendar Integration Tools**: Meeting automation and scheduling
- **💰 Expense Tracker**: Automated expense categorization from Gmail receipts

## 🤝 Contributing

Feel free to contribute new Apps Script projects! Follow the established folder structure:

1. Create project folder: `/your-project-name/`
2. Add main code: `Code.gs`
3. Include documentation: `README.md`
4. Add configuration: `appsscript.json`
5. Include demo images in `/img/`

## 📄 License

MIT License - Feel free to use, modify, and distribute these projects.

---

### 🌟 **Why Google Apps Script?**

- **🔄 Automation**: Set-and-forget scheduled execution
- **🔗 Integration**: Native Google Workspace connectivity
- **☁️ Cloud-Based**: No server maintenance required
- **🆓 Free Tier**: Generous usage limits for personal projects
- **📱 Accessible**: Manage from any device with internet

**Start automating your workflows today!** 🚀
