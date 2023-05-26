import React from 'react'

import Project from './project'

import INFO from './user'

import './allProjects.css'

import './index.scss'

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
            tagg={project.tagg}
          />
        </div>
      ))}
    </div>
  )
}

export default AllProjects
