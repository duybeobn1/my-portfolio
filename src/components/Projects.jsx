import Raouf from "../images/ecom.webp";
import ProBox from "./ProBox";
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
