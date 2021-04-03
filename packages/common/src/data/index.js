// icons from https://react-icons-kit.now.sh/iconset/ionicons
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';

// award logo's
import MLH from '../../assets/image/mlh.png';
import Hack3 from '../../assets/image/hack3.jpeg';
import UFT from '../../assets/image/uft.png';
import Waterloo from '../../assets/image/uwaterloo.png';
import SetHacks from '../../assets/image/sethacks.png';
import TYN from '../../assets/image/tyn.png';
import PicoCTF from '../../assets/image/picoctf.jpeg';

import PortfolioImage1 from '../../assets/image/portfolio-1.jpg';

// organizations
import Remitbee from '../../assets/image/remitbee.png';
import HTN from '../../assets/image/htn.png';
import Waterloop from '../../assets/image/waterloop.png';
import EntSoc from '../../assets/image/entsoc.png';
import AirMatrix from '../../assets/image/airmatrix.png';
import WavesEG from '../../assets/image/waveseg.png';

export const CLIENTS = [
  {
    image: Remitbee,
    title: 'Remitbee',
  },
  {
    image: HTN,
    title: 'Hack the North',
  },
  {
    image: Waterloop,
    title: 'Waterloop',
  },
  {
    image: EntSoc,
    title: 'EntSoc',
  },
  {
    image: AirMatrix,
    title: 'AirMatrix',
  },
  {
    image: WavesEG,
    title: 'WavesEG',
  },
];

export const SOCIAL_PROFILES = [
  {
    icon: socialGithub,
    url: 'https://github.com/RahulAggarwal1016',
  },
  {
    icon: socialLinkedin,
    url: 'https://www.linkedin.com/in/rahul1016/',
  },
  {
    icon: socialTwitter,
    url: 'https://twitter.com/Rahul_1016',
  },
  {
    icon: socialFacebook,
    url: 'https://www.facebook.com/RahulAggarwal1016/',
  },
];

