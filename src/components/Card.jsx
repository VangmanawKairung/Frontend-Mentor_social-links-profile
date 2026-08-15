import profileImage from "../assets/avatar-jessica.jpeg";

const Card = () => {
  const social_list = [
    {name :"GitHub", url:"#"},
    {name :"Frontend Mentor", url:"#"},
    {name :"LinkedIn", url:"#"},
    {name :"Twitter", url:"#"},
    {name :"Instagram", url:"#"},
  ];

  return (
    <main className="card">
      <img
        src={profileImage}
        alt="Jessica Randall"
        className="card__image"
      />
      <div className="card__content">
        <h1 className="card__title">Jessica Randall </h1>
        <p className="card__address">
          London, United Kingdom
        </p>
        <p className="card__description">
          "Front-end developer and avid reader."
        </p>
        <nav className="card__social-links" aria-label="Social Links">
          {social_list.map((social) => (
            <SocialLink key={social.name} social_name={social.name} social_link={social.url} />
          ))}
        </nav>
      </div>
    </main>
  );
};

export default Card;

const SocialLink = ({ social_name, social_link }) => {
  return (
    <a
      className="social__link"
      href={social_link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {social_name}
    </a>
  );
};
