import React, { useState } from 'react';

const Slider = () => {
  const [percent, setPercent] = useState(0);
  const [colorCircle, setColorCircle] = useState(0);

  const clickPercent = (per, colorCircle) => {
    setPercent(per);
    setColorCircle(colorCircle);
  };

  const changeSlider = (evt) => {
    console.log(Math.floor(Number(evt.target.value) / 25));
    setColorCircle(Math.floor(Number(evt.target.value) / 25));
    setPercent(evt.target.value);
  };

  const renderCircle = (colorCircle) => {
    const arr = Array.from({ length: 5 }, (_, i) => {
      if (i === 4) return <div key={i} className="circle color"></div>;

      return i < colorCircle ? (
        <div key={i} className="circle color"></div>
      ) : (
        <div key={i} className="circle"></div>
      );
    });
    return arr;
  };
  return (
    <div style={{ marginBottom: '50px' }}>
      <div className="percent">
        <span className="black">{percent}</span>
        <span>%</span>
      </div>
      <div className="range-circle">
        <input
          type="range"
          name=""
          id="range"
          min="0"
          max="100"
          value={percent}
          onChange={changeSlider}
          style={{ backgroundSize: `${percent}% 100%` }}
        />
        {renderCircle(colorCircle)}
      </div>

      <div className="percent-button">
        <div onClick={() => clickPercent(1, 0)}>1%</div>
        <div onClick={() => clickPercent(25, 1)}>25%</div>
        <div onClick={() => clickPercent(50, 2)}>50%</div>
        <div onClick={() => clickPercent(75, 3)}>75%</div>
        <div onClick={() => clickPercent(100, 4)}>100%</div>
      </div>
    </div>
  );
};
export default Slider;
