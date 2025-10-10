import React from "react";
import "../css/components/ProjectCard.css";

function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  website,
  source,
}) {
  return (
    <article className="card-container project-show">
      <div className="gallery-container">
        <img src={image} alt={title} className="card-img" />
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        {technologies && technologies.length > 0 && (
          <div className="tech-list" aria-hidden>
            {technologies.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="card-actions">
          {website && (
            <a
              className="card-btn"
              href={website}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          )}
          {source && (
            <a
              className="card-btn card-btn--muted"
              href={source}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default React.memo(ProjectCard);
