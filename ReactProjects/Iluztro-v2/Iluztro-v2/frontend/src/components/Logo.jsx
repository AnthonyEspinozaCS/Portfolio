import React from "react";
import { useInView } from "react-intersection-observer";

const Logo = (props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    triggerOnce: true,
  });

  return (
    <>
      <img
        ref={ref}
        className={inView ? "bbq-logo bbq-logo-animation" : "bbq-logo"}
        src={props.image}
        alt="A BBQ logo."
      />
    </>
  );
};

export default Logo;
