import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

function StyledComp() {
  const [count, setCount] = useState(0);
  const [isIncrementing, setIsIncrementing] = useState(true);

  const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

  const slideDown = keyframes`
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const rotateGlow = keyframes`
  0% {
    box-shadow: 
      0 0 5px #cccccc, 
      200px 0 5px #cccccc; /* Two lights at different positions */
  }
  25% {
    box-shadow: 
      0 0 5px #cccccc, 
      150px 150px 5px #cccccc; /* Move second light to the bottom-right */
  }
  50% {
    box-shadow: 
      0 0 5px #cccccc, 
      0 200px 5px #cccccc; /* Move second light to the bottom */
  }
  75% {
    box-shadow: 
      0 0 5px #cccccc, 
      -150px 150px 5px #cccccc; /* Move second light to the bottom-left */
  }
  100% {
    box-shadow: 
      0 0 5px #cccccc, 
      200px 0 5px #cccccc; /* Reset to the initial positions */
  }
`;

  const Number = styled.span`
    margin-top: 5px;
    font-weight: bold;
    color: #333;
    animation: ${(props) => (props.isIncrementing ? slideUp : slideDown)} 0.3s
      ease-in-out;
  `;

  const CountButtonDec = styled.button`
    padding-left: 8px;
    padding-right: 8px;

    transition: padding 0.3s ease-in-out;
    &:hover {
      padding-left: 14px;
      padding-right: 14px;
    }
  `;
  const CountButtonInc = styled.button`
    padding-left: 4px;
    padding-right: 4px;

    transition: padding 0.3s ease-in-out;
    &:hover {
      padding-left: 9px;
      padding-right: 9px;
    }
  `;

  const GlowingBox = styled.div`
    display: flex;
    border: 1px solid black;
    padding: 1.5rem; /* Adjust the padding as needed */
    border-radius: 0.5rem;
    animation: ${rotateGlow} 4s infinite linear; /* Apply the glowing animation */
  `;

  return (
    <>
      <div className="bg-[#ffe8c3] flex justify-center items-center h-screen">
        <GlowingBox>
          <CountButtonDec
            className="bg-[#bf4f74] rounded font-semibold text-xl mr-5 pb-1"
            onClick={() => {
              setIsIncrementing(false);
              setCount((prev) => prev - 1);
            }}
          >
            -
          </CountButtonDec>
          <Number key={count} isIncrementing={isIncrementing}>
            {count}
          </Number>
          <CountButtonInc
            className="bg-[#bf4f74] rounded font-semibold text-xl ml-5 pb-1"
            onClick={() => {
              setIsIncrementing(true);
              setCount((prev) => prev + 1);
            }}
          >
            +
          </CountButtonInc>
        </GlowingBox>
      </div>
    </>
  );
}

export default StyledComp;
