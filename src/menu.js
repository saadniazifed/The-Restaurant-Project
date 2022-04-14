import createElement from "./createHTMLElements";
import {
  menuDiv,
  menuTitle,
  subMenuDiv,
  foodItemDiv,
  foodImageDiv,
} from "./menuStructure";

const menuPage = () => {
  menuDiv();
  menuTitle();
  subMenuDiv();
  foodItemDiv();
  foodImageDiv();
};

export default menuPage;
