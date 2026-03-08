import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="portfolio-container">
        <h1>Portfolio</h1>
        <div className="card-container">
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
            </div>
            <div className="feature-links-container">
              <Link
                className="feature-link"
                href={`https://portfolio-chi-blue-93.vercel.app/`}
              >
                View Website
              </Link>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-tag-container">
              <p className="feature-tag">Group Project</p>
              <p className="feature-tag">Team</p>
            </div>
            <div className="feature-details">
              <h2>Freelancer Project</h2>
              <p>Clients Post Jobs, Freelancers Apply!</p>
            </div>
            <div className="feature-img-container">
              <img src="FreelancerImg.png" alt="feature-img" />
            </div>
            <div className="feature-skills-container">
              <p className="feature-tag">NextJs</p>
              <p className="feature-tag">Motion</p>
              <p className="feature-tag">OpenAI</p>
              <p className="feature-tag">Ably</p>
              <p className="feature-tag">Clerk</p>
            </div>
            <div className="feature-links-container">
              <Link
                className="feature-link"
                href={`https://true-hire-mp.vercel.app/`}
              >
                View Website
              </Link>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-tag-container">
              <p className="feature-tag">Own Project</p>
              <p className="feature-tag">Solo</p>
            </div>
            <div className="feature-details">
              <h2>Shopper</h2>
              <p>Clothing Website Using Stripe</p>
            </div>
            <div className="feature-img-container">
              <img src="Shopper.png" alt="feature-img" />
            </div>
            <div className="feature-skills-container">
              <p className="feature-tag">React</p>
              <p className="feature-tag">NextJs</p>
              <p className="feature-tag">Stripe</p>
            </div>
            <div className="feature-links-container">
              <Link
                className="feature-link"
                href={`https://shopper-rho-rosy.vercel.app/`}
              >
                View Website
              </Link>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-tag-container">
              <p className="feature-tag">Own Project</p>
              <p className="feature-tag">Solo</p>
            </div>
            <div className="feature-details">
              <h2>The Fake Cake Company</h2>
              <p>Shopify Run Business Website</p>
            </div>
            <div className="feature-img-container">
              <img src="FakeCakePng.png" alt="feature-img" />
            </div>
            <div className="feature-skills-container">
              <p className="feature-tag">Shopify</p>
              <p className="feature-tag">Commercial</p>
            </div>
            <div className="feature-links-container">
              <Link
                className="feature-link"
                href={`https://thefakecakecompany.com/`}
              >
                View Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
