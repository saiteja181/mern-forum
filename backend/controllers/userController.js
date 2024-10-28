import User from '../models/userModel.js';
import sendOTP from '../utils/sendOTP.js';  // Create a utility to handle OTP sending

// Register user with OTP
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  
  // Send OTP
  const otp = await sendOTP(user.email);
  user.otp = otp;
  user.otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 mins
  await user.save();

  res.status(201).json({ message: 'OTP sent to email' });
};

// Verify OTP
export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email, otp, otpExpires: { $gt: Date.now() } });

  if (!user) return res.status(400).json({ message: 'Invalid OTP or OTP expired' });

  res.status(200).json({ message: 'User verified' });
};
