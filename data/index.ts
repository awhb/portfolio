// export const navItems = [
//   { name: "About", link: "#about" },
//   { name: "Experience", link: "#experience" },
//   { name: "Recommendations", link: "#recommendations" },
//   { name: "Projects", link: "#projects" },
//   { name: "Contact", link: "#contact" },
// ];

export const navItems = [
    { name: "As a Developer", link: "/" },
    { name: "As a Creative", link: "/creative" },
  ];

export const gridItems = [
  {
    id: 1,
    title: "Passionate about innovating with GenAI",
    description: "Welcoming the new age",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full dark:brightness-[70%]",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "A Singaporean student seeking global impact",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Web-dev, AI/ML, and more to come",
    className: "lg:col-span-5 md:col-span-3 md:row-span-2 lg:min-h-[40vh] ",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Venturing into the Computational Arts",
    description: "Ongoing projects",
    className: "md:col-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/exp4.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "Open to a diversity of career connections and opportunities!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-80 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Art Style Classifier",
    description: "A Gradio application deployed on Hugging Face that classifies by fine art styles using the fastai library.",
    img: "/p1.svg",
    iconLists: ["/huggingface.svg", "/gradio.svg"],
    link: "https://github.com/awhb/art-style-classifier",
  },
  {
    id: 2,
    title: "GitGOod Forum",
    description: "A full-stack forum web application supporting JWT authentication and CRUD operations.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/go.svg", "/postgres.svg", "/dock.svg"],
    link: "https://github.com/awhb/gitgood-forum",
  },
  {
    id: 3,
    title: "Parallel uNivUSes",
    description: "A choose-your-own adventure game to live iterations of first-year NUS student life.",
    img: "/p3.svg",
    iconLists: ["/c-sharp.svg", "/unity.svg"],
    link: "https://github.com/awhb/parallel-univuses",
  },
  {
    id: 4,
    title: "NetworkBook",
    description: "A tool which helps computing professionals to manage networking contact information.",
    img: "/p4.svg",
    iconLists: ["/java.svg", "/gradle.svg"],
    link: "https://github.com/awhb/tp",
  },
];

export const recommendations = [
  {
    quote: "I cannot recommend Hang Bin highly enough. He would make a good addition to any team – he learns fast, executes proactively, thinks critically about his work and asks incisive questions.",
    name: "Cedric Chin",
    title: "Director, Postcognito Pte. Ltd.",
    img: "/profile.svg",
  },
  {
    quote: "Hangbin is a logical and quick-thinking developer. As his lead, I never have to watch over his shoulder and can trust him to complete his tasks according to requirements. His research into solutions for the problem statement has yielded proposals that are workable and practical.",
    name: "Chris Ho",
    title: "AIIP Team Lead, AI Singapore",
    img: "/profile.svg",
  },
  {
    quote: "What stands out about Hang Bin is his positive attitude and willingness to learn. He is always willing to go above and beyond to help take on tasks and support his team members. Believe this growth mindset will take him far and add value to future employers. All the best!",
    name: "Julian Koo",
    title: "Co-Founder, CareSense.ai",
    img: "/profile.svg",
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Postcognito Pte. Ltd, Software Engineering Intern",
    desc: "Prototyped free online tool to generate interactive and downloadable XmR charts using HTML, TailwindCSS and D3.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "AI Singapore, AIIP Intern",
    desc: "Designed solution for source attribution in Retrieval-Augmented Generation (RAG) system of LLM using semantic comparison.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "CareSense.ai, Software Engineering Intern",
    desc: "Developed key features of AI-powered health coaching app on React Native including secure voice calls with AI agents and tasks on 3-month user onboarding journey.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  }
];

export const creativeProjects = [
    {
        id: 1,
        title: "Recoloured Train Carriage",
        description: "An Unreal Engine environment with lighting properties that vary with OSC-based signals from TouchDesigner.",
        img: "",
        video: "/RecolouredCarriage_rec.mov",
        tags: ['TouchDesigner', 'Unreal'],
        link: "https://github.com/awhb/touchdesigner-projects/tree/main/RecolouredCarriage/",
    },
    {
        id: 2,
        title: "LavaRand",
        description: "An interactive visual with continuously updating typography inspired by Cloudflare's use of lava lamps in cryptography.",
        img: "",
        video: "/LavaRand_rec.mov",
        tags: ['TouchDesigner'],
        link: "https://github.com/awhb/touchdesigner-projects/tree/main/LavaRand/",
    },
    {
      id: 3,
      title: "Butterfly Effect",
      description: "A visual approximating with animated 3D particles a butterfly from Refik Anadol’s Large Nature Model.",
      img: "",
      video: "/ButterflyEffect_rec.mov",
      tags: ['TouchDesigner'],
      link: "https://github.com/awhb/touchdesigner-projects/tree/main/ButterflyEffect/",
    },
    {
      id: 4,
      title: "3D Stained Glass Design",
      description: "A 3D rendering through mapping normals and heights for a 2D stained glass design depicting a picturesque garden.",
      img: "/3dstainedglass_ss.png",
      video: "",
      tags: ['TouchDesigner'],
      link: "https://github.com/awhb/touchdesigner-projects/tree/main/3DStainedGlass/",
    },
    {
      id: 5,
      title: "Animated Dyson Sphere",
      description: "Attempt to visualise a dyson sphere as 3 gimbals, rotating along different axes, orbiting a star amongst many others.",
      img: "",
      video: "/DysonSphere_rec.mov",
      tags: ['OpenGL'],
      link: "https://www.shadertoy.com/view/WcXGR4",
    },
    {
      id: 6,
      title: "Yin-yang Koi Fish",
      description: "Two procedurally animated koi fish swimming in a cycle that is evocative of yin-yang.",
      img: "",
      video: "/YinYang_rec.mov",
      tags: ['OpenGL'],
      link: "https://www.shadertoy.com/view/wfs3W8",
    },
    {
      id: 7,
      title: "OpenProcessing Sketches",
      description: "Multiple algorithmic P5.js sketches including alien landscapes and fern-like L-systems.",
      img: "/openProcessing.png",
      video: "",
      tags: ['P5.js'],
      link: "https://openprocessing.org/user/319099",
    },
    {
      id: 8,
      title: "Parallel uNivUSes",
      description: "A choose-your-own-adventure game to live iterations of first-year NUS student life.",
      img: "/p3.svg",
      video: "",
      tags: ['Unity', 'WebGL'],
      link: "https://starsia.itch.io/parallel-univus",
    },
  ];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/awhb",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hang-bin-aw/",
  },
];