// Navbar2.js
import './navbar2.scss';
import React, { useState } from 'react';

function Navbar2() {
  const [isListVisible, setIsListVisible] = useState(false);

  const handleToggle = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div className={`navbar2 ${isListVisible ? 'list-visible' : ''}`}>
      <h5>21.47 - 25.19 1/100 km</h5>
      <h6>486.72 - 571.63 g/km</h6>
      <div className="dropup" onClick={handleToggle}>
        {isListVisible ? '▽' : '△'}
      </div>
      {isListVisible && (
        <div className='list'>
          <ul>
            <li>
              <h4>CHIRON/CHIRON SPORT (WLTP)</h4>
              <ul>
                <li>Fuel Consumption (combined): 25.19 1/100 km</li>
                <li>CO2 emissions (combined) 571.63 g/km</li>
              </ul>
            </li>  
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
