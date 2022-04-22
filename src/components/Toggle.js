import React from 'react';

const Toggle = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <label className="toggle">
        <input type="checkbox" />
        <span className="toggle-slider" />
        <div className="item1">기본</div>
        <div className="item2">상세</div>
      </label>
    </div>
  );
};

export default Toggle;
