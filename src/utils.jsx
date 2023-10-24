import { nanoid } from "nanoid";
import StampImgOne from "./assets/stamp-img-1.jpg";
import StampImgTwo from "./assets/stamp-img-2.jpg";
import StampImgThree from "./assets/stamp-img-3.jpg";
import StampImgFour from "./assets/stamp-img-4.jpg";
import StampImgFive from "./assets/stamp-img-5.jpg";
import StampImgSix from "./assets/stamp-img-6.jpg";
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
  { id: nanoid(), img: StampImgOne },
  { id: nanoid(), img: StampImgTwo },
  { id: nanoid(), img: StampImgThree },
  { id: nanoid(), img: StampImgFour },
  { id: nanoid(), img: StampImgFive },
  { id: nanoid(), img: StampImgSix },
];
export const products = [
  { id: nanoid(), img: StampImgOne, title: "Self-Inking Stamp" },
  { id: nanoid(), img: StampImgTwo, title: "Pre-Inked Stamp" },
  { id: nanoid(), img: StampImgThree, title: "Date Stamp" },
  { id: nanoid(), img: StampImgFour, title: "Numbering Stamp" },
  { id: nanoid(), img: StampImgFive, title: "Address Stamp" },
  { id: nanoid(), img: StampImgSix, title: "Signature Stamp" },
];
export const services = [
  {
    id: nanoid(),
    icon: <AiOutlineAntDesign />,
    title: "Design",
    text: "We bring creativity to life through stunning graphic design, captivating audiences with every project we undertake.",
  },
  {
    id: nanoid(),
    icon: <MdOutlineBrandingWatermark />,
    title: "Branding",
    text: "Crafting brands with precision, we bring your unique identity to life. Unleash your potential with us",
  },
  {
    id: nanoid(),
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
