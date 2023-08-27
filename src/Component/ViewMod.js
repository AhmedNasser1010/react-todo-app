const ViewMod = ({ isSingle }) => {
  
  function handleClick(e) {
    const category = document.querySelector(".home .categories");
    const btns = Array.from(document.querySelectorAll(".display"));
    const value = e.target.getAttribute("data-value");
    const element = e.target;
    const themeMulti = document.querySelector(".theme-multi");
    const themeSingle = document.querySelector(".theme-single");

    btns.forEach((ele) => {ele.classList.remove("selected")});
    element.classList.add("selected");

    if (value === "single") {
      category.classList.remove("multi");
      category.classList.add(value);
      isSingle(true);
    } else {
      category.classList.remove("single");
      category.classList.add(value);
      isSingle(false);
    }
  }

  return (
    <div className="view-mod">
    	<i className="fa-solid fa-border-none display single selected" data-value="single" onClick={handleClick}></i>
    	<i className="fa-solid fa-table display multi" data-value="multi" onClick={handleClick}></i>
    </div>
  )
}

export default ViewMod;