import React from "react";
import OTPInput from "./OTPInput";

const OTPScreen = () => {
  //just handle the OTP
  const handleOtpChange = (otp) => {
    console.log("Entered OTP:", otp);
  };

  return (
    <div>
      <h1>Enter OTP</h1>
      <OTPInput length={6} onChange={handleOtpChange} />
    </div>
  );
};

export default OTPScreen;
