import React from "react";
import Captcha from "../main_components/Captcha";
import Snowfall from "react-snowfall";

import snowflake1 from ".././../assets/snowflake-1.png";
import snowflake2 from ".././../assets/snowflake-2.png";
import snowflake3 from ".././../assets/Snowflake.png";
import snowflake4 from ".././../assets/snowflake-3.png";

const Demo = () => {
  const snowflakeImg1 = new Image();
  snowflakeImg1.src = snowflake1;

  const snowflakeImg2 = new Image();
  snowflakeImg2.src = snowflake2;

  const snowflakeImg3 = new Image();
  snowflakeImg3.src = snowflake3;

  const snowflakeImg4 = new Image();
  snowflakeImg4.src = snowflake4;

  const snowflakeImages = [
    snowflakeImg1,
    snowflakeImg2,
    snowflakeImg3,
    snowflakeImg4,
  ];
  return (
    <div className="relative">
      <div
        className="inset-1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Snowfall
          color="white"
          snowflakeCount={130}
          images={snowflakeImages}
          radius={[30.5, 45]}
          speed={[0.5, 2]}
          wind={[-0.5, 0.5]}
          rotationSpeed={[-1, 2.5]}
          opacity={[0, 3]}
          // images={[snowflake1, snowflake2]}
        />
        <Snowfall
          color="white"
          snowflakeCount={150}
          speed={[0.5, 2]}
          wind={[-0.5, 1]}
          // images={snowflakeImages}
          // radius={[20.5, 30]}
          // images={[snowflake1, snowflake2]}
        />
      </div>
      <div className="bg-[#afc2fb] z-10">
        <Captcha />
      </div>
    </div>
  );
};

export default Demo;
