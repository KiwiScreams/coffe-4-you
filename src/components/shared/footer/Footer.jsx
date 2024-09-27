import "./Footer.css";
import footerImage from "../../../assets/images/footer-coffe.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleNavigateToAboutPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about-us");
  };
  const handleNavigateToMenuPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/menu");
  };
  const footerData = [
    {
      title: "Contact",
      items: [
        "Tbilisi, Pekini st. No. 43",
        "+995 558 19 55",
        "Tbilisi, Kostava st. No. 28",
        "+995 258 58 54",
        "---",
        "info@coffee4you.ge",
      ],
    },
    {
      title: "Company",
      items: [
        { text: "About us", onClick: handleNavigateToAboutPage },
        { text: "Vacancy" },
        { text: "Branches" },
      ],
    },
    {
      title: "Production",
      items: [
        { text: "Drinks" },
        { text: "Desserts", onClick: handleNavigateToMenuPage },
        { text: "Snacks" },
      ],
    },
    {
      title: "Help",
      items: [
        { text: "Instruction" },
        { text: "Help Center" },
        { text: "Problem with the site" },
      ],
    },
  ];
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-main">
            {footerData.map((section, index) => (
              <ul key={index}>
                <h3>{section.title}</h3>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} onClick={item.onClick}>
                    {item.text}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="footer-bottom">
            <ul>
              <li>Terms and Conditions</li>
              <li>license</li>
              <li>Privacy Policy</li>
            </ul>
            <p>2024© All rights reserved</p>
            <li className="pointer">
              Created by
              <a href="https://github.com/KiwiScreams" target="_blank" id="SLM">
                <span>S</span>
                <span>L</span>
                <span>M</span>
              </a>
            </li>
          </div>
        </div>
        <div className="footer-image">
          <img src={footerImage} alt="Coffe 4 You" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
