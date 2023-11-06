import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import img from '../../assets/images/game.png'
import img2 from '../../assets/images/b2new.png'
import img3 from '../../assets/images/keeping.png'
import './index.scss'

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const projects = [
    {
      title: 'Endless Runner Game',
      image: img,
      url: 'https://endlessjsgame.netlify.app/',
    },
    {
      title: 'Back 2 New BBQ',
      image: img2,
      url: 'https://back2new.netlify.app/',
    },
    {
      title: 'Keeping Care',
      image: img3,
      url: 'https://keepingcare.ca/',
    },
  ]

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1 className="project-header">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={16}
            />
          </h1>
          <div className="project-area">
            {projects &&
              projects.map((project, index) => (
                <div key={index} className="project">
                  <a href={project.url}>
                    <img src={project.image} alt="Screenshot of the website." />
                    <h2>{project.title}</h2>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
