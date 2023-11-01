import { nanoid } from "nanoid";
import stampImgOne from "./assets/stamp-img-1.jpg";
import stampImgTwo from "./assets/stamp-img-2.jpg";
import stampImgThree from "./assets/stamp-img-3.jpg";
import stampImgFour from "./assets/stamp-img-4.jpg";
import stampImgFive from "./assets/stamp-img-5.jpg";
import stampImgSix from "./assets/stamp-img-6.jpg";
import designImg from "./assets/design-image.jpg";
import brandingImg from "./assets/branding-img.jpg";
import profileOne from "./assets/profile-one.jpg";
import profileTwo from "./assets/profile-two.jpg";
import profileThree from "./assets/profile-three.jpg";
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
  { id: nanoid(), img: stampImgOne },
  { id: nanoid(), img: stampImgTwo },
  { id: nanoid(), img: stampImgThree },
  { id: nanoid(), img: stampImgFour },
  { id: nanoid(), img: stampImgFive },
  { id: nanoid(), img: stampImgSix },
];
export const products = [
  { id: nanoid(), img: stampImgOne, title: "Self-Inking Stamp" },
  { id: nanoid(), img: stampImgTwo, title: "Pre-Inked Stamp" },
  { id: nanoid(), img: stampImgThree, title: "Date Stamp" },
  { id: nanoid(), img: stampImgFour, title: "Numbering Stamp" },
  { id: nanoid(), img: stampImgFive, title: "Address Stamp" },
  { id: nanoid(), img: stampImgSix, title: "Signature Stamp" },
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
