"use client"
import React from 'react';

function ColorButton({ color, onClick }) {
  return (
    <div className="color_button">
      <button onClick={() => onClick(color)}>{color}</button>
    </div>
  );
}

export default ColorButton;
