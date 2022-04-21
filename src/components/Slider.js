import React, { useState } from 'react';

const Slider = () => {
  const [percent, setPercent] = useState(0);

  const changeSlider = (evt) => {
    setPercent(evt.target.value);
  };

  return (
    <div>
      <div className="percent">
        <span>{percent}</span>
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
        />
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <div className="percent-button">
        <div onClick={() => setPercent(1)}>1%</div>
        <div onClick={() => setPercent(25)}>25%</div>
        <div onClick={() => setPercent(50)}>50%</div>
        <div onClick={() => setPercent(75)}>75%</div>
        <div onClick={() => setPercent(100)}>100%</div>
      </div>
    </div>
  );
};

export default Slider;
