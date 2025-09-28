# 📊 SCHOLARIX Form Integration Setup Guide

## Overview
This guide will help you set up Google Sheets integration and email notifications for the SCHOLARIX consultation form.

---

## 🗂️ Part 1: Google Sheets Setup

### Step 1: Create Google Spreadsheet

1. **Create New Spreadsheet**:
   - Go to https://sheets.google.com
   - Click "Blank" to create new spreadsheet
   - Name it: "SCHOLARIX Lead Submissions"

2. **Set up Headers** (Row 1):
   ```
   A1: Timestamp
   B1: First Name  
   C1: Last Name
   D1: Email
   E1: Phone
   F1: Country
   G1: Service
   H1: Message
   I1: Status
   ```

### Step 2: Create Google Apps Script

1. **Open Script Editor**:
   - In your spreadsheet, go to `Extensions` > `Apps Script`
   - Delete default code and paste the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the request data
    const requestData = JSON.parse(e.postData.contents);
    
    if (requestData.action === 'addLead') {
      const data = requestData.data;
      
      // Add data to spreadsheet
      sheet.appendRow([
        data.timestamp,
        data.firstName,
        data.lastName, 
        data.email,
        data.phone,
        data.country,
        data.service,
        data.message,
        'New'
      ]);
      
      return ContentService
        .createTextOutput(JSON.stringify({ success: true, message: 'Data added successfully' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'Invalid action' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'SCHOLARIX Lead Capture API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### Step 3: Deploy Apps Script

1. **Deploy as Web App**:
   - Click `Deploy` > `New Deployment`
   - Choose type: `Web app`
   - Description: "SCHOLARIX Lead Capture API"
   - Execute as: `Me`
   - Who has access: `Anyone`
   - Click `Deploy`

2. **Copy Web App URL**:
   - Copy the provided web app URL
   - Format: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

---

## 📧 Part 2: Email Service Setup

### Option A: EmailJS (Recommended - Free)

1. **Create EmailJS Account**:
   - Go to https://www.emailjs.com/
   - Sign up for free account

2. **Setup Email Service**:
   - Go to Email Services
   - Click `Add New Service`
   - Choose Gmail/Outlook/etc.
   - Follow connection instructions

3. **Create Email Template**:
   - Go to Email Templates
   - Click `Create New Template`
   - Use template ID: `scholarix_lead_notification`
   - Template content:
   ```html
   Subject: New SCHOLARIX Consultation Request from {{from_name}}
   
   New consultation request received:
   
   Name: {{from_name}}
   Email: {{reply_to}}
   Phone: {{phone}}
   Preferred Country: {{country}}
   Service: {{service}}
   Message: {{message}}
   
   Submitted: {{timestamp}}
   ```

4. **Get API Keys**:
   - Note your Service ID, Template ID, and User ID

### Option B: Direct SMTP (Alternative)

If you prefer direct email sending, you can use your own SMTP server or services like SendGrid, Mailgun, etc.

---

## ⚙️ Part 3: Update Configuration

### Step 1: Update Website Code

Replace the placeholder URLs in your `src/index.tsx` file:

```typescript
// Replace these lines in sendToGoogleSheets function:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec'

// Replace these in sendEmailNotification function:
service_id: 'YOUR_ACTUAL_SERVICE_ID',
template_id: 'scholarix_lead_notification', 
user_id: 'YOUR_ACTUAL_USER_ID',
```

### Step 2: Environment Variables (Optional Security Enhancement)

For production, store sensitive data in environment variables:

1. **Update wrangler.jsonc**:
```json
{
  "vars": {
    "GOOGLE_SCRIPT_URL": "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
    "EMAILJS_SERVICE_ID": "your_service_id",
    "EMAILJS_TEMPLATE_ID": "scholarix_lead_notification",
    "EMAILJS_USER_ID": "your_user_id"
  }
}
```

2. **Update code to use env vars**:
```typescript
const GOOGLE_SCRIPT_URL = c.env?.GOOGLE_SCRIPT_URL || 'fallback_url'
```

---

## 🧪 Part 4: Testing

### Step 1: Build and Deploy

```bash
npm run build
npm run deploy
```

### Step 2: Test Form Submission

1. Visit https://scholarixstudy.com
2. Fill out the consultation form
3. Submit and verify:
   - ✅ Data appears in Google Sheets
   - ✅ Email sent to saif.r@eigermarvelhr.com
   - ✅ User sees success message

### Step 3: Monitor Logs

```bash
wrangler tail
```

---

## 📋 Expected Results

### Google Sheets Data:
| Timestamp | First Name | Last Name | Email | Phone | Country | Service | Message | Status |
|-----------|------------|-----------|--------|--------|---------|---------|---------|---------|
| 2025-09-28T10:30:00Z | John | Doe | john@email.com | +1 555-0123 | USA | Complete Package | Interested in MBA programs | New |

### Email Notification:
- **To**: saif.r@eigermarvelhr.com
- **Subject**: New SCHOLARIX Consultation Request from John Doe
- **Content**: Complete lead details formatted for easy reading

---

## 🔧 Troubleshooting

### Common Issues:

1. **Google Sheets not updating**:
   - Check Apps Script permissions
   - Verify web app deployment
   - Check execution transcript for errors

2. **Emails not sending**:
   - Verify EmailJS service connection
   - Check template ID and parameters
   - Monitor EmailJS dashboard

3. **Form showing errors**:
   - Check browser console for JavaScript errors
   - Verify API endpoint is responding
   - Check Cloudflare Workers logs

### Debug Commands:
```bash
# Test API endpoint directly
curl -X POST https://scholarixstudy.com/api/lead \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com"}'

# Check deployment logs
wrangler tail --format pretty
```

---

## 🚀 Go Live Checklist

- [ ] Google Spreadsheet created with proper headers
- [ ] Apps Script deployed as web app
- [ ] EmailJS account configured with template
- [ ] Website code updated with real URLs/IDs
- [ ] Form tested end-to-end
- [ ] Email notifications confirmed working
- [ ] Spreadsheet receiving data correctly

**Your SCHOLARIX consultation form is now fully integrated! 🎉**