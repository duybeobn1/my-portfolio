import { desc } from "framer-motion/client";
import { useTranslation } from 'react-i18next';

function ProjectsPage() {
  const { t } = useTranslation();
let projects = [
    {
      id: 1,
      title: "Portfolio Website",
      key: "portfolioWebsite",
      description:
        "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and interactive elements.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/duybeobn1/my-portfolio",
      live: "https://my-portfolio-omega-red.vercel.app/",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      key: "ecommercePlatform",
      description:
        "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/duybeobn1/e-commerce",
      live: "https://e-commerce-nine-murex.vercel.app/",
    },
    {
      id: 4,
      title: "Smart Fridge (March 2021)",
      key: "smartFridge",
      description:
        "A smart refrigerator prototype that extends food freshness by monitoring its environment. It integrates humidity, air quality, and temperature sensors for real-time data collection. Implemented with Arduino and modular Java/C++ code for easy customization and scalability.",
      technologies: ["Arduino", "C++", "Sensors", "Embedded Systems", "IoT"],
      github: "https://github.com/duybeobn1/Frigo",
      live: "#",
    },
    {
      id: 5,
      title: "Hybrid Adventure (June 2021) ",
      key: "hybridAdventure",
      description:
        "A genetics simulation program that uses Mendelian inheritance to plan flower or animal breeding. Choose a target color outcome and trace back the breeding process from an initial color set. Built in Java with a focus on clear genetic visualization.",
      technologies: ["Java", "Simulation", "Genetics", "Algorithm Design"],
      github: "https://github.com/duybeobn1/BreedingFlower",
      live: "#",
    },
    {
      id: 6,
      title: "Film Searching Tool (September 2021)",
      key: "filmSearchingTool",
      description:
        "A minimalist web application to browse and search for movies using the TMDB API. Users can explore Top Rated, Upcoming, and Popular films, search by title, and view posters with essential info. Built for speed and clarity using modern front-end tools.",
      technologies: [
        "React.js",
        "Axios",
        "TMDB API",
        "Movie Search",
        "Front-end",
      ],
      github: "https://github.com/duybeobn1/film-searching",
      live: "https://film-searching-tool.vercel.app/",
    },
    {
      id: 7,
      title: "Mini Blog App (January 2022 - Deprecated)",
      key: "miniBlogApp",
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
      key: "chickenInvadersClone",
      description:
        "A classic 2D space shooter game inspired by Chicken Invaders. Built from scratch in Java using the Java Swing library, the game features waves of enemies, projectile mechanics, collision detection, and score tracking. Designed for educational purposes and to reinforce object-oriented programming concepts.",
      technologies: ["C/C++", "SDL/SDL2"],
      github: "https://github.com/duybeobn1/Chicken-Invaders",
      live: "#",
    },
    {
      id: 9,
      title: "Chat App (August 2022 - Deprecated)",
      key: "chatApp",
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
      key: "gymnate",
      description:
        "A responsive and modern fitness web app that helps users discover workout programs and gyms. Designed with a focus on clean UI/UX and mobile accessibility, it offers category-based filtering, animated transitions, and an engaging landing page to promote healthy lifestyles.",
      technologies: ["React.js", "Tailwind CSS", "RapidAPI", "Framer Motion"],
      github: "https://github.com/duybeobn1/gymnate",
      live: "https://gymnate.vercel.app/",
    },
    {
      id: 11,
      title: "CryptoX - Crypto Tracker (May 2023)",
      key: "cryptoXTracker",
      description:
        "A modern and responsive web application that tracks real-time cryptocurrency prices and market statistics. Users can view detailed charts, search for specific coins, and access key metrics such as price, market cap, and 24h changes. Designed to be fast, mobile-friendly, and visually appealing.",
      technologies: ["React.js", "CoinGecko API", "Chart.js", "Tailwind CSS"],
      github: "https://github.com/duybeobn1/cryptoX",
      live: "https://crypto-x-five.vercel.app/",
    },
    {
      id: 12,
      title: "Procedural Animation & Terrain Generation in Unity (March 2024)",
      key: "unityProceduralProject",
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
      key: "airmiumSystem",
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
      github: "#",
      live: "#",
    },
    {
      id: 14,
      title:
        "Edge Detection and Gradient Analysis in C++ with Qt and OpenCV (2024)",
      key: "edgeDetectionProject",
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
      github: "https://github.com/duybeobn1/ImageEdgeDetection",
      live: "#",
    },
    {
      id: 15,
      title: "Mini Vision Transformer for restoring images (2025)",
      key: "visionTransformer",
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
      github: "https://github.com/duybeobn1/Mini-Vision-Transformer",
      live: "#",
    },
    {
      id: 16,
      title:
        "Smart Cooking Assistant – Recipe & Ingredient Tracker (In Progress)",
      key: "cookingAssistant",
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
      github: "https://github.com/duybeobn1/cook_backend ",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-minimal text-default">
      <div className="max-w-6xl mx-auto">
        {/* Title with highlight block */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="hl-bar hl-yellow">{t('projects.title')}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mt-4 mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Lined list */}
        <div className="row-list">
          {projects
            .filter(project => !project.title.includes('Deprecated'))
            .map((project, idx) => {
              const accents = ['hl-pink','hl-yellow','hl-blue','hl-green'];
              const accent = accents[idx % accents.length];
              return (
                <div key={project.id} className="row-item">
                  {/* Title */}
                  <div className="row-title text-xl">
                    <span className={`hl-bar ${accent}`}>{project.title}</span>
                    <div className="row-tech">
                      {project.technologies.join(' · ')}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="row-desc leading-relaxed">
                    {project.key ? t(`projects.descriptions.${project.key}`) : project.description}
                  </div>

                  {/* Actions */}
                  <div className="flex items-start gap-3 justify-end">
                    <a href={project.github} className="link-circle" target="_blank" rel="noopener noreferrer">
                      {t('projects.github')}
                    </a>
                    {project.live === '#'
                      ? <span className="link-circle opacity-60 cursor-not-allowed">{t('projects.unavailable')}</span>
                      : <a href={project.live} className="link-circle" target="_blank" rel="noopener noreferrer">{t('projects.liveDemo')}</a>
                    }
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
