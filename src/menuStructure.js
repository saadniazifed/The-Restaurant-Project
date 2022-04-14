import createElement from "./createHTMLElements";
import Tomahawk from "./tomahawk.jpg";
import NewYorkStrip from "./strip.jpg";
import RibeyeSteak from "./ribeye.jpg";

//Selecting DOM Elements
const content = document.querySelector("#content");
const container = document.querySelector(".container");

//Removing the Class and Adding it for the Menu Tab

content.classList.add("contentMenu");

const menuDiv = () => {
  //Creating the Menu diV
  const menuDiv = createElement("div", ["menuDiv"], {});
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);

  return menuDiv;
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

// Adding Menu Item One from here.
const foodItemOne = () => {
  const menuDiv = document.querySelector(".menuDiv");
  const menuSubDiv = document.querySelector(".menuSubDiv");

  const foodItemDiv = createElement("div", ["foodItemDiv"], {});

  const h3 = createElement("h3", ["foodItemTexts", "foodItemHeading"], {});
  h3.textContent = "Tomahawk Steak";

  const description = createElement("p", ["foodItemTexts"], {});
  description.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dicta dolorem,
  earum sapiente, odio temporibus non ipsum veritatis eaque culpa perferendis libero vero delectus eligendi ad reprehenderit laudantium provident voluptas!`;

  const price = createElement("p", ["price", "foodItemTexts"], {});
  price.textContent = "$12";

  //Appending Children
  foodItemDiv.appendChild(h3);
  foodItemDiv.appendChild(description);
  foodItemDiv.appendChild(price);
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

  const myTomahawk = new Image();
  myTomahawk.src = Tomahawk;

  //Appending Children
  foodImageDiv.appendChild(myTomahawk);
  menuSubDiv.appendChild(foodImageDiv);
  menuDiv.appendChild(menuSubDiv);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

// Adding Menu Item Two from here.
const subMenuDivTwo = () => {
  const menuDiv = document.querySelector(".menuDiv");
  //Creating the menu Sub Div inside the Menu Div
  const menuSubDivTwo = createElement("div", ["menuSubDivTwo"], {});
  menuDiv.appendChild(menuSubDivTwo);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
};

const foodItemTwo = () => {
  const menuDiv = document.querySelector(".menuDiv");
  const menuSubDivTwo = document.querySelector(".menuSubDivTwo");

  const foodItemDiv = createElement("div", ["foodItemDiv"], {});

  const h3 = createElement("h3", ["foodItemTexts", "foodItemHeading"], {});
  h3.textContent = "New York Strip Steak";

  const description = createElement("p", ["foodItemTexts"], {});
  description.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dicta dolorem,
  earum sapiente, odio temporibus non ipsum veritatis eaque culpa perferendis libero vero delectus eligendi ad reprehenderit laudantium provident voluptas!`;

  const price = createElement("p", ["price", "foodItemTexts"], {});
  price.textContent = "$25";

  //Appending Children
  foodItemDiv.appendChild(h3);
  foodItemDiv.appendChild(description);
  foodItemDiv.appendChild(price);
  menuSubDivTwo.appendChild(foodItemDiv);
  menuDiv.appendChild(menuSubDivTwo);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

const foodImageDivTwo = () => {
  const menuDiv = document.querySelector(".menuDiv");
  const menuSubDivTwo = document.querySelector(".menuSubDivTwo");

  const foodImageDiv = createElement("div", ["foodImageDiv"], {});

  const myNYS = new Image();
  myNYS.src = NewYorkStrip;

  //Appending Children
  foodImageDiv.appendChild(myNYS);
  menuSubDivTwo.appendChild(foodImageDiv);
  menuDiv.appendChild(menuSubDivTwo);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

// Adding Menu Item Three From here.
const subMenuDivThree = () => {
  const menuDiv = document.querySelector(".menuDiv");
  //Creating the menu Sub Div inside the Menu Div
  const menuSubDivThree = createElement("div", ["menuSubDivThree"], {});
  menuDiv.appendChild(menuSubDivThree);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
};

const foodItemThree = () => {
  const menuDiv = document.querySelector(".menuDiv");
  const menuSubDivThree = document.querySelector(".menuSubDivThree");

  const foodItemDiv = createElement("div", ["foodItemDiv"], {});

  const h3 = createElement(
    "h3",
    ["foodItemTexts", "foodItemHeading", "sampleHeading"],
    {}
  );
  h3.textContent = "Rib-eye Steak";

  const description = createElement("p", ["foodItemTexts"], {});
  description.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dicta dolorem,
    earum sapiente, odio temporibus non ipsum veritatis eaque culpa perferendis libero vero delectus eligendi ad reprehenderit laudantium provident voluptas!`;

  const price = createElement("p", ["price", "foodItemTexts"], {});
  price.textContent = "$20";

  //Appending Children
  foodItemDiv.appendChild(h3);
  foodItemDiv.appendChild(description);
  foodItemDiv.appendChild(price);
  menuSubDivThree.appendChild(foodItemDiv);
  menuDiv.appendChild(menuSubDivThree);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

const foodImageDivThree = () => {
  const menuDiv = document.querySelector(".menuDiv");
  const menuSubDivThree = document.querySelector(".menuSubDivThree");

  const foodImageDiv = createElement("div", ["foodImageDiv"], {});

  const myRibeye = new Image();
  myRibeye.src = RibeyeSteak;

  //Appending Children
  foodImageDiv.appendChild(myRibeye);
  menuSubDivThree.appendChild(foodImageDiv);
  menuDiv.appendChild(menuSubDivThree);
  container.appendChild(menuDiv);
  content.appendChild(menuDiv);
  document.body.appendChild(content);
};

export {
  menuDiv,
  menuTitle,
  subMenuDiv,
  foodItemOne,
  foodImageDiv,
  subMenuDivTwo,
  foodItemTwo,
  foodImageDivTwo,
  subMenuDivThree,
  foodItemThree,
  foodImageDivThree,
};
