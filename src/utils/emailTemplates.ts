/**
 * SmartClean Email Template System
 * All HTML is managed here for easy updates and version control.
 */

export const getAdminBriefingTemplate = (data: any) => `
<div style="background-color: #0B0F14; color: #F6F7F8; padding: 40px; font-family: 'Inter', Helvetica, Arial, sans-serif; border-radius: 8px; border: 1px solid #1B2128; max-width: 600px; margin: auto;">
    <div style="border-bottom: 2px solid #4F6DFF; padding-bottom: 20px; margin-bottom: 30px;">
        <h2 style="color: #4F6DFF; text-transform: uppercase; letter-spacing: 4px; font-size: 12px; margin: 0;">Inquiry Log // SmartClean.lk</h2>
        <h1 style="font-size: 24px; font-weight: 300; margin-top: 10px; color: #F6F7F8; text-transform: uppercase;">New Project Briefing</h1>
    </div>

    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 12px 0; color: #4F6DFF; font-size: 10px; text-transform: uppercase; font-weight: bold; width: 140px; border-bottom: 1px solid rgba(255,255,255,0.05);">Authorized Name</td>
            <td style="padding: 12px 0; color: #F6F7F8; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">${data.name}</td>
        </tr>
        <tr>
            <td style="padding: 12px 0; color: #4F6DFF; font-size: 10px; text-transform: uppercase; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">Uplink Email</td>
            <td style="padding: 12px 0; color: #F6F7F8; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">${data.email}</td>
        </tr>
        <tr>
            <td style="padding: 12px 0; color: #4F6DFF; font-size: 10px; text-transform: uppercase; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">Secure Line</td>
            <td style="padding: 12px 0; color: #F6F7F8; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">${data.phone}</td>
        </tr>
        <tr>
            <td style="padding: 12px 0; color: #4F6DFF; font-size: 10px; text-transform: uppercase; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.05);">Volumetric Scale</td>
            <td style="padding: 12px 0; color: #F6F7F8; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">${data.scale} sq. ft.</td>
        </tr>
        <tr>
            <td style="padding: 12px 0; color: #4F6DFF; font-size: 10px; text-transform: uppercase; font-weight: bold;">Sector Logic</td>
            <td style="padding: 12px 0; color: #F6F7F8; font-size: 15px;">${data.sector}</td>
        </tr>
    </table>

    <div style="margin-top: 30px; padding: 20px; background-color: rgba(255,255,255,0.02); border-radius: 4px;">
        <p style="color: #4F6DFF; font-size: 10px; text-transform: uppercase; font-weight: bold; margin-bottom: 10px;">Implementation Vision</p>
        <p style="color: #F6F7F8; font-size: 14px; line-height: 1.6; margin: 0;">${data.vision}</p>
    </div>

    <div style="margin-top: 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
        <p style="font-size: 10px; color: rgba(246,247,248,0.2); text-transform: uppercase; letter-spacing: 2px;">SmartClean // Engineered for permanence</p>
    </div>
</div>
`;

export const getUserWelcomeTemplate = (data: any) => `
<div style="background-color: #0B0F14; color: #F6F7F8; padding: 40px; font-family: 'Inter', Helvetica, Arial, sans-serif; border-radius: 8px; border: 1px solid #1B2128; max-width: 600px; margin: auto;">
    <div style="border-bottom: 2px solid #4F6DFF; padding-bottom: 20px; margin-bottom: 30px; text-align: center;">
        <h2 style="color: #4F6DFF; text-transform: uppercase; letter-spacing: 5px; font-size: 10px; margin: 0; font-weight: bold;">Connection Established</h2>
        <h1 style="font-size: 20px; font-weight: 300; margin-top: 10px; color: #F6F7F8; text-transform: uppercase; letter-spacing: 1px;">Welcome to SmartClean</h1>
    </div>

    <div style="margin-bottom: 30px;">
        <p style="font-size: 16px; color: #F6F7F8; line-height: 1.6;">Hello <strong>${data.name}</strong>,</p>
        <p style="font-size: 15px; color: rgba(246, 247, 248, 0.8); line-height: 1.6;">
            Thank you for initiating your project briefing. We are excited to help you integrate advanced centralized cleaning infrastructure into your property.
        </p>
        <p style="font-size: 15px; color: rgba(246, 247, 248, 0.8); line-height: 1.6;">
            Our engineering department has received your specifications. A specialist will review the architectural context and reach out to you at <strong>${data.phone}</strong> to schedule your on-site assessment.
        </p>
    </div>

    <div style="background-color: rgba(79, 109, 255, 0.05); padding: 25px; border-radius: 4px; border-left: 3px solid #4F6DFF;">
        <p style="color: #4F6DFF; font-size: 10px; text-transform: uppercase; font-weight: bold; margin: 0 0 10px 0;">Submission Receipt</p>
        <p style="font-size: 13px; margin: 0; color: rgba(246, 247, 248, 0.6);">A digital copy of your briefing has been logged in our secure system. Your site coordinates are being processed.</p>
    </div>

    <div style="margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px; text-align: center;">
        <p style="font-size: 9px; color: #4F6DFF; text-transform: uppercase; letter-spacing: 3px; font-weight: bold; margin: 0;">SmartClean // Engineered for Permanence</p>
        <p style="font-size: 9px; color: rgba(246, 247, 248, 0.2); margin-top: 5px;">Colombo, Sri Lanka | smartclean.gtl@gmail.com</p>
    </div>
</div>
`;
