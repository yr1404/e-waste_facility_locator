import React, { useState } from 'react'
import './styles.scss'

const CreditPoints = () => {
  const [counts, setCounts] = useState({
    laptop: 0,
    mobilePhone: 0,
    printer: 0,
    router: 0,
    lcdTvMonitor: 0,
    smartWatch: 0,
  });

  const handleIncrement = (item) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [item]: prevCounts[item] + 1,
    }));
  };

  const handleDecrement = (item) => {
    if (counts[item] > 0) {
      setCounts((prevCounts) => ({
        ...prevCounts,
        [item]: prevCounts[item] - 1,
      }));
    }
  };

  return (
    <div className='credit-container'>
      <div className="credit-heading">
        Pick all icons that represent your old, broken, or neglected gadgets from the lists:
      </div>

      <div className="items-container">
        <div className="parent-item">
          <h2>Small IT and Telecommunication Equipment</h2>
          <div className="child-items-container">
            <div className="items">
              <img src="assets/credit/laptop.png" alt="" />
              <h3>LAPTOP</h3>
              <div className="count">
                <button onClick={() => handleDecrement('laptop')}>-</button>
                <span>{counts.laptop}</span>
                <button onClick={() => handleIncrement('laptop')}>+</button>
              </div>
            </div>
            <div className="items">
              <img src="assets/credit/mobile.png" alt="" />
              <h3>Mobile Phone</h3>
              <div className="count">
                <button onClick={() => handleDecrement('mobilePhone')}>-</button>
                <span>{counts.mobilePhone}</span>
                <button onClick={() => handleIncrement('mobilePhone')}>+</button>
              </div>
            </div>
            <div className="items">
              <img src="assets/credit/printer.png" alt="" />
              <h3>Printer</h3>
              <div className="count">
                <button onClick={() => handleDecrement('printer')}>-</button>
                <span>{counts.printer}</span>
                <button onClick={() => handleIncrement('printer')}>+</button>
              </div>
            </div>
            <div className="items">
              <img src="assets/credit/router.png" alt="" />
              <h3>Router</h3>
              <div className="count">
                <button onClick={() => handleDecrement('router')}>-</button>
                <span>{counts.router}</span>
                <button onClick={() => handleIncrement('router')}>+</button>
              </div>
            </div>
            <div className="items">
              <img src="assets/credit/tv.png" alt="" />
              <h3>LCD TV and Monitor</h3>
              <div className="count">
                <button onClick={() => handleDecrement('lcdTvMonitor')}>-</button>
                <span>{counts.lcdTvMonitor}</span>
                <button onClick={() => handleIncrement('lcdTvMonitor')}>+</button>
              </div>
            </div>
            <div className="items">
              <img src="assets/credit/smart watch.png" alt="" />
              <h3>Smart Watch</h3>
              <div className="count">
                <button onClick={() => handleDecrement('smartWatch')}>-</button>
                <span>{counts.smartWatch}</span>
                <button onClick={() => handleIncrement('smartWatch')}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditPoints