import AboutImg from "../images/about-img.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A CS student <br /> based in Lyon, France
                📍
              </h4>
              <p>
              I am  a passionate and driven Computer Science student with a relentless curiosity for technology and its 
              transformative power. Currently pursuing my License 3 in Computer Science at Universite Lyon 1, I am dedicated to pushing the boundaries of what is possible in the 
              world of computing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
