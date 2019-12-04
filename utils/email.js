const nodemailer = require("nodemailer");
module.exports = async function(options) {
  try {
    // 1. Make a Transporter for sending the email, we can use custom mail transpoter e.g gmail
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "surbhitanu1998@gmail.com",
        pass: "fwnvpwlqtppxbbff"
      }
    });
    // 2 Set mail Options
    // from: we can use anything here even a name.. using email is not necessary
    const mailOptions = {
      from: '"Surbhi" surbhitanu1998@gmail.com',
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html
    };
    // 3. Sending Email
    await transport.sendMail(mailOptions);
  } catch (err) {
    throw new Error(err);
  }
};
