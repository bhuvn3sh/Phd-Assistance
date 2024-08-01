import React, { useEffect } from "react";
import $ from "jquery";

const StellarComponent = () => {
  useEffect(() => {
    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });

    return () => {
      // Clean up stellar on unmount
      $.stellar("destroy");
    };
  }, []);

  return (
    <div>
      <div className="parallax-background" data-stellar-background-ratio="0.5">
        <h1>Parallax Background</h1>
      </div>
      <div className="parallax-element" data-stellar-ratio="1.5">
        <p>Parallax Element</p>
      </div>
    </div>
  );
};

export default StellarComponent;
