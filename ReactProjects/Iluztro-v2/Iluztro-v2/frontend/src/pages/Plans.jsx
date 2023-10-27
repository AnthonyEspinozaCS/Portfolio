import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import checkMark from "../assets/images/check.svg";
import popular from "../assets/images/popular.svg";
import "./pages.css";

const Plans = () => {
  const [overlayToggle, setOverlayToggle] = useState(false);

  const handleClick = () => {
    console.log(overlayToggle);
    if (overlayToggle) setOverlayToggle(false);
    else setOverlayToggle(true);
  };

  React.useEffect(() => {
    const card = document.querySelectorAll(".section-article");
    const ob = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("animate", entry.isIntersecting);
          if (entry.isIntersecting) ob.unobserve(entry.target);
        });
      },
      {
        threshold: 0.5,
      }
    );
    card.forEach((card) => {
      ob.observe(card);
    });
  }, []);

  return (
    <>
      <div className="bg-dark">
        <section className="plan-hero container">
          <h1 className="text-white">Options to fit your business</h1>
        </section>
      </div>

      <div
        className={overlayToggle ? "overlay full" : "overlay"}
        id="overlay">
        <article className="schedule-div ff-sans-normal container">
          <h2 className="fs-600 ff-serif">Let's bring your vision to life!</h2>
          {overlayToggle && <InlineWidget url="https://calendly.com/patriciararagon/30min?hide_event_type_details=1&hide_gdpr_banner=1" />}
          <button
            className="button"
            onClick={handleClick}>
            Close
          </button>
        </article>
      </div>

      <section className="container">
        {/* Executive Summary */}
        <section className="plan-section ">
          <article className="section-article">
            <h2 className="">Executive Summary</h2>
            <br className="line-break" />
            <br className="line-break-2" />
            <p className="month text-green fs-600">$485</p>
            <ul className="included ">
              <li>Custom cover page.</li>
              <li>2-page template Executive Summary.</li>
              <li>10-day turnaround for first draft.</li>
              <li>2 revisions within 14 days of the first draft.</li>
            </ul>
            <p className="">
              <span className="text-red">Rush</span> -<span className="text-green">$200</span> 3-day First Draft of Executive Summary
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>

          <article className="section-article">
            <h2 className="">
              Executive Summary <span className="text-accent-2">Pro</span>
            </h2>
            <br className="line-break" />
            <p className="month text-green fs-600">$1484</p>
            <ul className="included ">
              <li>Custom cover page.</li>
              <li>Customized summary of board members.</li>
              <li>Customized design of the overall Executive Summary.</li>
              <li>Proofreading of all text.</li>
              <li>Custom visuals.</li>
              <li>14-day turnaround for first draft.</li>
              <li>2 revisions within 30 days of the first draft.</li>
            </ul>
            <p className="">
              <span className="text-red">Rush</span> -<span className="text-green">$400</span> 7-day First Draft of Executive Summary
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>

          <article className="section-article ">
            <h2 className="">
              Executive Summary <span className="text-accent-2">Premium</span>
            </h2>
            <p className="month text-green fs-600">$1988</p>
            <ul className="included ">
              <li>Custom cover page.</li>
              <li>Customized summary of board member.</li>
              <li>Customized design of the overall Executive Summary.</li>
              <li>Proofreading of all text.</li>
              <li>Custom visuals.</li>
              <li>10-day turnaround for first draft.</li>
              <li>Unlimited revisions within 30 days of the first draft.</li>
              <li>Custom logo (2 concepts and 4 revisions).</li>
              <li>Basic Landing Page</li>
            </ul>
            <p className="">
              <span className="text-red">Rush</span> -<span className="text-green">$400</span> 5-day First Draft of Executive Summary
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>
        </section>
        {/* Logs */}
        <section className="plan-section ">
          <article className="section-article ">
            <h2 className="">Basic Logo</h2>
            <p className="month text-green fs-600">$198</p>
            <ul className="included ">
              <li>2 concepts within 2 days</li>
              <li>4 revisions</li>
            </ul>
            <p className="">
              Provide a sketch of what you would like.
              <br />
              <span className="bold">Additional concepts</span>:<span className="text-green">$20</span> each
              <br />
              (logo will be delivered as a vector file)
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>

          <article className="section-article ">
            <h2 className="">Creative Mode</h2>
            <p className="month text-green fs-600">$298</p>
            <ul className="included ">
              <li>5 concepts within 7 days</li>
              <li>4 revisions</li>
            </ul>
            <p className="">
              <span className="bold">Additional concepts</span>:<span className="text-green">$20</span> each
              <br />
              (logo will be delivered as a vector file)
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>
        </section>
        {/* websites */}
        <section className="plan-section ">
          <article className="section-article ">
            <h2 className="">Landing Page</h2>
            <br className="line-break-3" />
            <p className="month text-green fs-600">$198</p>
            <ul className="included ">
              <li>
                48-Hour turnaround time<sup>*</sup>
              </li>
              <li>Template-based</li>
            </ul>
            <p className="">
              <sup>*</sup>Executive summary is complete
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>

          <article className="section-article ">
            <h2 className="">
              <span className="text-accent-2">Pro</span> Website
            </h2>
            <br className="line-break-3" />
            <p className="month text-green fs-600">$497</p>
            <ul className="included ">
              <li>
                36-Hour turnaround time<sup>*</sup>
              </li>
              <li>Customized 1-page landing page</li>
              <li>Calendar to set up appointments</li>
            </ul>
            <p className="">
              <sup>*</sup>Executive summary is complete
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>

          <article className="section-article ">
            <h2 className="">
              <span className="text-accent-2">Premium</span> Website
            </h2>
            <p className="month text-green fs-600">$997</p>
            <ul className="included ">
              <li>
                72-Hour turnaround time<sup>*</sup>
              </li>
              <li>Customized up to 5-page website</li>
              <li>Calendar to set up appointments</li>
            </ul>
            <p className="">
              <sup>*</sup>Executive summary is complete
            </p>
            <button
              className="button"
              onClick={handleClick}>
              Schedule a Call
            </button>
          </article>
        </section>
      </section>

      <section className="plan-section additional container">
        <h2 className="add-title bold text-accent-2">Additional Options</h2>
        <article className="section-article   ">
          <h2 className="">
            Executive Summary<span className="text-accent-2">++</span> -<span className="text-green">$997</span>
          </h2>
          <p>
            <span className="text-red">Required</span>: Proofread data, business name, and colors. Must know what data to include.
          </p>
          <ul className="included ">
            <li>4 Pages</li>
            <li>2-page template Executive Summary.</li>
            <li>10-day for first draft after logo is approved.</li>
            <li>2 revisions within 30 days.</li>
          </ul>
          <p>
            <span className="bold">Additonal Pages:</span>
            <span className="text-green">$150</span> each
          </p>
          <p>
            <span className="bold">Add on:</span> Basic Logo (2 concepts)
            <span className="text-green">$97</span>
          </p>
          <button
            className="button"
            onClick={handleClick}>
            Schedule a Call
          </button>
        </article>

        <article className="section-article    ">
          <h2 className=" bold">Add Ons</h2>
          <h3 className="add-on-header fs-600">Data</h3>
          <p>
            <span className="bold">Professional proofread</span>:<span className="text-green">$30</span> per page.
          </p>
          <p>
            <span className="bold">Data extraction</span>:<span className="text-green">$97</span> per page.
          </p>
          <h3 className="add-on-header fs-600">Updates</h3>
          <p>
            <span className="bold">Revisions</span>
            <sup>*</sup>:<span className="text-green">$98</span>.
            <br />
            Add/Remove example: Board member, expanding target area, or up to one hour of changes.
            <br />
            Turnaround time 48-hours.
          </p>

          <p className="disclaimer">
            <sup>*</sup>: Starts after revisions time frame ends on Executive Summary.
          </p>
        </article>
      </section>
    </>
  );
};

export default Plans;
