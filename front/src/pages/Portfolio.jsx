import ProjectCard from "../components/ProjectCard";
import "../css/pages/Porfolio.css";

// Project media imports (screenshots and thumbnails from your assets)
import calderonThumb from "../assets/media/calderon-thumbnail.webp";
import cupncoThumb from "../assets/media/cupnco.webp";
import unlvThumb from "../assets/media/unlvchecker-2.webp";
import sonicThumb from "../assets/media/sonicai-sc.webp";
import professorBThumb from "../assets/media/pbdesc.webp";
import northboundThumb from "../assets/media/northbound-1.webp";
import portfolio from "../assets/media/portfolio-sc.png";

const SAMPLE = [
  {
    id: 1,
    title: "Calderon Law Website",
    description:
      "Developed and maintained a professional React website for a local law firm, integrating AWS Amplify for hosting, optimizing SEO, accessibility, and mobile responsiveness to enhance user experience.",
    image: calderonThumb,
    technologies: ["React.js", "AWS", "HTML", "CSS"],
    website: "https://calderonlaw.com",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "Modern portfolio website showcasing projects and skills. Built with React Router for navigation, GSAP for animations, and features a responsive design with contact form integration.",
    image: portfolio,
    technologies: ["React.js", "Node.js", "GSAP", "MongoDB", "AWS"],
    website: "https://rysuri.com",
    source: "https://github.com/rysuri/rysuri-website",
  },
  {
    id: 2,
    title: "CupnCoShop",
    description:
      "E-commerce storefront for premium coffee accessories. Theme customization, product configuration and ongoing maintenance on Shopify.",
    image: cupncoThumb,
    technologies: ["Shopify", "HTML", "CSS"],
    website: "https://cupncoshop.com",
  },
  {
    id: 3,
    title: "UNLV Class Alert",
    description:
      "Serverless app that checks UNLV class availability and notifies students via SMS. Useful for grabbing open seats quickly.",
    image: unlvThumb,
    technologies: ["Python", "Beautiful Soup", "Selenium"],
    showcase: "https://www.youtube.com/watch?v=fGZCPPwg4sg",
    source: "https://github.com/rysuri/unlvclasschecker",
  },
  {
    id: 4,
    title: "Sonic Drive-Thru — AI Assistant",
    description:
      "AI-powered drive-thru assistant prototype that demonstrates conversational ordering workflows and automated responses using OpenAI.",
    image: sonicThumb,
    technologies: ["OpenAI", "Node.js", "HTML", "CSS"],
    showcase: "https://www.youtube.com/watch?v=wvswuT8gdro",
    source: "https://github.com/rysuri/SonicMenu",
  },
  {
    id: 5,
    title: "Professor B — AI Discord Bot",
    description:
      "An AI Discord bot that answers user questions and provides context-aware replies in real time using OpenAI and Discord.py.",
    image: professorBThumb,
    technologies: ["Python", "OpenAI", "Discord.py"],
    website: "https://discord.com/invite/QZqghTe2k8",
  },

  {
    id: 7,
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
