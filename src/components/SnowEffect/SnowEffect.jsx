import React from "react";
import Snowfall, { SnowfallCanvas } from "react-snowfall";

// import Snowf from "react-snowf";

const SnowEffect = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "#282c34" }}>
      {/* <Snowfall color="white" snowflakeCount={200} /> */}
      <SnowfallCanvas
        amount={50}
        size={5}
        speed={1.5}
        wind={0}
        color="#fff"
        opacity={0.8}
        swing={1}
        image={null}
        zIndex={null}
        resize={true}
      />
    </div>
  );
};

export default SnowEffect;

// Insert component in your code
