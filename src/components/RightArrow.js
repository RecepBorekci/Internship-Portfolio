import React from 'react';

const RightArrow = (props) => {
  return (
    <svg width="200" height="100">
      <rect x="0" y="25" width="100" height="50" fill="#088395" />
      <polygon points="100,75 150,50 100,25" fill="#088395" />
      <text x="50" y="50" dominantBaseline="middle" textAnchor="middle" fill="white">
        {props.year}
      </text>
    </svg>
  );
};

export default RightArrow;
