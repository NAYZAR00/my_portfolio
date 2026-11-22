export const portfolioData = {
  developer: {
    name: "Nay Zar Aung",
    title: "Full-Stack Developer",
    greeting: "Hello, I'm",
    tagline: "Full-Stack MERN Developer specializing in high-performance web applications.",
    bio: "I build responsive, full-stack web applications with modern architectures. Experienced in building end-to-end MERN (MongoDB, Express, React, Node.js) products with secure authentication, RESTful APIs, and scalable cloud deployments on Vercel and Render.",
    availability: "Available for Full-time & Internship Opportunities",
    location: "Global / Remote",
    email: "nayzaraung103@gmail.com",
    github: "https://github.com/NAYZAR00",
    githubHandle: "@NAYZAR00",
    linkedin: "https://www.linkedin.com/in/nay-zar-aung-7973a1409",
    linkedinHandle: "in/nay-zar-aung-7973a1409",
    cvUrl: "/cv.pdf",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Vite", "Responsive Design"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware", "CORS & Security"]
    },
    {
      category: "Database & Cloud",
      items: ["MongoDB", "Mongoose", "Vercel", "Render", "Git & GitHub", "Postman"]
    }
  ],
  projects: [
    {
      id: "media-world",
      title: "The Daily / Media World",
      tagline: "Full-Stack MERN News & Media Platform",
      description:
        "A full-stack media and news publishing web application featuring user authentication, protected story creation, paginated article reading, and dynamic category filtering across Culture, Community, and Current Affairs.",
      image: "/projects/newmedia-world.png",
      liveUrl: "https://newmedia-world.vercel.app/",
      githubUrl: "https://github.com/NAYZAR00/NewmediaWorld",
      backendUrl: "https://newmediaworld.onrender.com",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Vercel", "Render"],
      highlights: [
        "Secure user authentication (Login/Register) with session cookies & JWT protection",
        "Authoring suite for creating, publishing, and managing news articles",
        "Pagination system for browsing through published stories effortlessly",
        "Responsive, modern layout with category exploration (Culture, Community, Current Affairs)",
        "Decoupled cloud architecture: Frontend deployed on Vercel with REST API backend on Render"
      ],
      featured: true
    },
    {
      id: "weathy",
      title: "Weathy — Weather Dashboard",
      tagline: "Live Weather Web Application",
      description:
        "A responsive real-time weather dashboard featuring glassmorphism design, city search with dynamic suggestions, real-time temperature, condition summaries, and atmospheric metrics.",
      liveUrl: "https://nayzar00.github.io/weathy/",
      githubUrl: "https://github.com/NAYZAR00/weathy",
      tags: ["JavaScript", "Weather API", "Glassmorphism CSS", "Async/Await", "GitHub Pages"],
      featured: false
    },
    {
      id: "todo-list",
      title: "Task Planner & To-Do",
      tagline: "Productivity Task Management App",
      description:
        "A clean and intuitive task management tool designed for day-to-day productivity with interactive state handling and local persistence.",
      githubUrl: "https://github.com/NAYZAR00/To-do-list",
      tags: ["JavaScript", "DOM Manipulation", "CSS3", "Local Storage"],
      featured: false
    }
  ]
};

export default portfolioData;
