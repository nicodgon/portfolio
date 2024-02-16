import cakeShop from "../assets/images/projects/cake-shop.png";
import gamerShop from "../assets/images/projects/gamer-shop.png";
import pizzaShop from "../assets/images/projects/pizza-shop.png";
import bootstrapIcon from "../assets/images/icons/bootstrap.svg";
import cssIcon from "../assets/images/icons/css.svg";
import htmlIcon from "../assets/images/icons/html.svg";
import javaScriptIcon from "../assets/images/icons/javascript.svg";
import reactIcon from "../assets/images/icons/react.svg";
import sassIcon from "../assets/images/icons/sass.svg";
import reactRouter from "../assets/images/icons/react-router.svg";
import sweetalert2 from "../assets/images/icons/sweetalert2.png";
import carritoDeCompras from "../assets/images/projects/carrito-de-compras.png";

export const projects = [
  {
    id: 1,
    title: "cakeShop",
    project: cakeShop,
    url: "https://cakeshop.ndgonzalez.com",
    tools: [
      {
        id: 1,
        icon: reactIcon,
        alt: "react",
      },
      {
        id: 2,
        icon: htmlIcon,
        alt: "HTML",
      },
      {
        id: 3,
        icon: cssIcon,
        alt: "CSS",
      },
      {
        id: 4,
        icon: reactRouter,
        alt: "react router",
      },
      {
        id: 5,
        icon: sweetalert2,
        alt: "sweetalert2",
      },
    ],
    githubUrl: "https://github.com/nicodgon/cakeshop.git",
  },
  {
    id: 2,
    title: "gamerShop",
    project: gamerShop,
    url: "https://gamershop.ndgonzalez.com",
    tools: [
      {
        id: 1,
        icon: reactIcon,
        alt: "react",
      },
      {
        id: 2,
        icon: htmlIcon,
        alt: "HTML",
      },
      {
        id: 3,
        icon: cssIcon,
        alt: "CSS",
      },
      {
        id: 4,
        icon: reactRouter,
        alt: "react router",
      },
      {
        id: 5,
        icon: sweetalert2,
        alt: "sweetalert2",
      },
    ],
    githubUrl: "https://github.com/nicodgon/gamershop.git",
  },
  {
    id: 3,
    title: "pizzaShop",
    project: pizzaShop,
    url: "https://pizzashop.ndgonzalez.com",
    tools: [
      {
        id: 1,
        icon: htmlIcon,
        alt: "HTML",
      },
      {
        id: 2,
        icon: cssIcon,
        alt: "CSS",
      },
      {
        id: 3,
        icon: sassIcon,
        alt: "sass",
      },
      {
        id: 4,
        icon: bootstrapIcon,
        alt: "bootstrap",
      },
      {
        id: 5,
        icon: javaScriptIcon,
        alt: "javaScript",
      },
    ],
    githubUrl: "https://github.com/nicodgon/pizzashop.git",
  },
  {
    id: 4,
    title: "CarritoDeCompras",
    project: carritoDeCompras,
    url: "https://shoestore.ndgonzalez.com",
    tools: [
      {
        id: 1,
        icon: htmlIcon,
        alt: "HTML",
      },
      {
        id: 2,
        icon: cssIcon,
        alt: "CSS",
      },
      {
        id: 3,
        icon: javaScriptIcon,
        alt: "javaScript",
      },
      {
        id: 4,
        icon: bootstrapIcon,
        alt: "bootstrap",
      },
    ],
    githubUrl: "https://github.com/nicodgon/carrito-de-compras.git",
  }
];
