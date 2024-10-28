// backend/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    otp: { type: String }, // Store OTP
    otpExpires: { type: Date }, // Store OTP expiration time
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
