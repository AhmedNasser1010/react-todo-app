const ViewMod = (props) => {
  
  function handleClick(e) {
    const category = document.querySelector(".home .categories");
    const btns = Array.from(document.querySelectorAll(".display"));
    const value = e.target.getAttribute("data-value");
    const element = e.target;

    btns.forEach((ele) => {ele.classList.remove("selected")});
    element.classList.add("selected");

    if (value === "single") {
      category.classList.remove("multi");
      category.classList.add(value);
    } else {
      category.classList.remove("single");
      category.classList.add(value);
    }
  }

  return (
    <div className="view-mod">
    	<i className="fa-solid fa-border-none display single" data-value="single" onClick={handleClick}></i>
    	<i className="fa-solid fa-table display multi selected" data-value="multi" onClick={handleClick}></i>
    </div>
  )
}

export default ViewMod;