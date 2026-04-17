# Google Apps Script Projects

A collection of Google Apps Script mini-projects for automation and data processing.

![Apps Script Logo](https://developers.google.com/apps-script/images/apps-script-logo.png)

## 🚀 Projects Overview

### 1. Bitcoin Price Tracker 📈

A comprehensive Bitcoin price monitoring system that automatically tracks prices, logs data to Google Sheets, and sends intelligent alerts.

![Bitcoin Tracker Demo](./img/bitcoin-tracker-overview.png)

#### 🎯 Key Features

- **Real-time Price Fetching**: Uses CoinGecko API for accurate Bitcoin prices
- **Automated Data Logging**: Records prices with timestamps to Google Sheets
- **Smart Price Alerts**: Email notifications when price crosses custom thresholds
- **Scheduled Execution**: Runs automatically every hour using Google Apps Script triggers
- **Data Visualization**: Clean, organized data perfect for charts and analysis

#### 📊 Live Demo Results

##### Google Sheets Integration
![Google Sheets Data](./img/sheets-data-logging.png)
*Automated price logging with timestamps - perfect for trend analysis*

##### Price Alert System
![Email Alerts](./img/email-alerts.png)
*Smart email notifications when Bitcoin crosses your custom price thresholds*

##### Apps Script Dashboard
![Apps Script Console](./img/apps-script-console.png)
*Clean execution logs and trigger management in Google Apps Script*

##### Price Trend Visualization
![Price Chart](./img/bitcoin-price-chart.png)
*Historical price data ready for Google Sheets charts and analysis*

#### 🛠️ Technical Implementation

```javascript
// Core price fetching function
function getBitcoinPrice() {
  const response = UrlFetchApp.fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
  const data = JSON.parse(response.getContentText());
  return data.bitcoin.usd;
}
```

#### 📈 Sample Output Data

| Timestamp | Bitcoin Price (USD) | Alert Triggered |
|-----------|-------------------|-----------------|
| 2026-04-17 10:00:00 | $67,234.56 | - |
| 2026-04-17 11:00:00 | $68,891.23 | - |
| 2026-04-17 12:00:00 | $71,456.78 | 🚀 High Alert |
| 2026-04-17 13:00:00 | $69,234.12 | - |

#### 🎨 Customization Options

- **Multiple Cryptocurrencies**: Easily extend to track ETH, BTC, ADA, etc.
- **Custom Alert Thresholds**: Set your own high/low price triggers
- **Flexible Scheduling**: Hourly, daily, or custom intervals
- **Advanced Notifications**: Slack, Discord, SMS integration ready
- **Data Analysis**: Moving averages, trend detection, volatility alerts

## 🏗️ Project Structure

```
google-apps-script-projects/
├── README.md                    # This comprehensive guide
├── img/                         # Demo images and screenshots
│   ├── bitcoin-tracker-overview.png
│   ├── sheets-data-logging.png
│   ├── email-alerts.png
│   ├── apps-script-console.png
│   └── bitcoin-price-chart.png
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

## 📱 Mobile-Friendly Alerts

![Mobile Alert](./img/mobile-alert-demo.png)
*Receive instant Bitcoin price alerts on your mobile device*

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
