import "./pages.css";
import example from "../assets/images/example_summary.jpg";
import { Link } from "react-router-dom";

const Summaries = () => {
  return (
    <>
      <div
        className="grid container"
        id="sum">
        <section className="left page">
          <h1>Executive Summaries</h1>
          <h2>Best Foot Forward</h2>
          <p>
            Our Executive Summary service helps companies put their best foot forward in meetings with potential investors and banks. We take the keypoints and operational constraints of your business and turn them into an elegant and professional
            executive summary design that makes a lasting impression.
          </p>
          <h2>Custom Design</h2>
          <p>Our designs are custom-made and not based on generic templates found online. We prioritize your satisfaction and work closely with you to ensure that your executive summary conveys your business information clearly and concisely.</p>
          <h2>Revisions</h2>
          <p>Our pricing plans include revisions and proofs, so we can work together to get the design just right. Our ultimate goal is to help you create an executive summary that leaves an amazing first impression.</p>
          <Link
            to="/plans"
            className="large-button">
            View Options
          </Link>
        </section>
        <div className="right">
          <img
            decoding="async"
            src={example}
            className="ex-summary"
            alt="Mock executive summary."
          />
        </div>
      </div>
    </>
  );
};

export default Summaries;
