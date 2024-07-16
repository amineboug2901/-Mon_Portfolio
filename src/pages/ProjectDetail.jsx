import React, { useId, useState } from "react";
import { useThemeContext } from "../context/theme-context";
import { Link, useParams } from "react-router-dom";
import data from "../sections/portfolio/data";
import "./ProjectDetail.css";

function ProjectDetail() {
  const use__id = useId();
  let projectContent = {};
  const { id } = useParams();

  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      projectContent = data[i];
      break;
    } else {
      projectContent = null;
    }
  }

  const { themeState } = useThemeContext();

  if (projectContent != null) {
    return (
      <main
        id="main"
        className={`${themeState.primary} ${themeState.background}`}
      >
        <div className="wrappr">
          <div className="sub-contain">
            <h1>{projectContent.title}</h1>
            <div className="img-container">
              <img src={projectContent.image} alt="project-img" />
            </div>
            <div className="tech-stack">
              <p><b>Description: </b>{projectContent.desc}</p>
            </div>
            <a
              href={projectContent.github}
              className="btn sm primary git"
              target="_blank"
              rel="noopener noreferrer"
            >
              - Github -{" "}
            </a>
          </div>
        </div>
      </main>
    );
  } else {
    return <div>Page Not Found</div>;
  }
}

export default ProjectDetail;
