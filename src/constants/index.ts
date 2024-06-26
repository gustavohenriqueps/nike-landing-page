import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  customer1,
  customer2,
  tenis1,
  tenis2,
  tenis3,
  tenis4,
} from "../assets/images/index";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact us" },
];

export const statistics = [
  { value: "1000", label: "Brands" },
  { value: "670", label: "Shops" },
  { value: "250k+", label: "Customers" },
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
    category: "Running",
    price: "R$ 1044,99 no Pix",
    priceOff: "",
    discount: "5% off",
  },
  {
    imgURL: tenis4,
    name: "Nike Air Jordan-001",
    category: "Running",
    price: "R$ 1168,49 no Pix",
    priceOff: "R$ 1299,99",
    discount: "10% off",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: customer1,
    customerName: "John Doe",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
