import React, { useRef, useState } from 'react';

const item = [
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
];

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState('');
  const [selectedWord, setSelectedWord] = useState('All Symbols');
  const inputRef = useRef();

  const [searchItem, setSearchItem] = useState([
    'BTCUSD.PERP',
    'ETHUSD.PERP',
    'BCHUSD.PERP',
    'LTCUSD.PERP',
    'XRPUSD.PERP',
  ]);

  const openDropdown = () => {
    setOpen((prev) => !prev);
    inputRef.current.focus();
  };

  const clickItem = (evt) => {
    setSelectedWord(evt.target.textContent);
    setOpen((prev) => !prev);
  };

  const onChangeSymbol = (evt) => {
    const inputValue = evt.target.value;
    setSymbol(inputValue);
    if (inputValue.length > 0) {
      setSearchItem(() =>
        item.filter((value) => {
          return value.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    } else {
      setSearchItem(item);
    }
  };

  const renderItem = () => {
    return searchItem.map((value, idx) => {
      return (
        <div className="item" key={idx} onClick={clickItem}>
          {value}
        </div>
      );
    });
  };
  return (
    <div className="dropdown">
      <div className="title" onClick={openDropdown}>
        {selectedWord}
        <i className="fa-solid fa-caret-down"></i>
      </div>
      <div className={`dropdown-list ${open ? 'opened' : 'closed'}`}>
        <div className="input-container">
          <input
            className="searchBar"
            type="text"
            placeholder="Search Symbol"
            value={symbol}
            onChange={onChangeSymbol}
            ref={inputRef}
          />
          {/* TODO: 아이콘이 width를 차지에서 인풋이 클릭이 안되는 상황 */}
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="item">All Symbols</div>
        {renderItem()}
      </div>
    </div>
  );
}

export default Dropdown;
