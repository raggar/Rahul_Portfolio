import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';

import PortfolioImage1 from '../../assets/image/portfolio/portfolio-1.jpg';

import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialGithub,
    url: 'https://github.com/RahulAggarwal1016',
  },
  {
    icon: socialTwitter,
    url: 'https://twitter.com/Rahul_1016',
  },
  {
    icon: socialFacebook,
    url: 'https://www.facebook.com/RahulAggarwal1016/',
  },
  // {
  //   icon: socialDribbbleOutline,
  //   url: '#',
  // },
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
    label: 'WHY ME?',
    path: '#process_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'YeeHaw Hacks Winner',
    awardDetails: 'For the best use of Google Cloud',
    awardeeLogo: Awardee1,
    awardeeName: 'Major League Hacking',
    date: 'August 2020',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Hack3 Overall Finalist',
    awardDetails: 'Awarded to the top 3 overall teams',
    awardeeLogo: Awardee2,
    awardeeName: 'Hack3',
    date: 'July 2020',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'SetHacks Category Winner',
    awardDetails: 'Awarded to the top hack in the "community" category',
    awardeeLogo: Awardee2,
    awardeeName: 'SetHacks',
    date: 'July 2020',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Software Engineering Hackathon Winner',
    awardDetails: 'Voted the top hack by the UW Software Engineering Cohort',
    awardeeLogo: Awardee2,
    awardeeName: 'University of Waterloo SE 25',
    date: 'July 2020',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'FinHacks Winner',
    awardDetails: 'Placed 3rd overall amongst all teams',
    awardeeLogo: Awardee2,
    awardeeName: 'Toronto Youth Network',
    date: 'November 2019',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'PicoCTF - Outstanding Achievement',
    awardDetails:
      "Placed top 25 nationally in the World's largest cybersecurity competition",
    awardeeLogo: Awardee2,
    awardeeName: 'PicoCTF',
    date: 'October 2019',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Hack Lassonde Winner',
    awardDetails: 'Placed in the top 5 overall teams.',
    awardeeLogo: Awardee2,
    awardeeName: 'York University',
    date: 'March 2019',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'TORCH Event Finalist',
    awardDetails:
      "Placed in the 2nd in UoFT's annual Operations Research Challenge.",
    awardeeLogo: Awardee2,
    awardeeName: 'University of Toronto',
    date: 'March 2019',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'UWaterloo E3 Competition Winner',
    awardDetails:
      "Placed 1st overall in UWaterloo's Engaging in Entrepreneurship and Engineering Challenge.",
    awardeeLogo: Awardee2,
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
  {
    title: 'LASSOLEARN',
    portfolioItem: [
      {
        title: 'LassoLearn',
        description:
          'A platform for users to engage in one-on-one discussions to teach and learn new skills.',
        image: PortfolioImage1,
        link: 'https://github.com/RahulAggarwal1016/Lasso_Learn',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Firebase',
          },
        ],
      },
    ],
  },
];

export const SERVICE_LIST = [
  {
    title: 'Frontend Web Development',
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
    title: 'Backend Web Development',
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
    title: 'Mobile App Development',
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

export const SKILLS = [
  {
    title: 'Graphic Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon1,
    successRate: '90',
  },
  {
    title: 'UI/UX Design',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon2,
    successRate: '85',
  },
  {
    title: 'Web Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon3,
    successRate: '80',
  },
  {
    title: 'Mobile Application',
    description:
      'Aristotle maintained the sharp distinction between science and the practical',
    icon: SkillIcon4,
    successRate: '70',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Founder & CEO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer2,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jeny Doe',
    designation: 'Co-Founder & CTO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Co-Founder & COO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
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
