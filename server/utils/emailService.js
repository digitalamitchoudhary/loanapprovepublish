import nodemailer from 'nodemailer';
 
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//   user: process.env.EMAIL_USER,
//   pass: process.env.EMAIL_PASSWORD,
// },
// });
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};
// // Verify transporter connection
// transporter.verify((error, success) => {
//   if (error) {
//     console.log('⚠️  Email service not configured properly:', error.message);
//   } else {
//     console.log('✅ Email service is ready');
//   }
// });

// ============================================
// VERIFY EMAIL SERVICE (Optional)
// ============================================
export const verifyEmailService = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log("✅ Email service is ready");
  } catch (error) {
    console.log("⚠️ Email service verification failed:", error.message);
  }
};

// export const sendEmail = async (options) => {
//   // If email credentials are not configured, skip email sending
//   if (!process.env.EMAIL_USER?.trim() || !process.env.EMAIL_PASSWORD?.trim()) {
//     console.log('⚠️  Email service not configured. Skipping email:', options.to);
//     return false;
//   }

//   const mailOptions = {
//     from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
//     to: options.to,
//     subject: options.subject,
//     html: options.html,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log(`📧 Email sent to ${options.to}`);
//     return true;
//   } catch (error) {
//     console.error('❌ Email sending failed:', error.message);
//     return false;
//   }
// };
export const sendEmail = async (options) => {

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log('⚠️ Email credentials missing');
    return false;
  }

  const transporter = createTransporter(); // 👈 IMPORTANT

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📧 Email sent to ${options.to}`);
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
    return false;
  }
};

export const sendContactConfirmation = async (email, name) => {
  const html = `
    <div style="font-family: 'Inter', sans-serif; color: #0F172A;">
      <h2 style="color: #1D4ED8; margin-bottom: 20px;">Thank You for Contacting MyLoanApprove</h2>
      <p>Hi <strong>${name}</strong>,</p>
      <p>We have received your message and will get back to you within 24 hours.</p>
      <p style="margin: 30px 0; color: #64748B;">
        Our team is committed to helping you find the perfect loan solution for your needs.
      </p>
      <p>Best regards,<br><strong>MyLoanApprove Team</strong></p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject: 'Thank You for Contacting MyLoanApprove',
    html,
  });
};

export const sendContactNotification = async (contact) => {
  const html = `
    <div style="font-family: 'Inter', sans-serif; color: #0F172A;">
      <h2 style="color: #1D4ED8; margin-bottom: 20px;">New Contact Form Submission</h2>
      <div style="background: #F8FAFC; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>Subject:</strong> ${contact.subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1D4ED8;">
          ${contact.message.replace(/\n/g, '<br>')}
        </p>
        <p style="color: #64748B; margin-top: 20px; font-size: 12px;">
          Submitted: ${new Date(contact.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `New Contact Form: ${contact.subject || 'General Inquiry'}`,
    html,
  });
};

export const sendApplicationConfirmation = async (application) => {
  const loanTypeLabel = {
    personal: 'Personal Loan',
    home: 'Home Loan',
    business: 'Business Loan',
    car: 'Car Loan',
  };

  const html = `
    <div style="font-family: 'Inter', sans-serif; color: #0F172A;">
      <h2 style="color: #1D4ED8; margin-bottom: 20px;">Loan Application Received</h2>
      <p>Hi <strong>${application.firstName} ${application.lastName}</strong>,</p>
      <p>Thank you for applying for a <strong>${loanTypeLabel[application.loanType]}</strong> with MyLoanApprove.</p>
      
      <div style="background: #F8FAFC; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1D4ED8; margin-top: 0;">Application Details</h3>
        <p><strong>Loan Type:</strong> ${loanTypeLabel[application.loanType]}</p>
        <p><strong>Requested Amount:</strong> ₹${application.loanAmount.toLocaleString('en-IN')}</p>
        <p><strong>Status:</strong> <span style="color: #059669; font-weight: 600;">Under Review</span></p>
      </div>
      
      <p style="color: #64748B;">
        Our team will review your application within 2-3 business days and contact you shortly.
      </p>
      
      <p>Best regards,<br><strong>MyLoanApprove Team</strong></p>
    </div>
  `;

  return sendEmail({
    to: application.email,
    subject: `${loanTypeLabel[application.loanType]} Application Received`,
    html,
  });
};

export const sendApplicationNotification = async (application) => {
  const loanTypeLabel = {
    personal: 'Personal Loan',
    home: 'Home Loan',
    business: 'Business Loan',
    car: 'Car Loan',
  };

  const html = `
    <div style="font-family: 'Inter', sans-serif; color: #0F172A;">
      <h2 style="color: #1D4ED8; margin-bottom: 20px;">New Loan Application</h2>
      <div style="background: #F8FAFC; padding: 20px; border-radius: 8px;">
        <h3 style="color: #059669;">${loanTypeLabel[application.loanType]}</h3>
        <p><strong>Applicant:</strong> ${application.firstName} ${application.lastName}</p>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Phone:</strong> ${application.phone}</p>
        <p><strong>Loan Amount:</strong> ₹${application.loanAmount.toLocaleString('en-IN')}</p>
        <p><strong>Employment:</strong> ${application.employmentType}</p>
        <p><strong>Annual Income:</strong> ₹${application.annualIncome.toLocaleString('en-IN')}</p>
        <p><strong>Status:</strong> Submitted</p>
      </div>
      <p style="margin-top: 20px;">
        <a href="${process.env.CLIENT_URL}/admin/applications" style="background: #1D4ED8; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; display: inline-block;">
          View in Admin Panel
        </a>
      </p>
    </div>
  `;

  return sendEmail({
    to: process.env.ADMIN_EMAIL,
    subject: `New ${loanTypeLabel[application.loanType]} Application - ${application.firstName} ${application.lastName}`,
    html,
  });
};
