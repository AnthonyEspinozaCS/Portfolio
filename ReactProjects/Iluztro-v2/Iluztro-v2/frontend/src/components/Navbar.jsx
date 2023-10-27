import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import logo from "../assets/images/logo.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import logoutArrow from "../assets/images/logout.svg";
import divider from "../assets/images/triangle.svg";
import profile from "../assets/images/profile.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleClick = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header className="header container">
        <div className="header__logo">
          <Link to="/">
            <img
              src={logo}
              alt="Octopus holding a brush."
              className="logo"
            />
          </Link>
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={toggle ? "true" : "false"}
          onClick={handleClick}>
          <span className="sr-only">Menu</span>
        </button>

        <nav className="text-black">
          <ul
            id="primary-navigation"
            className="primary-navigation"
            data-visible={toggle ? "true" : "false"}>
            <li>
              <NavLink
                to="/"
                className="nav__link "
                onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="top-nav">
              <div>
                <h2 className="top-nav__title">Services</h2>
              </div>
              <div className="nav__divider">
                <img
                  src={divider}
                  alt="blue arrow."
                />
              </div>
              <div className="sub-nav">
                <ul>
                  <li>
                    <NavLink
                      to="/summaries"
                      className="sub-nav__link"
                      onClick={handleClick}>
                      Summaries
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/logo-design"
                      className="sub-nav__link"
                      onClick={handleClick}>
                      Logo Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/websites"
                      className="sub-nav__link"
                      onClick={handleClick}>
                      Websites
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/plans"
                className="nav__link"
                onClick={handleClick}>
                Plans
              </NavLink>
            </li>

            {!user && (
              <li>
                <Link
                  to="/login"
                  className="nav__link">
                  Login
                </Link>
              </li>
            )}

            {user && (
              <>
                <li>
                  <Link
                    to={user && user.is_admin ? "/admin" : "/dashboard"}
                    className="nav__flex">
                    <img
                      src={profile}
                      alt="Outline of profile."
                      className="primary-navigation__icon"
                    />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="logout__button">
                    <img
                      src={logoutArrow}
                      alt="arrow pointing at a door."
                    />
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
