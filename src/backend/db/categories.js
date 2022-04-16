import { v4 as uuid } from "uuid";
import { categoryImg, categoryImg2, categoryImg3 } from "../../assets/index";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image: categoryImg,
    title: "Printed Sarees",
    categoryName: "weddingSpecial",
    description:
      "Special sarees for women",
  },
  {
    _id: uuid(),
    image: categoryImg2,
    title: "Buti Sarees",
    categoryName: "festivalSpecial",
    description:
      "Special sarees for festivals.",
  },
  {
    _id: uuid(),
    image: categoryImg3,
    title: "Suit Sarees",
    categoryName: "silkSpecial",
    description:
      "Special sarees for girls.",
  },
];
