// icons from https://react-icons-kit.now.sh/iconset/ionicons
// import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { socialLinkedin } from "react-icons-kit/ionicons/socialLinkedin";

// award logos
import MLH from "../../assets/image/mlh.png";
import Hack3 from "../../assets/image/hack3.jpeg";
import Torch from "../../assets/image/torch.png";
import SeSoc from "../../assets/image/sesoc.png";
import SetHacks from "../../assets/image/sethacks.png";
import TYN from "../../assets/image/tyn.png";
import PicoCTF from "../../assets/image/picoctf.jpeg";
import Waterloo from "../../assets/image/uwaterloo.png";

import IosPortfolioImage from "../../assets/image/app_portfolio.png";
import BetterVoteImage from "../../assets/image/better-vote.png";
import ShopioImage from "../../assets/image/shopio.png";
import ChatterImage from "../../assets/image/chatter.png";
import LassoLearnImage from "../../assets/image/lassolearn.jpeg";
import FollakartImage from "../../assets/image/follakart.jpeg";

// organizations
import Remitbee from "../../assets/image/remitbee.png";
import HTN from "../../assets/image/htn.png";
import Faire from "../../assets/image/faire.png";
import Waterloop from "../../assets/image/waterloop.png";
import EntSoc from "../../assets/image/entsoc.png";
import AirMatrix from "../../assets/image/airmatrix.png";
import WavesEG from "../../assets/image/waveseg.png";
import MacBryte from "../../assets/image/macbryte.png";
import Waabi from "../../assets/image/waabi.png";
import CRL from "../../assets/image/crl.png";
import Snowflake from "../../assets/image/snowflake.png"

export const CLIENTS = [
  {

    image: Snowflake,
    title: "Snowflake, Incoming Software Engineering Intern",
    description: ["Storage Platform team"],
  },
  {
    image: CRL,
    title: "Cockroach Labs, Software Engineering Intern",
    description: ["Storage team"],
  },
  {
    image: Waabi,
    title: "Waabi, Software Engineering Intern",
    description: [
      "Core features and framework development for closed-loop, autonomous-driving simulator using Go, Rust, and Python.",
    ],
  },
  {
    image: Faire,
    title: "Faire, Backend Developer Intern",
    description: [
      "Developed Kotlin endpoints using Hibernate, Jersey, and Google Guice to surface import VAT and duty cost estimates for over 90% of  European retailers and brands. ",
      "Rearchitected our shipment api to interface directly with overseas carrier providers.",
      "Created a product restriction service and search filter provider using Redis and CSV parsing which reduced return-to-sender rates in Spain and Italy by 68%.",
    ],
  },
  {
    image: Remitbee,
    title: "Remitbee, FullStack Developer Intern",
    description: [
      "Reduced request overhead and internal dashboard latency by 34% through creating an alternative notification system that leverages web sockets and Redis caching.",
      "Created over 40+ GraphQL resolvers to power new internal analytic tool features and support 10% of international currency exchange transactions.",
      "Wrote 65+ unit tests to verify user interfaces and relational database interactions.",
    ],
  },
  {
    image: HTN,
    title: "Hack the North, Backend Developer",
    description: [
      "Helping organize North America's largest student-run hackathon!",
      "Maintaining HackerApiV3, the primary api that manages all hacker, mentor, and sponsor data.",
    ],
  },
  {
    image: Waterloop,
    title: "Waterloop, FullStack Developer",
    description: [
      "Built out internal tooling for Canada's only hyperloop team using Styled Components, and ReactJS.",
      "Created a script to help optimize images and automatically upload them to Google's Cloud Storage.",
    ],
  },
  {
    image: EntSoc,
    title: "UW Entrepreneurship Society, FullStack Developer",
    description: [
      "Developed an internal interface with React and NodeJs to replace spreadsheets.",
      "Integrated third-party services and external API's to replace legacy features.",
    ],
  },
  {
    image: AirMatrix,
    title: "AirMatrix, Software Engineering Intern",
    description: [
      "Assisted team and product manager in determining the tech specifications and structure of a 90+ drone tracking system to be used by 110+ operators",
      "Enhanced clarity and maintainability of React and Node codebase by modularizing backend processes and migrating frontend components to a NPM package.",
    ],
  },
  {
    image: WavesEG,
    title: "Waves EGaming, Software Development Intern",
    description: [
      "Reconstructed the company's website to improve its UI and long-term maintainability.",
      "Resolved daily computer networking, operating system, and web server management issues.",
    ],
  },
  {
    image: MacBryte,
    title: "MacBryte, IOS Developer",
    description: [
      "Published a Swift and Typescript based MacOS application to allow users to view their lesson details, and learn about their systems configuration settings.",
      "Automated 25% of logistical operations by engineering new admin control features.",
    ],
  },
];

