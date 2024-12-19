import React from "react";

const CircleChart = ({ data, centerLabel }) => {
  const radius = 150; // Radius of the circle
  const segmentWidth = 30; // Width of each segment
  const circumference = 2 * Math.PI * radius; // Circle circumference
  const center = radius + segmentWidth; // Center position

  return (
    <svg width={center * 2} height={center * 2}>
      {/* Render Center Label */}
      <text
        x={center}
        y={center}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
        fill="white"
      >
        {centerLabel}
      </text>

      {/* Render Circle Segments */}
      {data.map((segment, i) => {
        const segmentAngle = (360 / data.length) * (Math.PI / 180);
        const startAngle = i * segmentAngle;
        const endAngle = startAngle + segmentAngle;

        // Calculate coordinates
        const x1 = center + radius * Math.cos(startAngle);
        const y1 = center + radius * Math.sin(startAngle);
        const x2 = center + radius * Math.cos(endAngle);
        const y2 = center + radius * Math.sin(endAngle);

        return (
          <path
            key={i}
            d={`M${center},${center} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`}
            fill={segment.color}
            stroke="white"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
};

export default CircleChart;
