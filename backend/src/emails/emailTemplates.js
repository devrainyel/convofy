export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Convofy - Welcome</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #1e40af 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px; color: #111827; margin: 0;">
  <div style="background: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.15); padding: 48px 40px; max-width: 480px; width: 100%; text-align: center; box-sizing: border-box;">
    <div style="width: 64px; height: 64px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 28px; color: #ffffff; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
      <img src="/convofy-logo.png" alt="logo" style="width: 30px;" />
    </div>
    <h1 style="font-size: 32px; font-weight: 700; margin-bottom: 12px; line-height: 1.2;">
      Welcome to Convofy
    </h1>
    <p style="font-size: 18px; color: #4b5563; margin-bottom: 32px; line-height: 1.5;">
      Start conversations with friends, family, and colleagues real-time! We are super excited for you to be a part of Convofy.
    </p>
    <!-- Fixed spacing section -->
    <div style="text-align: left; margin-bottom: 32px;">
      <h2 style="color: #2563eb; margin: 0 0 8px 0; font-size: 24px; font-weight: 600;">Hello ${name},</h2>
      <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600; color: #374151;">Get Started with few steps:</h3>

      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 40px; height: 40px; background: #f3f4f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 600; margin-top: 2px; flex-shrink: 0;">
          1
        </div>
        <div style="font-size: 16px; line-height: 1.5; color: #374151;">
          Set up your profile picture
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 40px; height: 40px; background: #f3f4f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 600; margin-top: 2px; flex-shrink: 0;">
          2
        </div>
        <div style="font-size: 16px; line-height: 1.5; color: #374151;">
          Find and add your contacts
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 40px; height: 40px; background: #f3f4f6; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 600; margin-top: 2px; flex-shrink: 0;">
          3
        </div>
        <div style="font-size: 16px; line-height: 1.5; color: #374151;">
          Start a conversation
        </div>
      </div>
    </div>
    <!-- Fixed chat preview with proper right alignment -->
   <div style="background: #f3f4f6; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
  <!-- First message - Left side (Convofy Team) -->
  <div style="text-align: left; margin-bottom: 12px;">
    <div style="display: inline-block; padding: 12px 16px; border-radius: 18px; max-width: 70%; font-size: 15px; line-height: 1.4; background: #ffffff; border: 1px solid #e5e7eb; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
      Convofy Team: Welcome! Ready to connect?
    </div>
  </div>
  <!-- Second message - Right side (User) -->
  <div style="text-align: right; margin-bottom: 0;">
    <div style="display: inline-block; padding: 12px 16px; border-radius: 18px; max-width: 70%; font-size: 15px; line-height: 1.4; background: #2563eb; color: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
      Looking forward to it!
    </div>
  </div>
</div>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin: 0 auto; max-width: 100%; width: 100%; background: #2563eb; border-radius: 12px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);">
      <tr>
        <td style="padding: 16px 32px; text-align: center;">
          <a href="${clientURL}" style="background: #2563eb; color: #ffffff !important; font-size: 16px; font-weight: 600; text-decoration: none !important; display: inline-block; line-height: 1.4; width: 100%; box-sizing: border-box;">
            Open Convofy
          </a>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}
