import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="footer container bg-white">
          <section className="left-side">
            <div>
              <Link to="/">
                <img
                  src={logo}
                  className="logo"
                  alt="Iluztró squid logo."
                />
              </Link>
              <p className="">
                Communicate. Create. Deliver.
                <br />
                Iluztró - your partner in success.
              </p>
            </div>
          </section>
          <section className="right-side">
            <ul className="footer-list">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/plans">Plans</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
