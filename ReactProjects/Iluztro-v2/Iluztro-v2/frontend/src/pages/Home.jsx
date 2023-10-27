import { Link } from "react-router-dom";
import ex1 from "../assets/images/ex-logo.png";
import ex2 from "../assets/images/ex-logo-2.png";
import ex3 from "../assets/images/ex-logo-3.png";
import quotes from "../assets/images/quotes.svg";
import { useEffect, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(1);
  const positions = ["left", "middle", "right"];
  const order = ["order-1", "order-2", "order-3"];

  useEffect(() => {
    const interval = setInterval(() => {
      if ((count + 1) % 4 === 0) setCount(1);
      else setCount(count + 1);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="bg-dark relative">
        <section className="hero container">
          <h1 className="landing-text text-white bold  fs-header-l">Set your business up for success</h1>
          <p className="text-white  ">Our business is focused on providing you with the tools to get your business started. All in one convenient place.</p>
          <a
            href="#learn-more"
            className="large-button">
            Learn More
          </a>
          <div className="logo-row flex">
            <img
              data-position={positions[(count + 2) % 3]}
              className={`logo-animation ${order[(count + 2) % 3]}`}
              src={ex1}
              alt="Letter M on a black background."
            />
            <img
              data-position={positions[count % 3]}
              className={`logo-animation ${order[count % 3]}`}
              src={ex2}
              alt="Logo for a bbq company."
            />
            <img
              data-position={positions[(count + 1) % 3]}
              className={`logo-animation ${order[(count + 1) % 3]}`}
              src={ex3}
              alt="Logo for a catering company."
            />
          </div>
        </section>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <section
        className="page__content"
        id="learn-more">
        <article className="container page__article">
          <h2 className=" fs-header-m">Every business needs a strong foundation.</h2>
          <p className=" ">From logos to websites to Executive Summaries. We work with you to help bring your vision to life on the web and on text.</p>
        </article>

        <div className="three-section container">
          <article className="three-section__card">
            <h3 className=" fs-600">Executive Summaries</h3>
            <p className=" ">Executive summaries that are professional and eye-catching. We create custom designs that encorporate the feel of the business and highlight key information for potential investors and banks.</p>
            <Link
              className="large-button text-white letter-spacing-3"
              to="/summaries">
              Learn More
            </Link>
          </article>
          <article className="three-section__card">
            <h3 className=" fs-600">Logo Design</h3>
            <p className=" ">Iconic custom logo designs with revisions and proofs at every step to ensure we capture the essence of your business.</p>
            <Link
              className="large-button text-white letter-spacing-3"
              to="/logo-design">
              Learn More
            </Link>
          </article>
          <article className="three-section__card">
            <h3 className=" fs-600">Website Creation</h3>
            <p className=" ">Custom websites with options to fit your business' needs. We create elegant and detailed designs to drive attention to your business and ensure you have an online presence.</p>
            <Link
              className="large-button text-white letter-spacing-3"
              to="/websites">
              Learn More
            </Link>
          </article>
        </div>

        <section className="testimonial">
          <div className="shape">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"></path>
            </svg>
          </div>
          <h2 className="testimonial__header  fs-header-m">Testimonials</h2>
          <section className="testimonial__section  container">
            <article className="testimonial__card">
              <img
                src={quotes}
                className="quotation"
                alt="Blue quotation marks"
              />
              <p className="">
                "Iluztró has been great. They were accommodating to our needs and budget, while also doing a great job. They are literally minutes away. Whether you email them at 5 in the morning and 11 at night, they emails you back within 10 to 30
                minutes."
              </p>
              <p className=" text-accent-2 right">- Cheers, Yuan</p>
            </article>
            <article className="testimonial__card">
              <img
                src={quotes}
                className="quotation"
                alt="Blue quotation marks"
              />
              <p className="">
                "Iluztró went above and beyond in helping us in more ways than I can count. I had a vision of our logo that they worked tirelessly on, going through amendment after amendment, and they wouldn't give up until they knew I was satisfied.
                They created an absolutely beautiful Executive Summary for my partners and I. They are extremely talented, very responsive, very reasonably priced for the value they bring to the table, and they pour their heart and soul into their
                craft and it shows through and through. They came highly recommended from a colleague of mine that I happen to have a great deal of respect for, and I feel very fortunate to have found them and couldn't be happier with everything
                they've done for us."
              </p>
              <p className=" text-accent-2 right">- Can't thank you enough Iluztró, Norman</p>
            </article>
            <article className="testimonial__card">
              <img
                src={quotes}
                className="quotation"
                alt="Blue quotation marks"
              />
              <p className="">
                "Working with Iluztró was an excellent choice for my company because crafting a high quality Executive Summary requires the right amount of time and knowledge. This was something that would have an been an inefficient use of my time.
                Iluztró was able to make me an excellent Executive Summary that is one of the first things any potential clients, lender, or investor will see. They created a naturally flowing summary with excellent data and analytics. The quality of
                your Executive Summary sets the foundation for your company. We are consistently given more attention once a lender or professional sees our summary. This highlights how powerful it can be to opening doors and getting you in front of
                the right people. A no-brainer to me for any company."
              </p>
              <p className=" text-accent-2 right">- Best, Karandeep</p>
            </article>
            <article className="testimonial__card">
              <img
                src={quotes}
                className="quotation"
                alt="Blue quotation marks"
              />
              <p className="">
                "Iluztró are absolute rockstars. Period. I was totally lost when it came to putting together an executive summary. I knew how important it was and wanted to do it right and not waste time in process. Iluztró guided me through the
                process step-by-step making it so easy. All I had to do was send her basic information and They took care of the rest. The best part was that it was totally outsourced so I could focus on contacting banks and potential sellers.
                Iluztró was extremely patience with me when it came to logo creation or tweaks to the executive summary. Honestly, I was blown away with the final product. Simple, elegant, easy to read yet creative. They added tasteful, descriptive
                graphics that brought the summary to life and impresses anybody who reads it. The executive summary Iluztró did for me is an instant “door opener” when it comes to recruiting board members; getting callbacks from banks and
                communicates to a sellers that you are serious and know what you are doing. Iluztró's communication, work ethic, turnaround time and professionalism are world-class. I can not recommend them enough."
              </p>
              <p className=" text-accent-2 right">- Regards, Dean</p>
            </article>
            <article className="testimonial__card">
              <img
                src={quotes}
                className="quotation"
                alt="Blue quotation marks"
              />
              <p className="">
                Iluztró helped create an executive summary for my business, and I was thoroughly impressed by their outstanding product. Iluztró's ability to condense complex information into a clear and concise summary is truly remarkable. Their
                executive summary was not only well-written, but also extremely organized and easy to follow. It effectively conveyed the key points of the business plan, highlighting the most important aspects and providing a comprehensive overview.
                What I found most impressive was Iluztró's attention to detail. Every sentence in the summary was carefully crafted to convey the intended message and their use of language was both professional and engaging. Overall, I would highly
                recommend Iluztró to anyone in need of an exceptional executive summary. Their professionalism, attention to detail, and ability to effectively communicate complex information make them an invaluable asset to any organization.
              </p>
              <p className=" text-accent-2 right">- Sincerely, Chirag</p>
            </article>
          </section>
          <div className="flipped-shape">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none">
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"></path>
            </svg>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
