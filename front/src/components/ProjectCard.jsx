import { Link } from "react-router-dom";
import "../css/components/ProjectCard.css";

function ProjectCard() {
  return (
    <>
    <div className="card-container">
      <img src="https://picsum.photos/1920/1080" alt="Card image" className="card-img"/>
      <h1 className="card-title">Card Title</h1>
      <p className="card-description">Hello This is a long sentence. This is where the card description would be. You can add more details about the card here</p>
      <a className="card-btn"href="cardPage">Learn More</a>
    </div>
    </>
  );
}

export default ProjectCard;
