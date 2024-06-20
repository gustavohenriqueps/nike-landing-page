import { tenis1, tenis2, tenis3, tenis4 } from "../assets/images/index";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact us" },
];

export const statistics = [
  { value: 580, label: "Brands" },
  { value: 670, label: "Shops" },
  { value: 3500, label: "Customers" },
];

export const products = [
  {
    imgURL: tenis1,
    name: "Air Max 1 PRM",
    category: "Casual",
    price: "R$ 731,49 no Pix",
    priceOff: "R$ 1199,99",
    discount: "39% off",
  },
  {
    imgURL: tenis2,
    name: "Tênis Nike Air Max Excee Masculino",
    category: "Casual",
    price: "R$ 484,49 no Pix",
    priceOff: "R$ 749,00",
    discount: "35% off",
  },
  {
    imgURL: tenis3,
    name: "Tênis Nike React Miler 3 Masculino",
    category: "Corrida",
    price: "R$ 1044,99 no Pix",
    priceOff: "",
    discount: "5% off",
  },
  {
    imgURL: tenis4,
    name: "Nike Air Jordan-001",
    category: "Corrida",
    price: "R$ 1168,49 no Pix",
    priceOff: "R$ 1299,99",
    discount: "10% off",
  },
];

// export const services = [
//   {
//     imgURL: truckFast,
//     label: "Free shipping",
//     subtext: "Enjoy seamless shopping with our complimentary shipping service.",
//   },
//   {
//     imgURL: shieldTick,
//     label: "Secure Payment",
//     subtext:
//       "Experience worry-free transactions with our secure payment options.",
//   },
//   {
//     imgURL: support,
//     label: "Love to help you",
//     subtext: "Our dedicated team is here to assist you every step of the way.",
//   },
// ];
