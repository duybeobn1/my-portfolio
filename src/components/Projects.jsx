import Raouf from "../images/ecom.webp";
import ProBox from "./ProBox";
import Frigo from "../images/frigo.png";
import Flower from "../images/flowers.png";
import Film from "../images/film.png";
import Blog from "../images/Blog.png";
import Chicken from "../images/chicken.png";
import Chat from "../images/Chat.png";
import Gym from "../images/gym.webp";
import Coin from "../images/coin.png";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Smart Frigo "
                date="(March 2021)"
                img={Frigo}
                description="(Demo not avaiable) Project to create a smart fridge to keep the food stay fresh longer using humidity capters, air capters, degree capters.... More detail in Github folder. "
                techno1="Java"
                techno2="Arduino"
                code="https://github.com/duybeobn1/Frigo"
                // demo="https://e-commerce-nine-murex.vercel.app/"
                scrollY="-71%"
                icon="❄"
                cName="reversed-proj"
              />
              <ProBox
                title="Hybrid Adventure"
                date="(Juin 2021)"
                img={Flower}
                description="(Demo not avaiable) Un logiciel pour établir le procès sous forme diagramme de Mendel où on peut obtenir une fleur de couleur choisie à partir d’une collection de couleur initiales. Ce programme est également utilisé pour les animaux."
                techno1="Java"
                techno2="Biology"
                code="https://github.com/duybeobn1/BreedingFlower"
                // demo="https://e-commerce-nine-murex.vercel.app/"
                scrollY="-71%"
                icon="🌻"
                cName="reversed-proj"
              />
              <ProBox
                title="Film Searching Tool"
                date="(September 2021)"
                img={Film}
                description="A searching tool using API to find all the films that fit the name the user provide using React. "
                techno1="React"
                techno2="SCSS"
                code="https://github.com/duybeobn1/film-searching"
                demo="https://film-searching-tool.vercel.app/"
                scrollY="-71%"
                icon="🎬"
                cName="reversed-proj"
              />
              <ProBox
                title="Mini Blog "
                date="January 2022"
                img={Blog}
                description="A mini blog app using basic React and Vanila CSS"
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/duybeobn1/blog-app"
                demo="https://streamable.com/5mswor"
                scrollY="-71%"
                icon="📚"
                cName="reversed-proj"
              />
              <ProBox
                title="Chat App"
                date="August 2022"
                img={Chat}
                description="A simple version of a chat application using Socket.io and ReactJS"
                techno1="ReactJS"
                techno2="SocketIO"
                code="https://github.com/duybeobn1/chat-app"
                demo="https://streamable.com/hz2ura"
                scrollY="-71%"
                icon="💬"
                cName="reversed-proj"
              />
              <ProBox
                title="Ecommerce"
                date="(December 2022)"
                img={Raouf}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/duybeobn1/e-commerce"
                demo="https://e-commerce-nine-murex.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />
              <ProBox
                title="Gymate"
                date="(March 2023)"
                img={Gym}
                description="A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals."
                techno1="React"
                techno2="Tailwind CSS"
                code="https://github.com/duybeobn1/gymnate"
                demo="https://gymnate.vercel.app/"
                scrollY="-71%"
                icon="🏋️"
                cName="reversed-proj"
              />
              <ProBox
                title="Chicken Invaders "
                date="May 2022"
                img={Chicken}
                description="(Demo not avaible) A rep version of a classic game Chicken Invaders 1 using C++ with library SDL2 as the biggest project of L2 at Universite Lyon 1 "
                techno1="C/C++"
                techno2="SDL/SDL2"
                code="https://github.com/duybeobn1/Chicken-Invaders"
                // demo="https://streamable.com/5mswor"
                scrollY="-71%"
                icon="🍗"
                cName="reversed-proj"
              />
              <ProBox
                title="CryptoX"
                date="(August 2023)"
                img={Coin}
                description="A website that allows users to search for information about various cryptocurrencies in real-time. The website is designed to provide users with accurate and up-to-date information about the price, market cap, trading volume, and other key metrics of cryptocurrencies."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/duybeobn1/cryptoX"
                demo="https://crypto-x-five.vercel.app/"
                scrollY="-71%"
                icon="💰"
                cName="reversed-proj"
              />
            </div>
          </div>
          {/* <div>
          {<h2 className="new-projects">New projects coming soon.. 🤠</h2>}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
