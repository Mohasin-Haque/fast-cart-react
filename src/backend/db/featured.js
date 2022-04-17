import { v4 as uuid } from "uuid";
import { featuredImg, featuredImg1, featuredImg2 } from "../../assets/index";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const featured = [
  {
    _id: uuid(),
    image: featuredImg,
    title: "Printed Sarees",
    description:
      "Special sarees for women",
  },
  {
    _id: uuid(),
    image: featuredImg1,
    title: "Buti Sarees",
    categoryName: "festivalSpecial",
    description:
      "Special sarees for festivals.",
  },
  {
    _id: uuid(),
    image: featuredImg2,
    title: "Suit Sarees",
    categoryName: "silkSpecial",
    description:
      "Special sarees for girls.",
  },
];
