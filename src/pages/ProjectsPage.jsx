import { desc } from "framer-motion/client";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/my-portfolio",
      live: "https://my-portfolio-omega-red.vercel.app/",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/e-commerce",
      live: "https://e-commerce-nine-murex.vercel.app/",
    },
    {
      id: 4,
      title: "Smart Fridge (March 2021)",
      description:
        "A smart refrigerator prototype that extends food freshness by monitoring its environment. It integrates humidity, air quality, and temperature sensors for real-time data collection. Implemented with Arduino and modular Java/C++ code for easy customization and scalability.",
      technologies: ["Arduino", "C++", "Sensors", "Embedded Systems", "IoT"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/Frigo",
      live: "#",
    },
    {
      id: 5,
      title: "Hybrid Adventure (June 2021) ",
      description:
        "A genetics simulation program that uses Mendelian inheritance to plan flower or animal breeding. Choose a target color outcome and trace back the breeding process from an initial color set. Built in Java with a focus on clear genetic visualization.",
      technologies: ["Java", "Simulation", "Genetics", "Algorithm Design"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/BreedingFlower",
      live: "#",
    },
    {
      id: 6,
      title: "Film Searching Tool (September 2021)",
      description:
        "A minimalist web application to browse and search for movies using the TMDB API. Users can explore Top Rated, Upcoming, and Popular films, search by title, and view posters with essential info. Built for speed and clarity using modern front-end tools.",
      technologies: [
        "React.js",
        "Axios",
        "TMDB API",
        "Movie Search",
        "Front-end",
      ],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/film-searching",
      live: "https://film-searching-tool.vercel.app/",
    },
    {
      id: 7,
      title: "Mini Blog App (January 2022 - Deprecated)",
      description:
        "An early blogging app built using React 16 and Draft.js, demonstrating my foundational understanding of SPA routing, editor state management, and custom render pipelines. Users could write, format, and view blog entries dynamically within a single-page interface.",
      technologies: [
        "React.js",
        "Draft.js",
        "Blog Editor",
        "Routing",
        "State Management",
      ],
      github: "https://github.com/duybeobn1/blog-app",
      live: "#",
    },
    {
      id: 8,
      title: "Chicken Invaders Clone (March 2022)",
      description:
        "A classic 2D space shooter game inspired by Chicken Invaders. Built from scratch in Java using the Java Swing library, the game features waves of enemies, projectile mechanics, collision detection, and score tracking. Designed for educational purposes and to reinforce object-oriented programming concepts.",
      technologies: ["C/C++", "SDL/SDL2"],
      github: "https://github.com/duybeobn1/Chicken-Invaders",
      live: "#",
    },
    {
      id: 9,
      title: "Chat App (August 2022 - Deprecated)",
      description:
        "A basic real-time chat application built with React, Node.js, Socket.IO, and Express to explore WebSocket communication. It supported multiple rooms and real-time message exchange. This project was an early experiment to understand client-server architecture and bidirectional communication.",
      technologies: [
        "React.js",
        "Node.js",
        "Socket.IO",
        "Express",
        "Real-time Chat",
      ],
      github: "https://github.com/duybeobn1/chat-app",
      live: "#",
    },
    {
      id: 10,
      title: "Gymnate (March 2023)",
      description:
        "A responsive and modern fitness web app that helps users discover workout programs and gyms. Designed with a focus on clean UI/UX and mobile accessibility, it offers category-based filtering, animated transitions, and an engaging landing page to promote healthy lifestyles.",
      technologies: ["React.js", "Tailwind CSS", "RapidAPI", "Framer Motion"],
      github: "https://github.com/duybeobn1/gymnate",
      live: "https://gymnate.vercel.app/",
    },
    {
      id: 11,
      title: "CryptoX - Crypto Tracker (May 2023)",
      description:
        "A modern and responsive web application that tracks real-time cryptocurrency prices and market statistics. Users can view detailed charts, search for specific coins, and access key metrics such as price, market cap, and 24h changes. Designed to be fast, mobile-friendly, and visually appealing.",
      technologies: ["React.js", "CoinGecko API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/duybeobn1/cryptoX",
      live: "https://crypto-x-five.vercel.app/",
    },
    {
      id: 12,
      title: "Procedural Animation & Terrain Generation in Unity (March 2024)",
      description:
        "An advanced Unity project showcasing procedural animation and map generation techniques to create immersive and dynamic game environments. The project includes humanoid and non-human creature animations, reactive rigging systems, and terrain generation logic that produces a unique game map every session. It also integrates advanced gameplay mechanics like boss behavior and procedural weapon animation for enriched interactivity.",
      technologies: [
        "Unity (2022.3 LTS)",
        "C#",
        "Mixamo",
        "Procedural Map Generation",
        "Rigging / Animation Controller",
        "Polygon Assets (Low Poly)",
      ],
      github: "https://github.com/duybeobn1/UnityProject",
      live: "#",
    },
    {
      id: 13,
      title: "Stage Airmium - Air Treatment System (April - August 2024)",
      description:
        "Analyzed data workflows and user requirements, Designed and implemented a secure, scalable system for data historization and quality control, Developed web interfaces for accessing and visualizing real-time air treatment data, Proposed solutions for backup strategies and mobile/web accessibility",
      technologies: [
        "Angular",
        "Tailwind CSS",
        "Spring Boot",
        "PostgreSQL",
        "FastAPI",
        "Python",
        "OCR",
        "Docker",
        "REST APIS",
        "Git",
        "Data historization",
        "access control",
        "authentication",
      ],
      image: "/api/placeholder/400/250",
      github: "#",
      live: "#",
    },
    {
      id: 14,
      title:
        "Edge Detection and Gradient Analysis in C++ with Qt and OpenCV (2024)",
      description:
        "This project implements advanced edge detection techniques using differential operators (Prewitt, Sobel, Kirsch) combined with thresholding and refinement processes to highlight contours in images. ",
      technologies: [
        "C++",
        "Qt",
        "OpenCV",
        "Image Processing",
        "Edge Detection",
        "Gradient Analysis",
      ],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/ImageEdgeDetection",
      live: "#",
    },
    {
      id: 15,
      title: "Mini Vision Transformer for restoring images (2025)",
      description:
        "This project explores the capabilities of Vision Transformers (ViTs) by segmenting images into fixed-size patches and attempting to reconstruct the original image using attention-based mechanisms. By experimenting with small patch permutations (e.g., 4×4), the model evaluates whether global context can be preserved and restored from shuffled or occluded image segments. The goal is to investigate the effectiveness of transformer attention in recovering image structure, paving the way for applications in image inpainting, resizing, or restoration.",
      technologies: [
        "Python",
        "PyTorch",
        "Vision Transformers",
        "Image Processing",
        "Machine Learning",
        "Mathplotlib",
        "NumPy",
        "Torchvision",
      ],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/Mini-Vision-Transformer",
      live: "#",
    },
    {
      id: 16,
      title:
        "Smart Cooking Assistant – Recipe & Ingredient Tracker (In Progress)",
      description:
        "This web application is designed to help users manage their cooking more efficiently by combining intelligent ingredient tracking with personalized recipe management. Users can store ingredients with expiration dates, create and plan meals, and receive recipe suggestions based on what they have at home. It also supports OCR-based scanning of food labels or handwritten notes, helping digitize and organize cooking data seamlessly.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "OCR",
        "Tailwind CSS",
        "CI/CD",
        "Docker",
        "Git",
        "REST APIs",
        "Authentication",
        "PostgreSQL",
        "Spring Boot",
      ],
      image: "/api/placeholder/400/250",
      github: "https://github.com/duybeobn1/cook_backend ",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-indigo-100 flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">
                  Project Image
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm rounded-full border border-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-2">
                  <a
                    href={project.github}
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-2 px-4 rounded-md hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg"
                  >
                    GitHub
                  </a>
                  {project.live === "#" ? (
                    <span
                      className="flex-1 bg-gray-300 text-gray-600 text-center py-2 px-4 rounded-md cursor-not-allowed shadow-inner"
                      title="Live demo not available"
                    >
                      Unavailable
                    </span>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-2 px-4 rounded-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