export const MENU_ITEMS = [
  {
    label: 'ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECTS',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'AWARDS',
    path: '#awards_section',
    offset: '0',
  },
  {
    label: 'SKILLS',
    path: '#process_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardName: 'YeeHaw Hacks Winner',
    awardDetails: 'For the best use of Google Cloud',
    awardeeLogo: MLH,
    awardeeName: 'Major League Hacking',
    date: 'August 2020',
  },
  {
    awardName: 'Hack3 Overall Finalist',
    awardDetails: 'Awarded to the top 3 overall teams',
    awardeeLogo: Hack3,
    awardeeName: 'Hack3',
    date: 'July 2020',
  },
  {
    awardName: 'SetHacks Category Winner',
    awardDetails: 'Awarded to the top hack in the "community" category',
    awardeeLogo: SetHacks,
    awardeeName: 'SetHacks',
    date: 'July 2020',
  },
  {
    awardName: 'Software Engineering Hackathon Winner',
    awardDetails: "Voted the top hack by UW's Software Engineering Cohort",
    awardeeLogo: Waterloo,
    awardeeName: 'University of Waterloo SE 25',
    date: 'July 2020',
  },
  {
    awardName: 'FinHacks Winner',
    awardDetails: 'Placed 3rd overall amongst all teams',
    awardeeLogo: TYN,
    awardeeName: 'Toronto Youth Network',
    date: 'November 2019',
  },
  {
    awardName: 'PicoCTF - Outstanding Achievement',
    awardDetails:
      "Placed top 25 nationally in the World's largest cybersecurity competition",
    awardeeLogo: PicoCTF,
    awardeeName: 'PicoCTF',
    date: 'October 2019',
  },
  {
    awardName: 'Hack Lassonde Winner',
    awardDetails: 'Placed top 5 overall amongst all teams.',
    awardeeLogo: MLH,
    awardeeName: 'Major League Hacking',
    date: 'March 2019',
  },
  {
    awardName: 'TORCH Event Finalist',
    awardDetails:
      "Placed in the 2nd in UoFT's annual Operations Research Challenge.",
    awardeeLogo: UFT,
    awardeeName: 'University of Toronto',
    date: 'March 2019',
  },
  {
    awardName: 'UWaterloo E3 Competition Winner',
    awardDetails:
      "Placed 1st overall in UWaterloo's Engaging in Entrepreneurship and Engineering Challenge.",
    awardeeLogo: Waterloo,
    awardeeName: 'University of Waterloo',
    date: 'August 2018',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'SHOP.IO',
    portfolioItem: [
      {
        title: 'Shop.io',
        description:
          'A fully functional ecommerce platform where users can browse, sell, and checkout their favourite items. Features include user authentication, Stripe payments, password reset options etc.',
        image: PortfolioImage1,
        link: 'https://github.com/RahulAggarwal1016/Shop.io',
        buildWith: [
          {
            content: 'Next JS',
          },
          {
            content: 'Node JS',
          },
          {
            content: 'Prisma',
          },
          {
            content: 'GraphQL',
          },
          {
            content: 'Styled Components',
          },
        ],
      },
    ],
  },
  {
    title: 'CHATTER',
    portfolioItem: [
      {
        title: 'Chatter',
        description:
          'A full-stack social media application that helps people connect and communicate online. Users can communicate in real-time using private chat rooms as well as post public messages for others to view.',
        image: PortfolioImage1,
        link: 'https://github.com/RahulAggarwal1016/Chatter',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Node JS',
          },
          {
            content: 'GraphQL',
          },
          {
            content: 'Semantic UI',
          },
          {
            content: 'Socket.io',
          },
        ],
      },
    ],
  },
  {
    title: 'BETTER VOTE',
    portfolioItem: [
      {
        title: 'Better Vote',
        description:
          'A cross platform mobile app that makes it easier for any organization (both poltical and apolitical) to operate democratically to make decisions.',
        image: PortfolioImage1,
        link: 'https://github.com/RahulAggarwal1016/BetterVote',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'MongoDB',
          },
          {
            content: 'Node JS',
          },
        ],
      },
    ],
  },
  {
    title: 'FOLLAKART',
    portfolioItem: [
      {
        title: 'Follakart',
        description:
          'An autonomous car that will track and follow a predefined object. Powered using Raspberry Pi, a camera module, and DC motors, Follakart will analyze video frames to locate and track an object near the centre of the camera frame.',
        image: PortfolioImage1,
        link: 'https://github.com/RahulAggarwal1016/Follakart',
        buildWith: [
          {
            content: 'Python/OpenCV',
          },
          {
            content: 'Rasberry PI',
          },
        ],
      },
    ],
  },
];

export const SKILLS = [
  {
    title: 'Frontend Web',
    listItems: [
      {
        content: 'HTML & CSS',
      },
      {
        content: 'React JS',
      },
      {
        content: 'Gatsby',
      },
      {
        content: 'Next JS',
      },
      {
        content: 'Styled Components',
      },
      {
        content: 'Tailind CSS',
      },
      {
        content: 'jQuery',
      },
      {
        content: 'Semantic & Material UI',
      },
    ],
  },
  {
    title: 'Backend Web',
    listItems: [
      {
        content: 'NodeJS',
      },
      {
        content: 'Flask',
      },
      {
        content: 'GraphQL',
      },
      {
        content: "REST API's",
      },
      {
        content: 'Postgres',
      },
      {
        content: 'MongoDB',
      },
      {
        content: 'SQL',
      },
      {
        content: 'Firebase',
      },
    ],
  },
  {
    title: 'Mobile',
    listItems: [
      {
        content: 'Swift (IOS)',
      },
      {
        content: 'React Native',
      },
      {
        content: 'C',
      },
      {
        content: 'C++',
      },

      {
        content: 'Node JS',
      },
    ],
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];
