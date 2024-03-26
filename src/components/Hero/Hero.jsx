import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero justify-center items-center min-h-[calc(100vh-150px)]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to{" "}
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              ByteBlaze
            </span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div>
            <Link className="btn btn-primary" to="/blogs">
              Blogs
            </Link>
            <Link className="btn btn-success" to="/bookmarks">
              bookmarks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
