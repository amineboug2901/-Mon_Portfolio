import { Navigate, useNavigate } from 'react-router-dom';
import React, { useId, useState } from "react";
import Card from '../../components/Card';

const Project = ({ project }) => {
  const use__id = useId();
  let navigate  = useNavigate()
  const CardClickHandler = ()=>{
    navigate(`/project-detail/${project.id}`)
  }
  return (
    <Card className="portfolio__project pointer" onClick={CardClickHandler}>
      <div className="portfolio__project-image">
        <img src={project.image} alt={`Project: ${project.title}`} />
      </div>
      <h4>{project.title}</h4>
      {/* <p>{project.desc}</p> */}
      <div className="tech-stack">
              <ul className="ul">
                {project.techStack.map((val, index) => {
                  return <li key={use__id}>{val}</li>;  
                })}
              </ul>
            </div>
      <div className="portfolio__project-cta">
        {project.id === 9 ? (
          <a href={project.url} className="btn sm primary" target="_blank" rel="noopener noreferrer">
            Udemy
          </a>
        ) : project.id === 10 ? (
          <a href={project.youtube} className="btn sm primary" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        ) : (
          <a href={""} className="btn sm primary" >
            - See More -
          </a>
        )}
      </div>
    </Card>
  );
};

export default Project;
