const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**Send mail */
const sendMail = async (to, subject, text) => {
  try {
      return transport.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text:`Hi there,

      We're excited to let you know that your order  has been dispatched and is on its way!

      You can track your order status here: tracking

      Thank you for shopping with us!

      Sincerely,
      The Team
    `,
    });

  } catch (error) {
    return false;
  }
};

module.exports={
    sendMail
}