import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header-about-container">
        <Link href={`/`}>About</Link>
        <Link href={`/`}>Portfolio</Link>
        <Link href={`/AdamBoothCV.pdf`}>Résumé</Link>
      </div>
      <div className="header-img-container">
        <img
          src="./SoftwareDevIMG.png"
          alt="software-developer-img"
          className="header-img"
        />
      </div>
      <div className="header-socials-container">
        <Link href={`/`}>Socials</Link>
        <Link href={`/`}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/light-on--v1.png"
            alt="light-on--v1"
            className="lightbulb"
          />
        </Link>
      </div>
    </div>
  );
}
