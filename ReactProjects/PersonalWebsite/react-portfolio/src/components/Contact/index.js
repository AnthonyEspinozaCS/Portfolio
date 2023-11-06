import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const service = process.env.REACT_APP_SERVICE_ID
  const template = process.env.REACT_APP_TEMPLATE_ID
  const email = process.env.REACT_APP_EMAIL_ID

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    console.log(email, service, template)
    emailjs.sendForm(service, template, refForm.current, email).then(
      () => {
        alert('Message successfullly sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again.')
      }
    )
  }

  return (
    <>
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
            If you'd like to hire a motivated and team driven engineer then
            please feel free to share the position along with any details here
            or directly at my email.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <input type="hidden" name="client_name" value="me" />
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    require="true"
                  />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="user_company"
                    placeholder="Company"
                    require="true"
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    require="true"
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Telephone #"
                    type="tel"
                    name="user_phone"
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    require="true"
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="map-wrap">
          <div className="info-map">
            Anthony Espinoza,
            <br />
            Las Vegas
            <br />
            Nevada, 89031 <br />
            <span>aespinoza.cs@gmail.com</span>
          </div>
          <MapContainer center={[36.2385, -115.1796]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.2385, -115.1796]}>
              <Popup>
                Anthony lives here, come over for a cup of coffee :){' '}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
