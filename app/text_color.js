import React from "react";

function Text_color({ boxColor, colorCounts}) {
  return (
    <div className="text_color">
      <div className="Red">Red:{colorCounts.red}</div>
      <div className="Blue">Blue:{colorCounts.blue}</div>
      <div className="Yellow">Yellow:{colorCounts.yellow}</div>
      <div className="Green">Green:{colorCounts.green}</div>
    </div>
  );
}

export default Text_color;
