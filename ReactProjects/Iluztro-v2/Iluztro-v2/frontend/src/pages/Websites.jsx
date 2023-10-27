import { Link } from "react-router-dom";
import example from "../assets/images/ex-site.webp";

const Websites = () => {
  return (
    <>
      <div className="grid container">
        <section className="left page">
          <h1>Website Creation</h1>
          <h2>Online Presence</h2>
          <p>Our Website Creation service recognizes the importance of having an online presence for any business in today's world. We aim to simplify the process and create a website that enhances the customer experience from start to finish.</p>
          <h2>Custom Website</h2>
          <p>
            Our custom website designs use HTML, CSS, and JavaScript to bring your vision to life, with no restrictions on hosting platforms. Once we've completed the design, you'll have full access to the code, enabling you to make any changes you
            want.
          </p>
          <h2>Revisions</h2>
          <p>
            We understand that building a website can be complex and overwhelming. That's why we offer a 30-day guarantee to ensure a seamless transition. During this period, we welcome any stylistic changes you'd like to see. If you require
            long-term support, we have a plan for that too.
          </p>
          <Link
            to="/plans"
            className="large-button">
            View Options
          </Link>
        </section>
        <div className="ex-site right">
          <a href="https://back2new.netlify.app/index.html">
            <img
              src={example}
              alt="An example of a bbq mobile site."
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Websites;
