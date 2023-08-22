import { useEffect } from 'react';
import { useSelector } from "react-redux";

const IconsList = (props) => {
  const icons = useSelector((state) => state.icons);

  function handleClick(icon) {
    props.icon(icon);
  }

  return (
    <div className="icons-list">
    	{
        icons.map((icon) => (
          <i key={icon.name} className={`${icon.style} ${icon.name}`} onClick={() => handleClick(icon)}></i>
        ))
      }
    </div>
  )
}

export default IconsList;