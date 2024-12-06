import React from "react";

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Left side */}
      <div className="left-projects">
        <h2>Random Jokes</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
          odit laborum aliquam voluptatum nisi mollitia.
        </p>
        <div className="project-buttons">
          <button className="project-btn">React</button>
          <button className="project-btn">Vercel</button>
          <button className="project-btn">Axios</button>
        </div>
        <div className="project-buttons">
          <button className="project-btn">Router</button>
        </div>
        <div className="project-links">
          <a href="https://github.com" className="project-link">View on Github</a>
          <a href="https://app.com" className="project-link">Go to App</a>
        </div>
        <img src="/f246155782db0594c00c688cdbf27f80.png" alt="Random Jokes" />
      </div>

      {/* Right side */}
      <div className="right-projects">
        <h2>Are you bored?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
          odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione
          soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque
          magnam!
        </p>
        <div className="project-buttons">
          <button className="project-btn">React</button>
          <button className="project-btn">Redux</button>
          <button className="project-btn">Vercel</button>
        </div>
        <div className="project-buttons">
          <button className="project-btn">Axios</button>
          <button className="project-btn">Router</button>
        </div>
        <div className="project-links">
          <a href="https://github.com" className="project-link">View on Github</a>
          <a href="https://app.com" className="project-link">Go to App</a>
        </div>
        <img src="/f246155782db0594c00c688cdbf27f80.png" alt="Are you bored?" />
      </div>
    </div>
  );
};

export default Projects;
