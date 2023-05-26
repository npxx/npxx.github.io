import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
import { Helmet } from 'react-helmet'
import nppic from './nppic.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const hi = 'Hi! I am'.split('')
  const name = 'Nevish   Pathe'.split('')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <>
      <Helmet>
        <title>NP | Home</title>
      </Helmet>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={hi} idx={14} />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={name}
              idx={22}
            />
          </h1>
          <Link to="/contact" className="flat-button">
            Let's talk!
          </Link>
        </div>

        {/* <Logo /> */}
        <div>
          <img src={nppic} alt="np" />
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
