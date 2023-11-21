import { Link, NavLink } from "react-router-dom";
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <ul className="footer__sub-list">
                  <li>
                    <NavLink to="/summaries">Summaries</NavLink>
                  </li>
                  <li>
                    <NavLink to="/logo-design">Logo Design</NavLink>
                  </li>
                  <li>
                    <NavLink to="/websites">Websites</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/plans">Plans</NavLink>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
