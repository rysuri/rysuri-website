import ProjectCard from "../components/ProjectCard";
import "../css/pages/Porfolio.css";

// Project media imports (screenshots and thumbnails from your assets)
import calderonThumb from "../assets/media/calderon-thumbnail.webp";
import cupncoThumb from "../assets/media/cupnco.webp";
import unlvThumb from "../assets/media/unlvclassthumbnail.webp";
import sonicThumb from "../assets/media/sonicai-sc.webp";
import professorBThumb from "../assets/media/professorbdesc.webp";
import northboundThumb from "../assets/media/northbound-1.webp";

const SAMPLE = [
  {
    id: 1,
    title: "Calderon Law Website",
    description:
      "Designed, built and maintain the Calderon Law website using WordPress — responsible for content updates, performance tuning, and UI improvements.",
    image: calderonThumb,
    technologies: ["WordPress", "PHP", "HTML", "CSS"],
    website: "#",
    source: "#",
  },
  {
    id: 2,
    title: "CupnCoShop",
    description:
      "E-commerce storefront for premium coffee accessories. Theme customization, product configuration and ongoing maintenance on Shopify.",
    image: cupncoThumb,
    technologies: ["Shopify", "Liquid", "HTML", "CSS"],
    website: "#",
    source: "#",
  },
  {
    id: 3,
    title: "UNLV Class Alert",
    description:
      "Serverless app that checks UNLV class availability and notifies students via SMS. Useful for grabbing open seats quickly.",
    image: unlvThumb,
    technologies: ["Python", "Twilio", "Serverless"],
    website: "#",
    source: "#",
  },
  {
    id: 4,
    title: "Sonic Drive-Thru — AI Assistant",
    description:
      "AI-powered drive-thru assistant prototype that demonstrates conversational ordering workflows and automated responses using OpenAI.",
    image: sonicThumb,
    technologies: ["OpenAI", "Node.js", "HTML", "CSS"],
    website: "#",
    source: "#",
  },
  {
    id: 5,
    title: "Professor B — AI Discord Bot",
    description:
      "An AI Discord bot that answers user questions and provides context-aware replies in real time using OpenAI and Discord.py.",
    image: professorBThumb,
    technologies: ["Python", "OpenAI", "Discord.py"],
    website: "#",
    source: "#",
  },
  {
    id: 6,
    title: "Northbound — Web Slot Machine",
    description:
      "Interactive browser-based slot machine with randomized outcomes, a responsive UI and replayable mechanics.",
    image: northboundThumb,
    technologies: ["HTML", "CSS", "JavaScript"],
    website: "#",
    source: "#",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="header">
        <div className="name">
          <p>PORTFOLIO</p>
        </div>
        <h1>Featured Projects</h1>
      </div>

      <div className="showcase">
        {SAMPLE.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
