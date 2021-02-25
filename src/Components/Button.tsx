import React from 'react';
import './Button.css';

let Button = () => {
  let handleClick = () =>{
    console.log("clicked!")
  }
  return (
    <button className="button" onClick={handleClick}>
      :)
    </button>
  );
}

export default Button;