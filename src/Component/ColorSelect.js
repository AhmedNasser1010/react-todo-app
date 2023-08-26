import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

const ColorSelect = (props) => {
  const [colors, setColors] = useState([
    "#214fff",
    "#38e78d",
    "#fe2e87",
    "#f9e40a",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#3f51b5",
    "#2196f3"
  ]);

  function handleColorChange(e) {
    const current = e.target;
    const colors = Array.from(document.querySelectorAll(`.color`));
    const value = e.target.getAttribute("data-color");

    props.color(value);

    colors.forEach(color => color.classList.remove(`selected`));

    current.classList.add(`selected`);
  }

  function handleColorInput(e) {
    props.color(e.target.value);
  }

  return (
    <div className="color-list">
      <h3>Select Color</h3>
      <div className="list">
        <input className="color color-input" type="color" onChange={handleColorInput} value={props.defaultColor} />
        {
          colors.map((color, index) => (
            <span key={index} className="color" style={{backgroundColor: color}} data-color={color} onClick={handleColorChange}></span>            
          ))
        }
      </div>
    </div>
  )
}

export default ColorSelect;