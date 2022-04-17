import { v4 as uuid } from "uuid";
import {
  categoryImg,
  categoryImg2,
  categoryImg3,
  featuredImg,
  featuredImg1,
  featuredImg2,
} from "../../assets/index";

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
    description: "Special sarees for women",
    featImg: featuredImg,
    featTitle: "Red Banarasi Silk",
    featDesc: "Give yourself a traditional look by this traditional banarasi silk saree.",
  },
  {
    _id: uuid(),
    image: categoryImg2,
    title: "Buti Sarees",
    categoryName: "festivalSpecial",
    description: "Special sarees for festivals.",
    featImg: featuredImg1,
    featTitle: "Lace Banarasi Silk",
    featDesc: "Give yourself a fancy look by this traditional banarasi silk saree.",
  },
  {
    _id: uuid(),
    image: categoryImg3,
    title: "Suit Sarees",
    categoryName: "silkSpecial",
    description: "Special sarees for girls.",
    featImg: featuredImg2,
    featTitle: "Red Banarasi Silk",
    featDesc:"Give yourself a bridal look by this traditional banarasi silk saree.",
  },
];
