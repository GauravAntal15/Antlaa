import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am proficient in a versatile tech stack, including languages like C/C++, Java, Typescript, AWS, DevOps and have experience with MERN stack",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Working as a Data Analyst at Consilio LLC.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I'm Currently Learning AWS, Kubernetes, DevOps, Docker. In addition, I am an avid competitive programmer, having solved over 500+ problems on platforms such as LeetCode, GeeksforGeeks, and CodeChef.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Prediction Of Lumpy Skin Diseased in Cow:",
    des: "Identification and Prediction of Lumpy skin diseases in cows using machine learning, CNN, and Image Processing and predicts the result with an accuracy of more than 84%",
    img: "/p1.svg",
    iconLists: ["/Py.svg", "/and.svg", "/java.svg"],
    link: "https://github.com/GauravAntal15",
  },
  /*{
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  */
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://apple-gamma-teal.vercel.app/",

  },
];

export const testimonials = [
  {
    quote:
      "I highly recommend Gaurav. He is incredibly hardworking and always ready to take on new challenges. His positive attitude and enthusiasm make him a joy to work with. Gaurav is a valuable team member who excels in everything he does. Any team would be lucky to have him.",
    name: "Vaneet Sharma",
    title: "Team Lead - Data Operation at Consilio LLC",
  },
  {
    quote:
      "Gaurav Antal possesses a remarkable ability to Quick learner, communicate effectively with team members and attention to details. He consistently delivers high-quality results and is always willing to go above and beyond to ensure the success of the team and the organization as a whole.Furthermore, He actively contributes ideas, offers support to colleagues, and demonstrates a strong commitment to achieving shared goals. In summary, I have the utmost confidence in his abilities and believe he would be a valuable asset to any team or organization.",
    name: "Mukul Jain",
    title: "Ex-Analyst at Consilio LLC",
  },
  {
    quote:
      "I highly recommend Gaurav. He is incredibly hardworking and always ready to take on new challenges. His positive attitude and enthusiasm make him a joy to work with. Gaurav is a valuable team member who excels in everything he does. Any team would be lucky to have him.",
    name: "Vaneet Sharma",
    title: "Team Lead - Data Operation at Consilio LLC",
  },
  {
    quote:
      "Gaurav Antal possesses a remarkable ability to Quick learner, communicate effectively with team members and attention to details. He consistently delivers high-quality results and is always willing to go above and beyond to ensure the success of the team and the organization as a whole.Furthermore, He actively contributes ideas, offers support to colleagues, and demonstrates a strong commitment to achieving shared goals. In summary, I have the utmost confidence in his abilities and believe he would be a valuable asset to any team or organization.",
    name: "Mukul Jain",
    title: "Ex-Analyst at Consilio LLC",
  },
  {
    quote:
      "Gaurav Antal possesses a remarkable ability to Quick learner, communicate effectively with team members and attention to details. He consistently delivers high-quality results and is always willing to go above and beyond to ensure the success of the team and the organization as a whole.Furthermore, He actively contributes ideas, offers support to colleagues, and demonstrates a strong commitment to achieving shared goals. In summary, I have the utmost confidence in his abilities and believe he would be a valuable asset to any team or organization.",
    name: "Mukul Jain",
    title: "Ex-Analyst at Consilio LLC",
  },
  {
    quote:
      "I highly recommend Gaurav. He is incredibly hardworking and always ready to take on new challenges. His positive attitude and enthusiasm make him a joy to work with. Gaurav is a valuable team member who excels in everything he does. Any team would be lucky to have him.",
    name: "Vaneet Sharma",
    title: "Team Lead - Data Operation at Consilio LLC",
  },
];

export const companies = [
  {
    id: 1,
    name: "MongoDB",
    img: "/mongo.svg",
    nameImg: "/mongoName.svg",
  },
  {
    id: 2,
    name: "kubernets",
    img: "/kubernets.svg",
    nameImg: "/kubne.svg",
  },
  {
    id: 3,
    name: "AWS",
    img: "/awslogo.svg",
    nameImg: "/awsname.svg",
  },
  {
    id: 4,
    name: "Tailwind",
    img: "/tail.svg",
    nameImg: "/tailwindcss.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "React",
    img: "/react.svg",
    nameImg: "/reactname.svg",
  },
  {
    id: 7,
    name: "Node",
    img: "/nodejs.svg",
    nameImg: "/nodename.svg",
  },
  {
    id: 8,
    name: "Git",
    img: "/github.svg",
    nameImg: "/githubname.svg",
  },
  {
    id: 9,
    name: "JavaScript",
    img: "/javascript.svg",
    nameImg: "/javascriptname.svg",
  },
  {
    id: 10,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/tyname.svg",
  },
  {
    id: 11,
    name: "Framer Motion",
    img: "/framer.svg",
    nameImg: "/framername.svg",
  },
  {
    id: 12,
    name: "Figma",
    img: "/figma.svg",
    nameImg: "/figmaname.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Analyst",
    desc: "Determine, gather, organize, and generate electronically stored data (ESI), In order to support attorneys throughout the litigation process, process the data, and make it accessible. Aside from that, I managed the SQL database, the Bloomberg data, the Amazon Quip data, the Google Drive attachments, and the document password cracking. SKILLS: RelativityOne, Nuix, SQL, EnCase, FTK, and Cellebrite.",
    className: "md:col-span-2 ",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Intern",
    desc: "Designed and Developed a website for a small business that increased their website traffic by 20%, using HTML, CSS, and Javascript, and deployed it using Godaddy. Develop the server-side logic of a website, using a programming language such as PHP.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  /*
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },*/
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/GauravAntal15",
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/gaurav-antal-53153155l/",
  },
];