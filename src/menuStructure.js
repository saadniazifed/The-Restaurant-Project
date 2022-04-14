import createElement from "./createHTMLElements";

//Selecting DOM Elements
const content = document.querySelector("#content");
const container = document.querySelector(".container");

//Removing the Class and Adding it for the Menu Tab
content.classList.add("contentMenu");

const menuDiv = () => {
  // Removing Container Class and Adding a new one for the menu.
  container.classList.remove("container");
  container.classList.add("containerMenu");

  //Creating the Menu diV
  const menuDiv = createElement("div", ["menuDiv"], {});
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

const menuTitle = () => {
  const menuDiv = document.querySelector(".menuDiv");
  // Creating the Title
  const menuTitle = createElement("h1", ["menuTitle"], {});
  menuTitle.textContent = "Menu";
  menuDiv.appendChild(menuTitle);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

const subMenuDiv = () => {
  const menuDiv = document.querySelector(".menuDiv");
  //Creating the menu Sub Div inside the Menu Div
  const menuSubDiv = createElement("div", ["menuSubDiv"], {});
  menuDiv.appendChild(menuSubDiv);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
};

const foodItemDiv = () => {
  const menuDiv = document.querySelector(".menuDiv");
  const menuSubDiv = document.querySelector(".menuSubDiv");

  //Creating the food Items div inside menuSubDiv
  const foodItemDiv = createElement("div", ["foodItemDiv"], {});

  menuSubDiv.appendChild(foodItemDiv);
  menuDiv.appendChild(menuSubDiv);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

const foodImageDiv = () => {
  const menuDiv = document.querySelector(".menuDiv");
  const menuSubDiv = document.querySelector(".menuSubDiv");

  const foodImageDiv = createElement("div", ["foodImageDiv"], {});
  menuSubDiv.appendChild(foodImageDiv);
  menuDiv.appendChild(menuSubDiv);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

export { menuDiv, menuTitle, subMenuDiv, foodItemDiv, foodImageDiv };
