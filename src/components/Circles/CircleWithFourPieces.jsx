import React from "react";

export default function CircleWithFourPieces({
  InnerData,
  centerLabel,
  OuterData,
}) {
  const radiusInner = 110; // Radius of the inner circle
  const radiusOuter = 180; // Radius of the outer circle
  const center = radiusOuter + 10; // Center of the SVG canvas
  const labelOffsetInner = 30; // Offset for inner circle labels
  const labelOffsetOuter = 30; // Offset for outer circle labels

  return (
    <div className="relative w-fit z-1">
      {/* Center Label */}
      <div className="absolute w-fit">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white border-[5px] bg-[#ff09de] w-[100px] h-[100px] rounded-full text-xs flex justify-center items-center z-10">
          {centerLabel}
        </div>

        {/* Inner Circle with 4 Pieces */}
        <svg width={center * 2} height={center * 2} className="absolute z-8">
          {InnerData.map((segment, index) => {
            const startAngle = ((index * 360) / 2) * (Math.PI / 180); // Start angle (in radians)
            const endAngle = (((index + 1) * 360) / 2) * (Math.PI / 180); // End angle (in radians)
            const midAngle = (startAngle + endAngle) / 2; // Midpoint angle for the label

            const x1 = center + radiusInner * Math.cos(startAngle);
            const y1 = center + radiusInner * Math.sin(startAngle);
            const x2 = center + radiusInner * Math.cos(endAngle);
            const y2 = center + radiusInner * Math.sin(endAngle);

            const labelX =
              center + (radiusInner - labelOffsetInner) * Math.cos(midAngle);
            const labelY =
              center + (radiusInner - labelOffsetInner) * Math.sin(midAngle);

            return (
              <g key={`inner-${index}`}>
                <path
                  d={`M${center},${center} L${x1},${y1} A${radiusInner},${radiusInner} 0 0,1 ${x2},${y2} Z`}
                  fill={segment.color}
                  stroke="white"
                  strokeWidth="5"
                  onClick={() => {
                    console.log(`Path clicked: ${segment.label}`); // Logs the segment label
                  }}
                />
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fill="black"
                >
                  {segment.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Outer Circle with 16 Pieces */}
        <svg width={center * 2} height={center * 2}>
          {OuterData.map((segment, index) => {
            const startAngle = ((index * 360) / 4) * (Math.PI / 180); // Start angle (in radians)
            const endAngle = (((index + 1) * 360) / 4) * (Math.PI / 180); // End angle (in radians)
            const midAngle = (startAngle + endAngle) / 2; // Midpoint angle for the label

            const x1 = center + radiusOuter * Math.cos(startAngle);
            const y1 = center + radiusOuter * Math.sin(startAngle);
            const x2 = center + radiusOuter * Math.cos(endAngle);
            const y2 = center + radiusOuter * Math.sin(endAngle);

            const labelX =
              center + (radiusOuter - labelOffsetOuter) * Math.cos(midAngle);
            const labelY =
              center + (radiusOuter - labelOffsetOuter) * Math.sin(midAngle);

            return (
              <g key={`outer-${index}`}>
                <path
                  d={`M${center},${center} L${x1},${y1} A${radiusOuter},${radiusOuter} 0 0,1 ${x2},${y2} Z`}
                  fill={segment.color}
                  stroke="white"
                  strokeWidth="5"
                  onClick={() => {
                    console.log(`Outer Circle Path clicked: ${segment.label}`); // Logs the segment label for outer circle
                  }}
                />
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10"
                  fill="black"
                >
                  {segment.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
