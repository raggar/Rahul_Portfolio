// icons from https://react-icons-kit.now.sh/iconset/ionicons
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { socialLinkedin } from "react-icons-kit/ionicons/socialLinkedin";

// award logo's
import MLH from "../../assets/image/mlh.png";
import Hack3 from "../../assets/image/hack3.jpeg";
import Torch from "../../assets/image/torch.png";
import SeSoc from "../../assets/image/sesoc.png";
import SetHacks from "../../assets/image/sethacks.png";
import TYN from "../../assets/image/tyn.png";
import PicoCTF from "../../assets/image/picoctf.jpeg";
import Waterloo from "../../assets/image/uwaterloo.png";

import PortfolioImage1 from "../../assets/image/portfolio-1.jpg";

// organizations
import Remitbee from "../../assets/image/remitbee.png";
import HTN from "../../assets/image/htn.png";
import Waterloop from "../../assets/image/waterloop.png";
import EntSoc from "../../assets/image/entsoc.png";
import AirMatrix from "../../assets/image/airmatrix.png";
import WavesEG from "../../assets/image/waveseg.png";

export const CLIENTS = [
  {
    image: Remitbee,
    title: "Remitbee",
    url: "https://www.remitbee.com/",
  },
  {
    image: HTN,
    title: "Hack the North",
    url: "https://hackthenorth.com/",
  },
  {
    image: Waterloop,
    title: "Waterloop",
    url: "https://teamwaterloop.ca/",
  },
  {
    image: EntSoc,
    title: "EntSoc",
    url: "https://entsoc.ca/",
  },
  {
    image: AirMatrix,
    title: "AirMatrix",
    url: "https://airmatrix.ca/",
  },
  {
    image: WavesEG,
    title: "https://wavesgaming.ca/",
  },
];

export const SOCIAL_PROFILES = [
  {
    icon: socialGithub,
    url: "https://github.com/RahulAggarwal1016",
  },
  {
    icon: socialLinkedin,
    url: "https://www.linkedin.com/in/rahul1016/",
  },
  {
    icon: socialTwitter,
    url: "https://twitter.com/Rahul_1016",
  },
  {
    icon: socialFacebook,
    url: "https://www.facebook.com/RahulAggarwal1016/",
  },
];

export const MENU_ITEMS = [
  {
    label: "ME",
    path: "#banner_section",
    offset: "0",
  },
  {
    label: "PROJECTS",
    path: "#portfolio_section",
    offset: "0",
  },
  {
    label: "AWARDS",
    path: "#awards_section",
    offset: "0",
  },
  {
    label: "SKILLS",
    path: "#process_section",
    offset: "0",
  },
];

