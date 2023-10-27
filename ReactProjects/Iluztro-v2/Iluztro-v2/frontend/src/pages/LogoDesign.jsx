import { Link } from "react-router-dom";
import "./pages.css";
import example from "../assets/images/bbq_logo.svg";
import Logo from "../components/Logo";

const LogoDesign = () => {
  return (
    <>
      <div className="grid container">
        <section className="left page">
          <h1>Logo Design</h1>
          <h2>Original Design</h2>
          <p>
            Our Logo Design service focuses on creating a logo that reflects your brand's personality, aligns with your business identity, and grabs the attention of potential customers. Our designs are completely original, and we work closely with
            you to bring your vision and passion to life.
          </p>
          <h2>Revisions</h2>
          <p>
            We understand that the creative process can involve multiple iterations, and we offer revisions and proofs at every crucial design stage. The number of revisions and proofs varies depending on the plan you choose, and you can learn more
            by clicking below.
          </p>
          <Link
            to="/plans"
            className="large-button">
            View Options
          </Link>
        </section>
        <div className="right">
          <Logo image={example} />
        </div>
      </div>
    </>
  );
};

export default LogoDesign;
