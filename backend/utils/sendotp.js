import nodemailer from 'nodemailer';

const sendOTP = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

  // Set up email transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kuramdasusaiteja@gmail.com',
      pass: 'Long@pass1',
    },
  });

  // Email options
  const mailOptions = {
    from: 'kuramdasusaiteja@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  // Send email
  await transporter.sendMail(mailOptions);

  return otp;
};

export default sendOTP;
