export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
//   { name: "Testimonials", link: "#testimonials" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
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
    title: "Building a Stable Diffusion library under FastAI course",
    description: "Ongoing projects",
    className: "md:col-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
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
    link: "https://github.com/awhb/art-classifier",
  },
  {
    id: 2,
    title: "GitGOod Forum",
    description: "A full-stack forum web application.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/go.svg", "/postgres.svg"],
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

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
  }
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