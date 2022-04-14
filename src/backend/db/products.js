import { v4 as uuid } from "uuid";
import { saree1, saree2, saree3, saree4, saree5, saree6, saree7, } from "../../assets/index";


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: saree1,
    title: "Sapphire Banarasi Saree",
    price: 3990,
    discount: 300,
    ratings: 4,
    categories: "festivalSpecial",
  },
  {
    _id: uuid(),
    image: saree2,
    title: "Banarasi Silk Saree",
    price: 3390,
    discount: 100,
    ratings: 4,
    categories: "weddingSpecial",
  },
  {
    _id: uuid(),
    image: saree3,
    title: "Black Banarasi Saree",
    price: 3340,
    discount: 200,
    ratings: 2,
    categories: "weddingSpecial",
  },
  {
    _id: uuid(),
    image: saree4,
    title: "Purple BanarasiSaree",
    price: 1590,
    discount: 400,
    ratings: 3,
    categories: "silkSpecial",
  },
  {
    _id: uuid(),
    image: saree5,
    title: "Red Banarasi Saree",
    price: 3560,
    discount: 100,
    ratings: 1,
    categories: "weddingSpecial",
  },
  {
    _id: uuid(),
    image: saree6,
    title: "Maroom Banarasi Saree",
    price: 3750,
    discount: 100,
    ratings: 2,
    categories: "festivalSpecial",
  },
  {
    _id: uuid(),
    image: saree7,
    title: "Sapphire Banarasi Saree",
    price: 6990,
    discount: 300,
    ratings: 4,
    categories: "festivalSpecial",
  },
  {
    _id: uuid(),
    image: saree2,
    title: "Banarasi Silk Saree",
    price: 2390,
    discount: 100,
    ratings: 4,
    categories: "weddingSpecial",
  },
  {
    _id: uuid(),
    image: saree3,
    title: "Black Banarasi Saree",
    price: 3000,
    discount: 200,
    ratings: 5,
    categories: "weddingSpecial",
  },
  {
    _id: uuid(),
    image: saree4,
    title: "Purple BanarasiSaree",
    price: 3500,
    discount: 400,
    ratings: 3,
    categories: "silkSpecial",
  },
  {
    _id: uuid(),
    image: saree5,
    title: "Red Banarasi Saree",
    price: 4560,
    discount: 100,
    ratings: 1,
    categories: "weddingSpecial",
  },
  {
    _id: uuid(),
    image: saree6,
    title: "Maroom Banarasi Saree",
    price: 5550,
    discount: 100,
    ratings: 2,
    categories: "festivalSpecial",
  },
];
