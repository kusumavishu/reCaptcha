import React, { useState } from "react";

const OTPInput = ({ length, onChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  // It initializes a state variable otp as an array with a length equal to the length prop.
  // Each element in the array is set to an empty string ("") using Array(length).fill("").
  // This represents the OTP digits, with each element corresponding to a single input field.

  const handleChange = (text, index) => {
    const updatedOtp = [...otp];
    const value = text.replace(/[^0-9]/g, ""); // Allow only numbers
    updatedOtp[index] = value.slice(-1); // Ensure only one character
    setOtp(updatedOtp);

    if (onChange) {
      onChange(updatedOtp.join(""));
    }

    // Move focus to the next input if available
    if (value && index < length - 1) {
      inputs[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs[index - 1]?.focus();
    }
  };

  const inputs = [];

  return (
    <div style={styles.container}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            ref={(input) => (inputs[index] = input)}
            style={styles.input}
            type="text"
            inputMode="numeric"
            maxLength={1}
            pattern="[0-9]*"
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            value={otp[index]}
          />
        ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "40px",
    height: "50px",
    margin: "5px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "18px",
  },
};

export default OTPInput;
