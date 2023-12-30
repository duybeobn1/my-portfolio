import Raouf from "../images/ecom.webp";
import ProBox from "./ProBox";
import Frigo from "../images/frigo.png"
import Flower from "../images/flowers.png"
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
                title="Ecommerce"
                date="(December 2023)"
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
              
            </div>
          </div>
          { <h2 className="new-projects">New projects coming soon.. 🤠</h2> }
        </div>
      </section>
    </>
  );
}

export default Projects;
