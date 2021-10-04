import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'day-planner',
      description: 'HTML/CSS',
      link: "https://wolverine0824.github.io/work-day-planner/",
      repo: "https://github.com/wolverine0824/work-day-planner"
    },
    {
      name: 'CoffeeOverFlow',
      description: 'JavaScript/CSS/HTML/API',
      link: "https://xtended99.github.io/CoffeeOverFlow/",
      repo: "https://github.com/wolverine0824/coffeeOverFlow"
    },
    {
      name: 'e-commerce store',
      description: 'JavaScript/CSS/Handelbars',
      link: "https://gtbc-e-commerce.herokuapp.com/",
      repo: "https://github.com/wilsonsous/E-Commerce-Products"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
