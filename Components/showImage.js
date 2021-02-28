import React from "react";
import hinh2 from "../image/1.jpg";

export default function ({ options = 1 }) {
  return (
    <div>
      <img
        src={hinh2}
        alt="no alt"
        width="300px"
        style={{ filter: `grayscale(${options})` }}
      />
    </div>
  );
}
