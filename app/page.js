"use client"
import React, { useState } from 'react';
import Text_color from "./text_color.js";
import ColorButton from "./color_button.js";

function Page(props) {
  const [boxColor, setBoxColor] = useState('');
  const [colorCounts, setColorCounts] = useState({
    red:0,
    yellow:0,
    blue:0,
    green:0,
  });

  const handleColorClick = (color) => {
    setColorCounts((i)=>({
        ...i,
        [color]:i[color]+1
       }));
       setBoxColor(color)
  };

  return (
    <div>
      <div className="color_box" style={{ backgroundColor: boxColor }}>
      </div>
      <Text_color boxColor={boxColor} colorCounts={colorCounts} />
      <div>
        <ColorButton color="red" onClick={handleColorClick}/>
        <ColorButton color="yellow" onClick={handleColorClick} />
        <ColorButton color="blue" onClick={handleColorClick} />
        <ColorButton color="green" onClick={handleColorClick} />
      </div>
      <div>
          {Object.entries(colorCounts).map(([color,count]) => (
            <p key={color}>
            </p>
          ))}

      </div>
    </div>
  );
}

export default Page;
