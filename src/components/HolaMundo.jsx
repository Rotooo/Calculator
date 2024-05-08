import React, { useState } from 'react';
import '../assets/styles/styles.css';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly className='opText' />
      <div className="buttons">
        <button className='btnNum' onClick={() => handleClick('7')}>7</button>
        <button className='btnNum' onClick={() => handleClick('8')}>8</button>
        <button className='btnNum' onClick={() => handleClick('9')}>9</button>
        <button className='btnOp' onClick={() => handleClick('+')}>+</button>
        <button className='btnNum' onClick={() => handleClick('4')}>4</button>
        <button className='btnNum' onClick={() => handleClick('5')}>5</button>
        <button className='btnNum' onClick={() => handleClick('6')}>6</button>
        <button className='btnOp' onClick={() => handleClick('-')}>-</button>
        <button className='btnNum' onClick={() => handleClick('1')}>1</button>
        <button className='btnNum' onClick={() => handleClick('2')}>2</button>
        <button className='btnNum' onClick={() => handleClick('3')}>3</button>
        <button className='btnOp' onClick={() => handleClick('*')}>*</button>
        <button className='btnNum' onClick={() => handleClick('0')}>0</button>
        <button className='btnOp' onClick={() => handleClick('.')}>.</button>
        <button className='btnCalc' onClick={calculate}>=</button>
        <button className='btnClear' onClick={clear}>C</button>
        <button className='btnOp' onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
}
