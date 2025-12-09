# Nodemailer Setup Guide

## Overview
This project has been migrated from Resend to Nodemailer for sending emails. Nodemailer is more flexible and works with any SMTP server (Gmail, Outlook, SendGrid, Mailgun, etc.).

## Key Differences: Resend vs Nodemailer

### Resend (Old)
- **API-based**: Uses Resend's API with an API key
- **Simple**: Just needs `RESEND_API_KEY` and `EMAIL_FROM`
- **Limited**: Only works with Resend service

### Nodemailer (New)
- **SMTP-based**: Works with any email provider that supports SMTP
- **Flexible**: Can use Gmail, Outlook, SendGrid, Mailgun, or your own SMTP server
- **More configuration**: Requires SMTP credentials

## Environment Variables

Update your `.env` file with the following variables:

### Required Variables
```env
# Email sender information
EMAIL_FROM=your-email@example.com
EMAIL_FROM_NAME=Convofy

# SMTP Configuration
SMTP_HOST=smtp.gmail.com          # SMTP server hostname
SMTP_PORT=587                     # SMTP port (587 for TLS, 465 for SSL)
SMTP_USER=your-email@example.com  # Your email address
SMTP_PASS=your-app-password       # Your email password or app-specific password
SMTP_SECURE=false                 # true for port 465 (SSL), false for port 587 (TLS)
```

## Common SMTP Providers Configuration

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password  # Generate from Google Account settings
```

**Note**: For Gmail, you need to:
1. Enable 2-factor authentication
2. Generate an "App Password" from your Google Account settings
3. Use the app password (not your regular password)

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

### Custom SMTP Server
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
```

## Code Changes

### Before (Resend)
```javascript
import { Resend } from 'resend';
const resendClient = new Resend(process.env.RESEND_API_KEY);

const {data, error} = await resendClient.emails.send({
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Hello',
    html: '<p>Hello World</p>',
});
```

### After (Nodemailer)
```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const info = await transporter.sendMail({
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Hello',
    html: '<p>Hello World</p>',
});
```

## Testing Your Configuration

The transporter automatically verifies the SMTP connection on startup. Check your console for:
- ✅ `SMTP server is ready to send emails` - Configuration is correct
- ❌ `SMTP connection error:` - Check your credentials and settings

## Removing Resend Dependency

After confirming Nodemailer works, you can remove Resend from your dependencies:

```bash
npm uninstall resend
```

## Troubleshooting

### "Invalid login" error
- Double-check your `SMTP_USER` and `SMTP_PASS`
- For Gmail, make sure you're using an App Password, not your regular password
- Ensure 2FA is enabled for Gmail

### "Connection timeout" error
- Check your `SMTP_HOST` and `SMTP_PORT`
- Verify your firewall/network allows SMTP connections
- Try different ports (587 vs 465)

### "Authentication failed" error
- Verify your credentials are correct
- Some providers require specific username formats
- Check if your account has SMTP access enabled

## Benefits of Nodemailer

1. **Flexibility**: Works with any SMTP provider
2. **No vendor lock-in**: Easy to switch providers
3. **More control**: Direct SMTP access
4. **Cost-effective**: Can use free tiers of various providers
5. **Self-hosted option**: Can use your own mail server


