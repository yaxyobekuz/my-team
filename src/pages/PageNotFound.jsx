import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center container py-20 text-center">
      {/* Title */}
      <h1 className="text-9xl mb-5 max-670:text-7xl">404</h1>

      {/* Description */}
      <p className="text-4xl text-secondary-rapture_blue mb-5 max-670:text-3xl max-440:text-2xl">
        Page not found :(
      </p>

      {/* Link */}
      <Link className="text-primary-light_coral text-xl max-440:text-lg" to="/">
        Back to home
      </Link>
    </div>
  );
};

export default PageNotFound;
