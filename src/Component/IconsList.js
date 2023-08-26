import { useEffect } from 'react';
import { useSelector } from "react-redux";

const IconsList = (props) => {
  const icons = useSelector((state) => state.icons);

  function handleClick(e) {
    const current = e.target;
    const icons = Array.from(document.querySelectorAll(`.icon`));
    let value = JSON.parse(e.target.getAttribute("data-icon"));

    props.icon(value);

    icons.forEach(icon => icon.classList.remove(`selected`));

    current.classList.add(`selected`);
  }

  useEffect(() => {console.log(icons);}, [icons])

  return (
    <div className="icons-list">
    	<h3>Select Icon</h3>
      <div className="list">
        {
          icons.map((icon, index) => (
            <i key={index} className={`icon ${icon.style} ${icon.name}`} data-icon={JSON.stringify(icon)} onClick={handleClick}></i>
          ))
        }
      </div>
    </div>
  )
}

export default IconsList;