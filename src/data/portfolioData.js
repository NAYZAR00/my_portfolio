export const portfolioData = {
  developer: {
    name: "Nay Zar Aung",
    title: "FULL-STACK DEVELOPER INTERN",
    role: "Full-Stack Developer",
    targetRole: "Full-Stack Developer Intern",
    greeting: "Hello, I'm",
    tagline: "Information Technology student at Rangsit University seeking a four-month remote Full-Stack Developer Internship.",
    bio: "Information Technology university student at Rangsit University with hands-on practice building web development projects and working with the full stack (MongoDB, Express, React, Node.js). Familiar with creating React interfaces, developing Node.js and Express.js backend functionality, connecting MongoDB databases, and organizing application code. Seeking a four-month remote Full-Stack Developer Internship to strengthen practical skills, contribute to a development team, and gain experience building real-world web applications.",
    availability: "Seeking 4-Month Remote Internship",
    availabilityDuration: "Four months",
    preferredArrangement: "Fully remote",
    nationality: "Myanmar",
    location: "Thailand & Myanmar (Fully Remote)",
    university: "Rangsit University (RSU), Thailand",
    degree: "Bachelor's degree studies in Information Technology",
    expectedGraduation: "December 2027",
    email: "nayzaraung103@gmail.com",
    github: "https://github.com/NAYZAR00",
    githubHandle: "@NAYZAR00",
    linkedin: "https://www.linkedin.com/in/nay-zar-aung-7973a1409",
    linkedinHandle: "in/nay-zar-aung-7973a1409",
    portfolioUrl: "https://nayzar00.github.io/my_portfolio",
    cvUrl: `${import.meta.env.BASE_URL}cv.pdf`,
  },
  education: {
    institution: "Rangsit University (RSU)",
    country: "Thailand",
    degree: "Bachelor's degree studies in Information Technology",
    graduation: "December 2027",
    status: "Expected graduation: December 2027",
    description: "Core coursework focused on software engineering, web application development, database management systems, and computer networks."
  },
  additionalInfo: {
    internshipTarget: "Full-Stack Developer Intern",
    availability: "Four months",
    preferredArrangement: "Fully remote",
    nationality: "Myanmar",
    languages: [
      { name: "English", level: "Intermediate (B1)" },
      { name: "Myanmar", level: "Native" }
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Responsive UI"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "CRUD Operations", "MVC Architecture", "Authentication"]
    },
    {
      category: "Database",
      items: ["MongoDB", "Mongoose", "MySQL"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Visual Studio Code", "Postman", "Vite", "GitHub Pages"]
    },
    {
      category: "Concepts",
      items: [
        "CRUD Operations",
        "MVC Architecture",
        "Authentication",
        "Frontend/Backend Integration",
        "RESTful API Design"
      ]
    }
  ],
  projects: [
    {
      id: "media-world",
      title: "The Daily / Media World",
      tagline: "Full-Stack News & Media Platform",
      description:
        "A full-stack media and news publishing web application featuring user authentication, protected story creation, paginated article reading, and dynamic category filtering across Culture, Community, and Current Affairs.",
      image: `${import.meta.env.BASE_URL}projects/newmedia-world.png`,
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
      featured: true,
      cvProject: false
    },
    {
      id: "student-management-system",
      title: "Student Management System",
      tagline: "Full-Stack Academic Management Application",
      description:
        "Full-stack web application project focused on managing student information. Practised building application features, handling CRUD operations, connecting a database, and organizing backend code using the MVC pattern.",
      githubUrl: "https://github.com/NAYZAR00",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "MVC Architecture", "CRUD", "REST APIs"],
      highlights: [
        "Practised building core application features for managing student academic records",
        "Engineered full CRUD operations (Create, Read, Update, Delete) with MongoDB database connectivity",
        "Structured modular backend code following the industry-standard MVC pattern",
        "Implemented clean frontend/backend integration through RESTful API endpoints"
      ],
      featured: false,
      cvProject: true
    },
    {
      id: "weathy",
      title: "Weathy — Weather Dashboard",
      tagline: "Live Weather Web Application",
      description:
        "A responsive real-time weather dashboard featuring glassmorphism design, city search with dynamic suggestions, real-time temperature, condition summaries, and atmospheric metrics.",
      liveUrl: "https://nayzar00.github.io/weathy/",
      githubUrl: "https://github.com/NAYZAR00/weathy",
      tags: ["JavaScript", "Weather API", "CSS3", "Async/Await", "GitHub Pages"],
      featured: false,
      cvProject: false
    },
    {
      id: "todo-list",
      title: "Task Planner & To-Do",
      tagline: "Productivity Task Management App",
      description:
        "A clean and intuitive task management tool designed for day-to-day productivity with interactive state handling and local persistence.",
      githubUrl: "https://github.com/NAYZAR00/To-do-list",
      tags: ["JavaScript", "DOM Manipulation", "CSS3", "Local Storage"],
      featured: false,
      cvProject: false
    }
  ]
};

export default portfolioData;
