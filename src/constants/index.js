import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    sdm,
    sds,
    nawmer,
    tesla,
    shopify,
    yolabs,
    sharpner,
    carrent,
    ai_image,
    restaurant,
    ecomm,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Engineering Graduate",
      company_name: "SDM College Of Engineering And Technology",
      icon: sdm,
      iconBg: "#383E56",
      date: "August 2018 - July 2022",
      points: [
        "During my engineering program, I took various courses that helped me develop a solid foundation in engineering principles and concepts.",
        "During my studies, I worked on several projects that helped me apply my academic learning to practical situations.",
        "During my studies, I undertook internships with various companies that allowed me to gain practical experience and develop my professional network.",
        "As part of my engineering studies, I also developed several mobile apps that helped me apply my programming skills to practical situations.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Sindhanur Delivery Service ",
      icon: sds,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Nawmer",
      icon: nawmer,
      iconBg: "#383E56",
      date: "Jan 2022 - November 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Yolabs",
      icon: yolabs,
      iconBg: "#E6DEDD",
      date: "May 2022 - August 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Development Course",
      company_name: "Sharpner Tech",
      icon: sharpner,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "DSA Basics of Coding, Looping, Arrays, Bit manipulation Stacks and Queues, Recursion, Linked Lists",
        "Web Development Basics and Advanced Javascript, DOM Manipulation, DSA Revision 2 Micro Projects",
        "React JS Basics and Advanced React JS, Styling, Debugging and Lifecyle Methods 3 Industry Macro Projects",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Kashi proved me wrong.",
      name: "Mahesh Gupta",
      designation: "CTO",
      company: "Nawmer Services",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kashi does.",
      name: "John rew",
      designation: "COO",
      company: "DOT Corp",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      testimonial:
        "After Kashi optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Sarah",
      designation: "CTO",
      company: "Servv Enterprises",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];
  
  const projects = [
 
    {
      name: "Restaurant Website",
      description:
      "Developed a dynamic web application for ordering food online, incorporating a feature-rich shopping cart system and real-time calculation of the total bill, enhancing the convenience and efficiency of the ordering process.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/Kashi-Srishala/restaurant-app-react",
    },
    {
      name: "Ecommerce Website",
      description:
        "Crafted a dynamic e-commerce website with a user-friendly interface, allowing customers to explore a vast collection of products, add items to their cart, and proceed to checkout effortlessly, enhanced usability.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restApi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: ecomm,
      source_code_link: "https://github.com/Kashi-Srishala/E-Commerce-React",
    },
    {
      name: "AI Image Generation App",
      description:
        "MidJourney and DALL-E have taken over social media. If you want to explore the world of artificial intelligence, why not create your own versions of these tools? You'll be able to generate everything from hilarious memes to stunning art and user interface designs!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "midJourney",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: ai_image,
      source_code_link: "https://github.com/Kashi-Srishala/AI-Image-Generation-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };