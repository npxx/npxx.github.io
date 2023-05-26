import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Helmet } from 'react-helmet'

import { Link } from 'react-router-dom'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <Helmet>
        <title>NP | Contact</title>
      </Helmet>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I would love to hear from you. Whether you have a question or just
            want to say hi, feel free to drop me a line.
          </p>
          <div className="contact-form">
            <div>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSfi8mFFp878K4BtrhMq-yl9XfEjREYRg5Z2Y2atHwGNTq8hKw/viewform?usp=sf_link"
                className="flat-button"
              >
                Let's talk!
              </Link>
            </div>

            {/* <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form> */}
          </div>
        </div>
        {/* <div className="info-map">NP</div> */}
        <div className="map-wrap">
          {/* <MapContainer center={[0, 0]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[0, 0]}>
              <Popup>Meow lives here!</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Contact
