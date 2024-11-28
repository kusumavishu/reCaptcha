import React, { useEffect, useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";

function Captcha() {
  const [reCaptcha, setreCaptcha] = useState("");
  const [genCaptcha, setgenCaptcha] = useState("");
  const [errCaptcha, seterrCaptcha] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    genNewCaptcha();
  }, []);

  const genNewCaptcha = () => {
    const chars =
      "AaBbCcDdEeFfGgHhIiJjKkLlMm0123456789NnOoPpQqRrSsTtUuVvWwXxYyZz";

    let captcha = "";

    for (var i = 0; i < 7; i++) {
      captcha = captcha + chars[Math.floor(Math.random() * chars.length)];
    }
    setgenCaptcha(captcha);
    console.log("Generated CAPTCHA:", captcha);
  };

  const handleVerify = () => {
    if (reCaptcha === genCaptcha) {
      seterrCaptcha((prev) => ({
        ...prev,
        status: 200,
        message: "verified successful",
      }));
    } else {
      setreCaptcha("");
      seterrCaptcha((prev) => ({
        ...prev,
        status: 400,
        message: "invaid captcha",
      }));
      genNewCaptcha();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="border-2 rounded border-[#5d5d5dd0] w-[30%] flex flex-col justify-center items-center">
          <div className="flex my-3">
            <div className="bgCaptcha w-[220px] rounded mr-2">
              <p className="w-full text-center leading-9 text-[#fff2f29e] text-3xl font-base select-none font-Reenie">
                {genCaptcha}
              </p>
            </div>
            <button
              className="bg-[#9b9b9bb0] px-1 rounded text-lg"
              onClick={() => {
                setreCaptcha("");
                seterrCaptcha((prev) => ({ ...prev, status: "", message: "" }));
                genNewCaptcha();
              }}
            >
              <HiOutlineRefresh />
            </button>
          </div>
          <div className="border rounded mb-">
            <input
              value={reCaptcha}
              placeholder="enter the reCaptcha value"
              onChange={(e) => {
                setreCaptcha(e.target.value);
              }}
              className="outline-none pl-1 pr-2 py-1"
            />

            <button
              className="bg-green-300 px-2 py-[2px] mr-[1.5px] rounded"
              onClick={() => {
                console.log("clicked");
                handleVerify();
              }}
            >
              verify
            </button>
          </div>
          <div className="mb-3">
            <p
              className={`text-sm ${
                errCaptcha.status === 200 ? "text-green-600" : "text-red-500"
              }`}
            >
              {errCaptcha.message}
            </p>
          </div>
          <div>
            <button
              className={`border px-2 mb-2 text-white rounded ${
                errCaptcha.status === 200
                  ? "bg-[#0a06ffa4] cursor-pointer"
                  : "bg-[#0a06ff7e] cursor-not-allowed"
              }`}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Captcha;
