import createElement from "./createHTMLElements";
import contact from "./address.png";
import chef from "./chefTwo.jpg";
import sousChef from "./chefThree.jpg";

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

  const h3 = createElement("h3", ["contactItemHeading"], {});
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
  const container = document.querySelector(".container");
  const content = document.querySelector("#content");

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
const subContactDivTwo = () => {
  //Selecting the DOM Elements
  const content = document.querySelector("#content");
  const container = document.querySelector(".container");
  const contactDiv = document.querySelector(".contactDiv");

  //Creating the menu Sub Div inside the Menu Div
  const subContactDivTwo = createElement("div", ["subContactDivTwo"], {});

  //Appending Children
  contactDiv.appendChild(subContactDivTwo);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

const contactItemTwo = () => {
  //Selecting the DOM Elements
  const content = document.querySelector("#content");
  const container = document.querySelector(".container");
  const contactDiv = document.querySelector(".contactDiv");
  const subContactDivTwo = document.querySelector(".subContactDivTwo");

  //Creating Elements for Contact One Item.
  const contactItemTwo = createElement("div", ["contactItemTwo"], {});

  const h3 = createElement("h3", ["contactItemHeading"], {});
  h3.textContent = "Head Chef";

  const name = createElement("h3", ["contactItemTexts"], {});
  name.textContent = "John Doe";

  const phone = createElement("h3", ["contactItemTexts"], {});
  phone.textContent = "+123-456-789";

  const email = createElement("h3", ["contactItemTexts"], {});
  email.textContent = "fakeEmail@email.com";

  //Appending Children
  contactItemTwo.appendChild(h3);
  contactItemTwo.appendChild(name);
  contactItemTwo.appendChild(phone);
  contactItemTwo.appendChild(email);
  subContactDivTwo.appendChild(contactItemTwo);
  contactDiv.appendChild(subContactDivTwo);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

const contactImageDivTwo = () => {
  const contactDiv = document.querySelector(".contactDiv");
  const subContactDivTwo = document.querySelector(".subContactDivTwo");
  const container = document.querySelector(".container");
  const content = document.querySelector("#content");

  const contactImageDiv = createElement("div", ["contactImageDiv"], {});

  const myChef = new Image();
  myChef.src = chef;

  //Appending Children
  contactImageDiv.appendChild(myChef);
  subContactDivTwo.appendChild(contactImageDiv);
  contactDiv.appendChild(subContactDivTwo);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

// Making the third Contact Div.

const subContactDivThree = () => {
  //Selecting the DOM Elements
  const content = document.querySelector("#content");
  const container = document.querySelector(".container");
  const contactDiv = document.querySelector(".contactDiv");

  //Creating the menu Sub Div inside the Menu Div
  const subContactDivThree = createElement("div", ["subContactDivThree"], {});

  //Appending Children
  contactDiv.appendChild(subContactDivThree);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

const contactItemThree = () => {
  //Selecting the DOM Elements
  const content = document.querySelector("#content");
  const container = document.querySelector(".container");
  const contactDiv = document.querySelector(".contactDiv");
  const subContactDivThree = document.querySelector(".subContactDivThree");

  //Creating Elements for Contact One Item.
  const contactItemThree = createElement("div", ["contactItemThree"], {});

  const h3 = createElement("h3", ["contactItemHeading"], {});
  h3.textContent = "Sous Chef";

  const name = createElement("h3", ["contactItemTexts"], {});
  name.textContent = "John Doe";

  const phone = createElement("h3", ["contactItemTexts"], {});
  phone.textContent = "+123-456-789";

  const email = createElement("h3", ["contactItemTexts"], {});
  email.textContent = "fakeEmail@email.com";

  //Appending Children
  contactItemThree.appendChild(h3);
  contactItemThree.appendChild(name);
  contactItemThree.appendChild(phone);
  contactItemThree.appendChild(email);
  subContactDivThree.appendChild(contactItemThree);
  contactDiv.appendChild(subContactDivThree);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

const contactImageDivThree = () => {
  const contactDiv = document.querySelector(".contactDiv");
  const subContactDivThree = document.querySelector(".subContactDivThree");
  const container = document.querySelector(".container");
  const content = document.querySelector("#content");

  const contactImageDiv = createElement("div", ["contactImageDiv"], {});

  const myChefTwo = new Image();
  myChefTwo.src = sousChef;

  //Appending Children
  contactImageDiv.appendChild(myChefTwo);
  subContactDivThree.appendChild(contactImageDiv);
  contactDiv.appendChild(subContactDivThree);
  container.appendChild(contactDiv);
  content.appendChild(container);
  document.body.appendChild(content);
};

export {
  contactDiv,
  subContactDiv,
  contactItemOne,
  contactImageDiv,
  subContactDivTwo,
  contactItemTwo,
  contactImageDivTwo,
  subContactDivThree,
  contactItemThree,
  contactImageDivThree,
};
