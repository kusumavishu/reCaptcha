import React from "react";

function SixteenPices() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center items-center w-[320px] h-[320px] rounded-full relative overflow-hidden bg-green-500">
          <div className="absolute w-[100px] h-[320px] justify-center items-center overflow-hidden transform rotate-0 bg-red-500">
            <div className="absolute w-[5px] h-full bg-white left-[50%] z-10"></div>
            <div
              className="absolute w-[50px] h-[100px] overflow-hidden flex flex-col justify-center items-center transform bg-yellow-400"
              style={{ translateY: -120, translateX: 33 }}
            >
              <div style={[getSegmentInnerStyle(index)]}>
                <div style={styles.segmentInnerin}>
                  <p style={[styles.text, styles[`text${index}`]]}>{text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SixteenPices;
