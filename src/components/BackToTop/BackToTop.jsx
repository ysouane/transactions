import React, { useState, useEffect } from "react";

import Arrow from "../../assets/arrow-up-red.svg";
import "./BackToTop.css";

function scrollTop() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(window.pageYOffset > 300);
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  });

  if (isVisible) {
    return (
      <button
        type="button"
        className="backToTop"
        onClick={scrollTop}
        onTouchStart={scrollTop}>
        <img src={Arrow} alt="arrow" width={50} height={50} />
      </button>
    );
  }

  return null;
}
