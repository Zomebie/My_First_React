import React from 'react';
import './Form1.css';

const Form =({value, onChange, onCreate, onKeyPress}) => {
  return(
    <div className="form1">
    <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
    <div className="create-button1" onClick={onCreate}>
    추가
    </div>
    </div>
  );
};

export default Form;
