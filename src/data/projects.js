import cakeShop from "../assets/images/projects/cake-shop.png";
import gamerShop from "../assets/images/projects/gamer-shop.png";
import pizzaShop from "../assets/images/projects/pizza-shop.png";
import bootstrapIcon from "../assets/images/icons/bootstrap.svg";
import cssIcon from "../assets/images/icons/css.svg";
import htmlIcon from "../assets/images/icons/html.svg";
import javaScriptIcon from "../assets/images/icons/javascript.svg";
import reactIcon from "../assets/images/icons/react.svg";
import sassIcon from "../assets/images/icons/sass.svg";

export const projects = [
  {
    id: 1,
    title: "cakeShop",
    project: cakeShop,
    url: "https://deluxe-profiterole-26283c.netlify.app/",
    tools: [
      {
        id: 1,
        icon: reactIcon,
      },
      {
        id: 2,
        icon: htmlIcon,
      },
      {
        id: 3,
        icon: cssIcon,
      },
    ],
    githubUrl: "https://github.com/nicodgon/cakeshop.git",
  },
  {
    id: 2,
    title: "gamerShop",
    project: gamerShop,
    url: "https://precious-figolla-bd6d41.netlify.app/",
    tools: [
      {
        id: 1,
        icon: reactIcon,
      },
      {
        id: 2,
        icon: htmlIcon,
      },
      {
        id: 3,
        icon: cssIcon,
      },
    ],
    githubUrl: "https://github.com/nicodgon/gamershop.git",
  },
  {
    id: 3,
    title: "pizzaShop",
    project: pizzaShop,
    url: "https://calm-conkies-e1909a.netlify.app/",
    tools: [
      {
        id: 1,
        icon: htmlIcon,
      },
      {
        id: 2,
        icon: cssIcon,
      },
      {
        id: 3,
        icon: sassIcon,
      },
      {
        id: 4,
        icon: bootstrapIcon,
      },
      {
        id: 5,
        icon: javaScriptIcon,
      },
    ],
    githubUrl: "https://github.com/nicodgon/pizzashop.git",
  },
];
