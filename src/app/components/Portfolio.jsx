import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h1>Portfolio</h1>
        <div className="feature-card">
          <div className="feature-tag-container">
            <p className="feature-tag">Own Project</p>
            <p className="feature-tag">Solo</p>
          </div>
          <div className="feature-details">
            <h2>Résumé Project</h2>
            <p>Learn About Me, My Skills & See My Work</p>
          </div>
          <div className="feature-img-container">
            <img src="PortfolioImg.png" alt="feature-img" />
          </div>
          <div className="feature-skills-container">
            <p className="feature-tag">React</p>
            <p className="feature-tag">NextJs</p>
            <p className="feature-tag">Motion</p>
          </div>
          <div className="feature-links-container">
            <Link className="feature-link" href={`/`}>
              View Website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