export const SOCIAL_PROFILES = [
  {
    icon: socialGithub,
    url: "https://github.com/raggaar",
  },
  {
    icon: socialLinkedin,
    url: "https://www.linkedin.com/in/raggar/",
  },
  {
    icon: socialTwitter,
    url: "https://twitter.com/Rahul_1016",
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
  { label: "AWARDS", path: "#awards_section", offset: "0" },
  {
    label: "SKILLS",
    path: "#process_section",
    offset: "0",
  },
];

export const AWARDS = [
  {
    awardName: "YeeHaw Hacks Winner",
    awardDetails: "Best use of Google Cloud",
    awardeeLogo: MLH,
    awardeeName: "Major League Hacking",
    awardeeUrl: "https://mlh.io/",
    date: "August 2020",
  },
  {
    awardName: "Hack3 Overall Finalist",
    awardDetails: "Top 3 overall hack",
    awardeeLogo: Hack3,
    awardeeName: "Hack3",
    awardeeUrl: "https://hack3.co/",
    date: "July 2020",
  },
  {
    awardName: "SetHacks Winner",
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
    awardeeName: "UW Software Engineering Society",
    awardeeUrl: "https://sesoc.uwaterloo.ca/",
    date: "July 2020",
  },
  {
    awardName: "FinHacks Winner",
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
    awardName: "Hack Lassonde Winner",
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
          "A complete ecommerce platform where users can browse, sell, and purchase their favourite items. Features include user authentication, payments, password reset options, the ability to search for items etc.",
        image: ShopioImage,
        link: "https://github.com/RahulAggarwal1016/Shop.io",
        buildWith: [
          {
            content: "NextJS",
          },
          {
            content: "NodeJS",
          },
          {
            content: "Prisma",
          },
          {
            content: "GraphQL",
          },
        ],
      },
    ],
  },
  {
    title: "IOS ",
    portfolioItem: [
      {
        title: "IOS Apps",
        description:
          "Contains 10+ applications ranging from a bitcoin tracker, fortune telling game, weather detector, flower identfier etc. Each was built using a different web api or swift framework.",
        image: IosPortfolioImage,
        link: "https://github.com/RahulAggarwal1016/IOS_Portfolio.git",
        buildWith: [
          {
            content: "Swift",
          },
          {
            content: "Realm",
          },
          {
            content: "Core Data",
          },
          {
            content: "ARKit",
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
          "A full-stack chat application where users can view news from popular media outlets as well as create, like, and contribute to public discussion threads",
        image: ChatterImage,
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
          "A cross platform mobile app designed to help increase voter turnout and decrease political election costs.",
        image: BetterVoteImage,
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
        image: FollakartImage,
        link: "https://github.com/RahulAggarwal1016/Follakart",
        buildWith: [
          {
            content: "Python/OpenCV",
          },
          {
            content: "Rasberry PI",
          },
          {
            content: "Arduino",
          },
        ],
      },
    ],
  },
  {
    title: "LASSO LEARN",
    portfolioItem: [
      {
        title: "Lasso Learn",
        description:
          "A platform for users to engage in one-on-one discussions to teach and learn new skills. When a user creates an account they can select the topics that they would like to teach or learn and are then immediatly connected with others who share their learning interests.",
        image: LassoLearnImage,
        link: "https://github.com/RahulAggarwal1016/Lasso_Learn",
        buildWith: [
          {
            content: "ReactJS",
          },
          {
            content: "Firebase",
          },
          {
            content: "HTML & CSS",
          },
        ],
      },
    ],
  },
];

export const SKILLS = [
  {
    title: "Languages",
    listItems: [
      {
        content: "Python",
      },
      {
        content: "Golang",
      },
      {
        content: "Kotlin",
      },
      {
        content: "Typescript",
      },
      {
        content: "C++/C",
      },
      {
        content: "Swift",
      },
      {
        content: "Lua",
      },
    ],
  },
  {
    title: "Frameworks/Technologies",
    listItems: [
      {
        content: "React & React Native",
      },
      {
        content: "NodeJS",
      },
      {
        content: "GraphQL",
      },
      {
        content: "SQL",
      },
      {
        content: "AWS",
      },
      {
        content: "Docker",
      },
      {
        content: "Prisma",
      },
    ],
  },
  {
    title: "Other",
    listItems: [
      {
        content: "Firebase",
      },
      {
        content: "Git",
      },
    ],
  },
];
