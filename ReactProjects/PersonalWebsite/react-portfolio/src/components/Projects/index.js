import React, { useState, useEffect } from 'react'
import { Box, ImageList, ImageListItem, imageListItemClasses, ImageListItemBar, imageListItemBarClasses } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { sizing } from '@mui/system';
import AnimatedLetters from '../AnimatedLetters'
import img from '../../assets/images/image1.png'
import img2 from '../../assets/images/puppy.jpeg'
import img3 from '../../assets/images/cat.jpeg'
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
            }
        }
      });
      

      const projects = [
        {
            title: 'Endless Runner Game',
            image: img,
            url: "https://endlessjsgame.netlify.app/",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Puppy',
            image: img2,
            url: "https://endlessjsgame.netlify.app/",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Cat',
            image: img3,
            url: "https://google.com",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Hello',
            image: img4,
            url: "https://endlessjsgame.netlify.app/",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Puppy1',
            image: img2,
            url: "https://endlessjsgame.netlify.app/",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Cat1',
            image: img3,
            url: "https://google.com",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Endless Runner Game2',
            image: img,
            url: "https://endlessjsgame.netlify.app/",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Puppy2',
            image: img2,
            url: "https://endlessjsgame.netlify.app/",
            cols: 2,
            rows: 2,
        },
        {
            title: 'Cat2',
            image: img3,
            url: "https://google.com",
            cols: 2,
            rows: 2,
        },
      ];

      const CustomizedILT = styled(ImageListItemBar)(({ theme }) => ({
        [`& .${imageListItemBarClasses.title}`]: {
            color: "#9c0c02",
            fontSize: "15px",
            '&:hover': {
                color: "#fff",
            },
        }
      }));

  return (
    <div className="container project-page">
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                    idx={16}
                />
            </h1>
            <div className='project-area'>
                <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        overflowY: "scroll",
                        gridTemplateColumns: {
                            mobile: "repeat(1, 1fr)",
                            bigMobile: "repeat(2, 1fr)",
                            tablet: "repeat(3, 1fr)",
                            desktop: "repeat(3, 1fr)",
                        },
                        gridTemplateRows: "auto auto 1fr 1fr 1fr auto auto",
                        [`& .${imageListItemClasses.root}`]: {
                            display: "flex",
                            flexDirection: "column",
                        }
                    }}
                    height={700}
                    gap={2}
                >
                    {projects.map((item) => (
                        <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href={item.url}
                        >
                        <ImageListItem key={ item.title }
                            sx={{
                            }}
                        >
                            <img
                                src={`${item.image}`}
                                srcSet={`${item.image}`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <CustomizedILT
                                sx={{
                                    background: 'rgba(0,0,0,0.7)',
                                    maxHeight: "25%",
                                }}
                                position="bottom" 
                                title={item.title}
                            />
                        </ImageListItem>
                        </a>
                    ))}
                </Box>
                </ThemeProvider>
            </div>
        </div>
    </div>
    )
}
