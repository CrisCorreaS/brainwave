import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Events",
    url: "/events",
  },
  {
    id: "3",
    title: "News",
    url: "/news",
  },
  {
    id: "4",
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: "5",
    title: "Contact",
    url: "/contact",
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [logo1, logo2, logo3, logo4, logo5];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Conversational Voice AI",
    text: "Implement advanced speech recognition and natural voice synthesis to enable seamless, human-like voice interactions for customer service and virtual assistants.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "AI-Powered Gamification Engine",
    text: "Develop a dynamic reward system using behavioural AI to boost user engagement through personalised challenges, achievement badges and adaptive leaderboards.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Context-Aware Chatbot",
    text: "Enhance chatbot intelligence with deep learning to deliver hyper-personalised responses, mood adaptation and industry-specific conversational flows.",
    date: "May 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Smart API Orchestration",
    text: "Deploy AI-driven API integration to automate real-time data aggregation from multiple sources (CRM, ERP, IoT) with self-healing error handling.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const fundamentals = [
  {
    id: "0",
    title: "Clarity",
    description: "We believe true innovation begins with understanding.",
    features: [
      "We communicate openly and design with purpose.",
      "Design choices always put real people first.",
      "We simplify complex ideas without losing depth.",
    ],
  },
  {
    id: "1",
    title: "Ingenuity",
    description: "Creativity drives everything we do.",
    features: [
      "We solve problems with bold, curious thinking.",
      "Every solution is adaptive and built for change.",
      "We test fast, learn fast and improve constantly.",
    ],
  },
  {
    id: "2",
    title: "Trust",
    description: "Relationships are the foundation of impact.",
    features: [
      "We deliver consistently and communicate honestly.",
      "We innovate responsibly, with ethics in mind.",
      "We build lasting solutions, not just quick wins.",
    ],
  },
];


export const benefits = [
  {
    id: "0",
    title: "Who We Are",
    text: "DeepGlow is a forward-thinking startup crafting bespoke solutions for businesses and individuals. We blend technology, design, and strategy to solve real-world challenges with a human touch.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Our Mission",
    text: "We exist to unlock potential! Turning ideas into impactful tools that accelerate growth, spark creativity, and simplify complexity for those we serve.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Our Vision",
    text: "We envision a world where intelligent systems and intuitive design enhance every aspect of life and work: accessible, scalable and beautifully effective.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "How We Work",
    text: "We thrive on collaboration, rapid prototyping and continuous learning. Our team of engineers, designers and dreamers bring fresh energy to every project, big or small.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Who We Help",
    text: "Whether you're launching your first product or transforming legacy systems, DeepGlow delivers adaptive, high-impact solutions that evolve with your needs.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "The DeepGlow Difference",
    text: "We don’t just build tech, we build trust. DeepGlow bridges the gap between innovation and empathy, ensuring every solution feels as good as it functions.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t speak highly enough of DeepGlow. They took our complex AI requirements and delivered a seamless, intelligent solution. Their problem-solving skills are second to none.",
    imgPath: client1,
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with DeepGlow was brilliant. They transformed our outdated systems into a cutting-edge, AI-driven platform. Their attention to detail and commitment to quality are unmatched. Highly recommended for any AI project.",
    imgPath: client3,
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with DeepGlow was an absolute pleasure. Their professionalism, efficiency and dedication to excellence were evident throughout. Their passion for AI innovation truly stands out. If you want to future-proof your business, DeepGlow is the partner you need. Their technology is tailored, not templated.",
    imgPath: client2,
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "DeepGlow was fantastic to work with. They modernised our operations with intuitive AI tools that are both powerful and easy to use. Exceptional work all around.",
    imgPath: client5,
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "DeepGlow’s expertise in AI is seriously impressive. They built us a scalable, intelligent system that’s boosted efficiency by 40%. Proper professionals!",
    imgPath: client4,
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "DeepGlow nailed our project. They grasped our needs perfectly and delivered an AI solution that surpassed expectations. Their technical skills are top-tier.",
    imgPath: client6,
  },
];

export const hackathonImageList = [
  {
    image:
      "https://i.pinimg.com/736x/b6/a6/f0/b6a6f0a026658fb980c59e222d227b3c.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/1a/38/55/1a385583cf67a1db4740c66388f1120c.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/07/24/08/0724084c00c27f93d3b705282edf2179.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/1e/39/f7/1e39f7d230b0ea5b7a88c455c0da7b7a.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/bc/71/26/bc7126353be75818bdd56b08c17ffe30.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/76/06/93/7606938a9fa0951f5d79760c04875762.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/79/56/dc/7956dccbb5aadfaf13927b3152304b32.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/4f/e0/78/4fe07880dcff0a5c81cc65a42bf8648e.jpg",
  },
];

export const ethicsImageList = [
  {
    image:
      "https://i.pinimg.com/736x/85/e3/82/85e382fad6ef73d846531d839d13c1c1.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/3e/55/9e/3e559ed1b0d99894cd8ee29735d3a977.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/30/9e/ce/309ece5502468318ad588490fcb4cb80.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/55/91/43/559143baa5b999af02854f44273c399b.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/a0/fd/56/a0fd5659d258d753356346cb11807917.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/f0/5b/a6/f05ba64a9e6b5dde41e5da8114c31537.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/e7/bb/0d/e7bb0d42b88868be8eabbb07f5e9c8fb.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/f8/c5/b8/f8c5b8333d2ee8a3c994511984230838.jpg",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
