import { nanoid } from "nanoid";
import stampImgTwo from "./assets/stamp-img-2.jpg";

import designImg from "./assets/design-image.jpg";
import brandingImg from "./assets/branding-img.jpg";
import profileOne from "./assets/profile-one.jpg";
import profileTwo from "./assets/profile-two.jpg";
import profileThree from "./assets/profile-three.jpg";
import branding1 from "./assets/branding1.jpg";
import branding2 from "./assets/branding2.jpg";
import branding3 from "./assets/branding3.jpg";
import card1 from "./assets/business-cards1.jpg";
import clothesPrinting1 from "./assets/clothes-printing1.jpg";
import clothesPrinting2 from "./assets/clothes-printing2.jpg";
import engraving1 from "./assets/engraving1.jpg";
import engraving2 from "./assets/engraving2.jpg";
import signage1 from "./assets/signage1.jpg";
import signage2 from "./assets/signage2.jpg";
import signage3 from "./assets/signage3.jpg";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import {
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoFacebook,
} from "react-icons/bi";

export const navLinks = [
  { id: nanoid(), link: "home", path: "/" },
  { id: nanoid(), link: "about", path: "/about" },
  { id: nanoid(), link: "products", path: "/products" },
  { id: nanoid(), link: "contact", path: "/contact" },
];

export const imageList = [
  { id: nanoid(), img: branding1 },
  { id: nanoid(), img: signage2 },
  { id: nanoid(), img: engraving2 },
  { id: nanoid(), img: branding3 },
  { id: nanoid(), img: card1 },
  { id: nanoid(), img: signage3 },
];
export const products = [
  {
    id: nanoid(),
    img: branding1,
    name: "carrier bag",
    category: "branding",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: true,
  },
  {
    id: nanoid(),
    img: branding2,
    name: "baseball cap",
    category: "branding",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: false,
  },
  {
    id: nanoid(),
    img: branding3,
    name: "banner",
    category: "branding",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: false,
  },
  {
    id: nanoid(),
    img: card1,
    name: "glossy card",
    category: "business cards",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: false,
  },
  {
    id: nanoid(),
    img: clothesPrinting1,
    name: "t-shirt printing",
    category: "clothes printing",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: true,
  },
  {
    id: nanoid(),
    img: clothesPrinting2,
    name: "hoodie printing",
    category: "clothes printing",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: false,
  },
  {
    id: nanoid(),
    img: engraving1,
    name: "department labels",
    category: "engraving",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: false,
  },
  {
    id: nanoid(),
    img: engraving2,
    name: "room label",
    category: "engraving",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: false,
  },
  {
    id: nanoid(),
    img: signage1,
    name: "neon signage",
    category: "signages",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: true,
  },
  {
    id: nanoid(),
    img: signage2,
    name: "embossed signage",
    category: "signages",
    description: "why is six afraid of seven? Because seven, eight, nine.",
    price: "",
    featured: false,
  },
];
export const services = [
  {
    id: nanoid(),
    img: designImg,
    icon: <AiOutlineAntDesign />,
    title: "Design",
    text: "We bring creativity to life through stunning graphic design, captivating audiences with every project we undertake.",
  },
  {
    id: nanoid(),
    img: brandingImg,
    icon: <MdOutlineBrandingWatermark />,
    title: "Branding",
    text: "Crafting brands with precision, we bring your unique identity to life. Unleash your potential with us",
  },
  {
    id: nanoid(),
    img: stampImgTwo,
    icon: <BsBoxes />,
    title: "products",
    text: "We take pride in offering a wide range of high-quality stamps and seals that meet all your professional needs.",
  },
];

export const socialLinks = [
  { id: nanoid(), icon: <BiLogoTwitter /> },
  { id: nanoid(), icon: <BiLogoInstagramAlt /> },
  { id: nanoid(), icon: <BiLogoFacebook /> },
];

export const teamProfile = [
  {
    id: nanoid(),
    img: profileTwo,
    name: "Marty Byrde",
    role: "Founder / CEO",
    socials: [
      { id: nanoid(), icon: <BiLogoTwitter />, url: "#" },
      { id: nanoid(), icon: <BiLogoInstagramAlt />, url: "#" },
      { id: nanoid(), icon: <BiLogoFacebook />, url: "#" },
    ],
  },
  {
    id: nanoid(),
    img: profileOne,
    name: "Wendy Byrde",
    role: "Head of Sales",
    socials: [
      { id: nanoid(), icon: <BiLogoTwitter />, url: "#" },
      { id: nanoid(), icon: <BiLogoInstagramAlt />, url: "#" },
      { id: nanoid(), icon: <BiLogoFacebook />, url: "#" },
    ],
  },
  {
    id: nanoid(),
    img: profileThree,
    name: "Wyatt Langmore",
    role: "Head of Sales",
    socials: [
      { id: nanoid(), icon: <BiLogoTwitter />, url: "#" },
      { id: nanoid(), icon: <BiLogoInstagramAlt />, url: "#" },
      { id: nanoid(), icon: <BiLogoFacebook />, url: "#" },
    ],
  },
];
