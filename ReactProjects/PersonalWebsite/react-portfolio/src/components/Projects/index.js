import React, { useState, useEffect } from 'react'
import {
  Box,
  ImageList,
  ImageListItem,
  imageListItemClasses,
  ImageListItemBar,
  imageListItemBarClasses,
} from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { sizing } from '@mui/system'
import AnimatedLetters from '../AnimatedLetters'
import img from '../../assets/images/image1.png'
import img2 from '../../assets/images/b2new.png'
import img3 from '../../assets/images/keeping.png'
import img4 from '../../assets/images/full.jpg'
import './index.scss'

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        bigMobile: 350,
        tablet: 650,
        desktop: 900,
      },
    },
  })

  const mediaQuery = useMediaQuery(theme.breakpoints.up('tablet'))

  const projects = [
    {
      title: 'Endless Runner Game',
      image: img,
      url: 'https://endlessjsgame.netlify.app/',
      cols: 1,
      rows: 1,
    },
    {
      title: 'Back 2 New BBQ',
      image: img2,
      url: 'https://back2new.netlify.app/',
      cols: 1,
      rows: 1,
    },
    {
      title: 'Keeping Care',
      image: img3,
      url: 'https://keepingcare.ca/',
      cols: 1,
      rows: 1,
    },
  ]

  const CustomizedILT = styled(ImageListItemBar)(({ theme }) => ({
    [`& .${imageListItemBarClasses.title}`]: {
      color: '#9c0c02',
      fontSize: '15px',
      '&:hover': {
        color: '#fff',
      },
    },
  }))

  return (
    <div className="container project-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={16}
          />
        </h1>
        <div className="project-area">
          <ThemeProvider theme={theme}>
            <ImageList
              sx={{
                width: '100%',
                minHeight: '600px',
                padding: '2rem 0',
                margin: '0',
                overflow: 'visible',
              }}
              cols={mediaQuery ? 3 : 2}
              rowHeight={mediaQuery ? 250 : 300}
              gap={'2rem'}
            >
              {projects.map((item) => (
                <a target="_blank" rel="noreferrer" href={item.url}>
                  <ImageListItem
                    key={item.title}
                    sx={{ boxShadow: '0px 0px 3px white' }}
                  >
                    <img
                      src={`${item.image}`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <CustomizedILT
                      sx={{
                        background: 'rgba(0,0,0,0.7)',
                        maxHeight: '25%',
                      }}
                      position="bottom"
                      title={item.title}
                    />
                  </ImageListItem>
                </a>
              ))}
            </ImageList>
          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}
