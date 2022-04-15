import createElement from "./createHTMLElements";
import contact from "./address.png";

const contactDiv = () => {
  //Selecting DOM Elements
  const content = document.querySelector("#content");
  const container = document.querySelector(".container");

  //Creating Contact div
  const contactDiv = createElement("div", ["contactDiv"], {});

  //Creating Contact Title
  const h1 = createElement("h1", ["contactTitle"], {});
  h1.innerText = "Contact Us";

  //Appending Children
  contactDiv.appendChild(h1);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

const subContactDiv = () => {
  //Selecting the DOM Elements
  const content = document.querySelector("#content");
  const container = document.querySelector(".container");
  const contactDiv = document.querySelector(".contactDiv");

  //Creating the menu Sub Div inside the Menu Div
  const subContactDiv = createElement("div", ["subContactDiv"], {});

  //Appending Children
  contactDiv.appendChild(subContactDiv);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

const contactItemOne = () => {
  const content = document.querySelector("#content");
  const container = document.querySelector(".container");
  const contactDiv = document.querySelector(".contactDiv");
  const subContactDiv = document.querySelector(".subContactDiv");

  //Creating Elements for Contact One Item.
  const contactOneItem = createElement("div", ["contactOneItem"], {});

  const h3 = createElement(
    "h3",
    ["contactItemTexts"],
    ["contactItemHeading"],
    {}
  );
  h3.textContent = "Our Address:";

  const description = createElement("p", ["contactItemTexts"], {});
  description.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dicta dolorem,
  earum sapiente, odio temporibus non ipsum veritatis eaque culpa perferendis libero vero delectus eligendi ad reprehenderit laudantium provident voluptas!`;

  contactOneItem.appendChild(h3);
  contactOneItem.appendChild(description);
  subContactDiv.appendChild(contactOneItem);
  contactDiv.appendChild(subContactDiv);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

const contactImageDiv = () => {
  const contactDiv = document.querySelector(".contactDiv");
  const subContactDiv = document.querySelector(".subContactDiv");

  const contactImageDiv = createElement("div", ["contactImageDiv"], {});

  const myContact = new Image();
  myContact.src = contact;

  //Appending Children
  contactImageDiv.appendChild(myContact);
  subContactDiv.appendChild(contactImageDiv);
  contactDiv.appendChild(subContactDiv);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

// Second Part of the Contact Us Page

export { contactDiv, subContactDiv, contactItemOne, contactImageDiv };
