import ProjectCard from "../components/ProjectCard";
import "../css/pages/Porfolio.css";

function Portfolio() {
  return (
    <>
    <div className="portfolio">
      <div className="header">
        <div className="name"><p>MY PORTFOLIO</p></div>
        <h1>The proof is in the pudding.</h1>
      </div>

      <div className="showcase">
        <ProjectCard className="card"/>
        <ProjectCard className="card"/>
        <ProjectCard className="card"/>
        <ProjectCard className="card"/>

        <ProjectCard className="card"/>
      </div>
    </div>
    </>
  );
}

export default Portfolio;
