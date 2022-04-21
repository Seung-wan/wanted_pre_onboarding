import React from 'react';

const Toggle = () => {
  const clickHandler = (evt) => {
    console.log(evt.target.classList);
    evt.target.classList.add('clicked');
  };

  return (
    <div className="container">
      <div className="button clicked">기본</div>
      <div className="button" onClick={clickHandler}>
        상세
      </div>
    </div>
  );
};

export default Toggle;
