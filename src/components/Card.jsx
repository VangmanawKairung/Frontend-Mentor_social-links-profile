import profileImage from "../assets/avatar-jessica.jpeg";

const Card = () => {
  const social_list = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <main className="card">
      <img
        src={profileImage}
        alt="Card profile image of Jessica"
        className="card__image"
      />
      <div className="card__content">
        <h1 className="card__title">
          Jessica Randall{" "}
        </h1>
          <p className="card__address"><br/>London, United Kingdom</p>
        <p className="card__description">
          "Front-end developer and avid reader."
        </p>
        <div className="card__social-links">
            {social_list.map((social_name) => (<SocialLink social_name={social_name} />))}
        </div>
      </div>
    </main>
  );
};

export default Card;

const SocialLink = ({ social_name }) => {
  return (

      <button className="social__btn">{social_name}</button>
  );
};
