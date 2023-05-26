import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import { getDocs, collection } from 'firebase/firestore'
// import { db } from '../../firebase'
import { Helmet } from 'react-helmet'
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  themes,
  createTheme,
} from '@merc/react-timeline'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const theme = createTheme(themes.default, {
  timeline: {
    backgroundColor: 'inherit',
    fontSize: '1.2rem',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n  Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  timelineTrack: {
    left: '50%',
    width: '2px',
    height: '100%',
    backgroundColor: '#ee18b6',
    content: "''",
  },
  marker: {
    backgroundColor: '#fff',
    border: '2px solid #EB2DB4',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    zIndex: 100,
  },
  card: {
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
    padding: '10px',
    boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
    width: '100%',
    maxWidth: '560px',
    a: {
      color: '#EC24B5',
    },
  },
  button: {
    fontSize: '20px',
    backgroundColor: 'rebeccapurple',
    borderRadius: '4px',
    padding: '6px',
    color: '#fff',
    margin: '10px 5px 5px 0',
    border: 'none',
    cursor: 'pointer',
  },
  urlButton: {
    fontSize: '20px',
    backgroundColor: 'rebeccapurple',
    borderRadius: '4px',
    padding: '6px',
    margin: '10px 5px 5px 0',
    border: 'none',
    color: '#fff',
  },
  date: {
    backgroundColor: '#ec24b5',
    padding: '3px 9px 3px 9px',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '1.5rem',
  },
  imageAtom: {
    objectFit: 'cover',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '400px',
  },
  imageCredit: {
    marginTop: '10px',
    fontSize: '1.2rem',
  },
  imageText: {
    marginBottom: '10px',
    fontSize: '1.5rem',
  },
  youTubeText: {
    marginBottom: '10px',
    fontSize: '1.5rem',
  },
  events: {
    padding: '10px',
  },
  event: {
    marginBottom: '20px',
  },
  textAtom: {},
})

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // })

  //   useEffect(() => {
  //     getPortfolio()
  //   }, [])

  //   const getPortfolio = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'portfolio'))
  //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  //   }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div>
        <div className="portfat">
          <Helmet>
            <title>NP | Portfolio</title>
          </Helmet>
          <div className="container portfolio-page">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Portfolio'.split('')}
                idx={15}
              />
            </h1>
            {/* <div>{renderPortfolio(portfolio)}</div> */}
          </div>
          <div className="TimeL">
            <Timeline theme={theme}>
              <Events>
                <ImageEvent
                  date="2015"
                  text="**MKCL EASY AWARD**<br>Created a shopping cart website and integrated payment gateway"
                >
                  <div className="project">
                    <div className="project-link">
                      <div className="project-link-icon">
                        <FontAwesomeIcon icon={faLink} />
                      </div>
                      <Link to="http://extcdneasy.mkcl.org/images/EASY-AWARD-2015_Phase-2_Result.pdf">
                        <div className="project-link-text">
                          Project Allocation
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <span className="tag tag-php tag-lg">php</span>
                    <span className="tag tag-mysql tag-lg">MySQL</span>
                  </div>
                </ImageEvent>

                <ImageEvent
                  date="2015"
                  text="**Designed Product Packaging for a local Food Company**"
                >
                  (You may contact me for more details)<p></p>
                  <div>
                    <span className="tag tag-ps tag-lg">PS</span>
                    <span className="tag tag-ai tag-lg">AI</span>
                  </div>
                </ImageEvent>

                <ImageEvent
                  date="2017"
                  text="**Google Code-in**<br>Participated in Google Code-in and Completed tasks offered by BRL-CAD"
                >
                  <div className="project">
                    <div className="project-link">
                      <div className="project-link-icon">
                        <FontAwesomeIcon icon={faLink} />
                      </div>
                      <Link to="https://codein.withgoogle.com/archive/2017/organization/6254981527109632/task/6394649165955072/">
                        <div className="project-link-text">Task 1</div>
                      </Link>
                      <Link to="https://codein.withgoogle.com/archive/2017/organization/6254981527109632/task/5445913036193792/">
                        <div className="project-link-text">Task 2</div>
                      </Link>
                      <Link to="https://codein.withgoogle.com/archive/2017/organization/6254981527109632/task/4655652743938048/">
                        <div className="project-link-text">Task 3</div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <span className="tag tag-brlcad tag-lg">BRL-CAD</span>
                    <span className="tag tag-3d tag-lg">3D Modeling</span>
                  </div>
                </ImageEvent>

                <ImageEvent
                  date="2017-20"
                  text="**Inspire Awards (MANAK)**<br>*Automatic Traffic Control System*<br>Leveraged the use of OpenCV for Automatic License Plate Recognition and analysis of other traffic parameters. Integrated it with email alerts. Also demonstrated a Pollution Control System using Arduino UNO R3 and Sensors. Presented the Project at State Level Exhibition in Dec 2020. Ideation submitted in 2017"
                >
                  <div className="project">
                    <div className="project-link">
                      <div className="project-link-icon">
                        <FontAwesomeIcon icon={faLink} />
                      </div>
                      <Link to="https://drive.google.com/file/d/1aq0BxjnKEM1cUSZa1G969-2Q4u5xbloA/view?usp=sharing">
                        <div className="project-link-text">
                          Project Ideation
                        </div>
                      </Link>
                      <Link to="https://drive.google.com/file/d/1sbAxQtkMzNRA8W8yHEn65lfaL08hvop_/view?usp=sharing">
                        <div className="project-link-text">Initial Grant</div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <span className="tag tag-opencv tag-lg">OpenCV</span>
                    <span className="tag tag-javascript tag-lg">JS</span>
                    <span className="tag tag-ard tag-lg">Arduino</span>
                  </div>
                </ImageEvent>
                <ImageEvent
                  date="April 2023"
                  text="**Art & Game Mechanics for Takneek Gamedev PS**<br>Designed Art for Gamedev PS V4 in Takneek 2023. Also contributed to Game Mechanics (scripting)"
                >
                  <div>
                    <span className="tag tag-ps tag-lg">PS</span>
                    <span className="tag tag-ai tag-lg">AI</span>
                    <span className="tag tag-is tag-lg">InkScape</span>
                    <span className="tag tag-unity tag-lg">Unity</span>
                  </div>
                </ImageEvent>
                <ImageEvent
                  date="April 2023 - present"
                  text="**Building a CV Library**<br>Project Mentee of *Building a CV Library* offered by Stamatics, IITK"
                >
                  <div>
                    <span className="tag tag-c tag-lg">C</span>
                    <span className="tag tag-opencv tag-lg">OpenCV</span>
                    <span className="tag tag-cv tag-lg">Computer Vision</span>
                    <span className="tag tag-ip tag-lg">Image Processing</span>
                  </div>
                </ImageEvent>
                <ImageEvent
                  date="May 2023 - present"
                  text="**CyberSec101**<br>Project Mentee of *CyberSec101* offered by the Association for
                  Computing Activities (ACA), IITK"
                >
                  <div>
                    <span className="tag tag-linux tag-lg">Linux</span>
                    <span className="tag tag-is tag-lg">InfoSec</span>
                    <span className="tag tag-ns tag-lg">Network Security</span>
                  </div>
                </ImageEvent>

                <ImageEvent
                  date="May 2023 - present"
                  text="**Intro to Computer Graphics & Shaders**<br>Project Mentee of *Intro to Computer Graphics & Shaders* offered by the Science and Technology Council, IITK (GameDev Club)"
                >
                  <div>
                    <span className="tag tag-cg tag-lg">Computer Graphics</span>
                    <span className="tag tag-opengl tag-lg">OpenGL</span>
                    <span className="tag tag-glsl tag-lg">GLSL</span>
                  </div>
                </ImageEvent>
              </Events>
            </Timeline>
          </div>
          <Loader type="line-scale-pulse-out" />
        </div>
      </div>
    </>
  )
}

export default Portfolio
