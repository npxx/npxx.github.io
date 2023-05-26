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

const Rs = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [rs, setRs] = useState([])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timer)
  //   }
  // })

  //   useEffect(() => {
  //     getRs()
  //   }, [])

  //   const getRs = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'rs'))
  //     setRs(querySnapshot.docs.map((doc) => doc.data()))
  //   }

  const renderRs = (rs) => {
    return (
      <div className="images-container">
        {rs.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img src={port.image} className="rs-image" alt="rs" />
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
        <div className="rsfat">
          <Helmet>
            <title>NP | Rs</title>
          </Helmet>
          <div className="container rs-page">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Randomstuff'.split('')}
                idx={15}
              />
            </h1>
            {/* <div>{renderRs(rs)}</div> */}
            <p>lol</p>
          </div>
          <Loader type="line-scale-pulse-out" />
        </div>
      </div>
    </>
  )
}

export default Rs
