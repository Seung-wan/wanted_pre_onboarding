import React, { useState, useRef } from 'react';

function Tab() {
  const [tabs, _] = useState([
    { id: 1, kor: '감자', eng: 'potato' },
    { id: 2, kor: '고구마', eng: 'sweetPotato' },
    { id: 3, kor: '카레라이스', eng: 'curryRice' },
  ]);
  const [selected, setSelected] = useState(0);
  const sliderRef = useRef();

  const clickHandler = (evt) => {
    setSelected(evt.target.attributes[3].value);
    sliderRef.current.className = 's' + evt.target.attributes[3].value;
  };

  const renderTab = () => {
    return tabs.map((tab) => {
      return (
        <div className="tab-container" key={tab.id}>
          <label htmlFor={tab.eng} data-idx={tab.id}>
            {tab.kor}
          </label>
          {selected === tab.id ? (
            <input
              type="radio"
              id={tab.eng}
              name="food"
              onClick={clickHandler}
              data-idx={tab.id}
              checked
            />
          ) : (
            <input
              type="radio"
              id={tab.eng}
              name="food"
              onClick={clickHandler}
              data-idx={tab.id}
            />
          )}
        </div>
      );
    });
  };

  return (
    <>
      <div className="tab">
        {renderTab()}
        <div id="slider" ref={sliderRef}></div>
      </div>
    </>
  );
}

export default Tab;
