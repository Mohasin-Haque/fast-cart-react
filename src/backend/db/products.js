import { v4 as uuid } from "uuid";
import { saree1, saree2, saree3, saree4, saree5, saree6, } from "../../assets/index";


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: saree1,
    title: "Sapphire Banarasi Saree",
    price: "Rs. 3,990 only",
    categoryName: "women-wear",
  },
  {
    _id: uuid(),
    image: saree2,
    title: "Banarasi Silk Saree",
    price: "Rs. 3,390 only",
    categoryName: "women-wear",
  },
  {
    _id: uuid(),
    image: saree3,
    title: "Black Banarasi Saree",
    price: "Rs. 3,340 only",
    categoryName: "women-wear",
  },
  {
    _id: uuid(),
    image: saree4,
    title: "Purple BanarasiSaree",
    price: "Rs. 3,590 only",
    categoryName: "women-wear",
  },
  {
    _id: uuid(),
    image: saree5,
    title: "Red Banarasi Saree",
    price: "Rs. 3,560 only",
    categoryName: "women-wear",
  },
  {
    _id: uuid(),
    image: saree6,
    title: "Maroom Banarasi Saree",
    price: "Rs. 3,750 only",
    categoryName: "women-wear",
  },
];
