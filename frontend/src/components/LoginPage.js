import React, { useState } from 'react';
import { verifyOTP } from '../services/api';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = async () => {
    try {
      await verifyOTP({ email, otp });
      alert('Login successful!');
    } catch (error) {
      alert('Invalid OTP or OTP expired.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="OTP" onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleLogin}>Verify OTP</button>
    </div>
  );
}

export default LoginPage;
