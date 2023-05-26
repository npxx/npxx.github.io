import { useEffect, useState } from 'react'
import {
  faCss3,
  faGithub,
  faHtml5,
  faReact,
  faNodeJs,
  faPhp,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Helmet } from 'react-helmet'

import AllProjects from './allProjects'

import INFO from './user'

import './projects.css'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  return (
    <>
      <Helmet>
        <title>NP | About</title>
      </Helmet>

      <con className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambitious Freshman at IITK majoring in Computer Science and
            Engineering.
          </p>
          <p align="LEFT">
            I'm a confident and self-motivated person with a positive attitude
            and a curious mind, always hunting for new opportunities to learn
            and grow. Problem Solving is my passion and I love to solve
            real-world problems using my technical skills.
          </p>
          <p>
            Clipping it in one line, I'm a highly motivated individual with keen
            interest in fine arts, technology and crime mystery.
          </p>
          <p>&nbsp;</p>
          <p>Here are some of my hobby projects!</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {/* <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGithub} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPhp} color="#EC4D28" />
            </div> */}
          </div>
        </div>

        <div className="page-content">
          <div className="content-wrapper">
            <div className="projects-logo-container"></div>
            <div className="projects-container">
              <div className="projects-list">
                <AllProjects />
              </div>
            </div>
          </div>
        </div>
      </con>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default About
