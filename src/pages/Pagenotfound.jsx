import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404 🚫</h1>
      <h2>Page Not Found</h2>

      <p className="nf-text">
        Oops… looks like this page rolled out of the reel 🎬  
        The page you’re looking for doesn’t exist anymore.
      </p>

      <Link to="/" className="nf-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