export const AWARDS = [
  {
    awardName: "YeeHaw Hacks (Hackathon) Winner",
    awardDetails: "Best use of Google Cloud",
    awardeeLogo: MLH,
    awardeeName: "Major League Hacking",
    awardeeUrl: "https://mlh.io/",
    date: "August 2020",
  },
  {
    awardName: "Hack3 (Hackathon) Overall Finalist",
    awardDetails: "Top 3 overall hack",
    awardeeLogo: Hack3,
    awardeeName: "Hack3",
    awardeeUrl: "https://hack3.co/",
    date: "July 2020",
  },
  {
    awardName: "SetHacks (Hackathon) Winner",
    awardDetails: 'Top hack in the category of "the community"',
    awardeeLogo: SetHacks,
    awardeeName: "SetHacks",
    awardeeUrl: "https://sethacks.ca/",
    date: "July 2020",
  },
  {
    awardName: "Software Engineering Hackathon Winner",
    awardDetails: "1st Place Hack",
    awardeeLogo: SeSoc,
    awardeeName: "UWaterloo's Software Engineering Society",
    awardeeUrl: "https://sesoc.uwaterloo.ca/",
    date: "July 2020",
  },
  {
    awardName: "FinHacks (Hackathon) Winner",
    awardDetails: "Top 3 overall hack",
    awardeeLogo: TYN,
    awardeeName: "Toronto Youth Network",
    awardeeUrl: "https://torontoyouthnetwork.com/",
    date: "November 2019",
  },
  {
    awardName: "PicoCTF - Outstanding Achievement",
    awardDetails:
      "Top 25 nationally in the world's largest cybersecurity competition",
    awardeeLogo: PicoCTF,
    awardeeName: "PicoCTF",
    awardeeUrl: "https://picoctf.org/",
    date: "October 2019",
  },
  {
    awardName: "Hack Lassonde (Hackathon) Winner",
    awardDetails: "Top 5 overall hack",
    awardeeLogo: MLH,
    awardeeName: "Major League Hacking",
    date: "March 2019",
  },
  {
    awardName: "TORCH Event Finalist",
    awardDetails: "2nd place in UoFT's annual operations research challenge.",
    awardeeLogo: Torch,
    awardeeName: "TORCH",
    awardeeUrl: "http://orchallenge.org/",
    date: "March 2019",
  },
  {
    awardName: "E3 Competition Winner",
    awardDetails:
      "1st place in UWaterloo's entrepreneurship and engineering competition",
    awardeeLogo: Waterloo,
    awardeeName: "University of Waterloo",
    awardeeUrl: "https://uwaterloo.ca/",
    date: "August 2018",
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: "SHOP.IO",
    portfolioItem: [
      {
        title: "Shop.io",
        description:
          "A fully functional ecommerce platform where users can browse, sell, and checkout their favourite items. Features include user authentication, Stripe payments, password reset options etc.",
        image: PortfolioImage1,
        link: "https://github.com/RahulAggarwal1016/Shop.io",
        buildWith: [
          {
            content: "Next JS",
          },
          {
            content: "Node JS",
          },
          {
            content: "Prisma",
          },
          {
            content: "GraphQL",
          },
          {
            content: "Styled Components",
          },
        ],
      },
    ],
  },
  {
    title: "CHATTER",
    portfolioItem: [
      {
        title: "Chatter",
        description:
          "A full-stack social media application that helps people connect and communicate online. Users can communicate in real-time using private chat rooms as well as post public messages for others to view.",
        image: PortfolioImage1,
        link: "https://github.com/RahulAggarwal1016/Chatter",
        buildWith: [
          {
            content: "React JS",
          },
          {
            content: "Node JS",
          },
          {
            content: "GraphQL",
          },
          {
            content: "Semantic UI",
          },
          {
            content: "Socket.io",
          },
        ],
      },
    ],
  },
  {
    title: "BETTER VOTE",
    portfolioItem: [
      {
        title: "Better Vote",
        description:
          "A cross platform mobile app that makes it easier for any organization (both poltical and apolitical) to operate democratically to make decisions.",
        image: PortfolioImage1,
        link: "https://github.com/RahulAggarwal1016/BetterVote",
        buildWith: [
          {
            content: "React Native",
          },
          {
            content: "MongoDB",
          },
          {
            content: "Node JS",
          },
        ],
      },
    ],
  },
  {
    title: "FOLLAKART",
    portfolioItem: [
      {
        title: "Follakart",
        description:
          "An autonomous car that will track and follow a predefined object. Powered using Raspberry Pi, a camera module, and DC motors, Follakart will analyze video frames to locate and track an object near the centre of the camera frame.",
        image: PortfolioImage1,
        link: "https://github.com/RahulAggarwal1016/Follakart",
        buildWith: [
          {
            content: "Python/OpenCV",
          },
          {
            content: "Rasberry PI",
          },
        ],
      },
    ],
  },
];

export const SKILLS = [
  {
    title: "Frontend Web",
    listItems: [
      {
        content: "HTML & CSS",
      },
      {
        content: "React JS",
      },
      {
        content: "Gatsby",
      },
      {
        content: "Next JS",
      },
      {
        content: "Styled Components",
      },
      {
        content: "Tailind CSS",
      },
      {
        content: "jQuery",
      },
      {
        content: "Semantic & Material UI",
      },
    ],
  },
  {
    title: "Backend Web",
    listItems: [
      {
        content: "NodeJS",
      },
      {
        content: "Flask",
      },
      {
        content: "GraphQL",
      },
      {
        content: "REST API's",
      },
      {
        content: "Postgres",
      },
      {
        content: "MongoDB",
      },
      {
        content: "SQL",
      },
      {
        content: "Firebase",
      },
    ],
  },
  {
    title: "Mobile",
    listItems: [
      {
        content: "Swift (IOS)",
      },
      {
        content: "React Native",
      },
      {
        content: "C",
      },
      {
        content: "C++",
      },

      {
        content: "Node JS",
      },
    ],
  },
];
