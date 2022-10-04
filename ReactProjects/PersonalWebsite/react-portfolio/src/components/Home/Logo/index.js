import './index.scss';
import LogoA from '../../../assets/images/Logo-A.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Loader from 'react-loaders';

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const innerOutlineRef = useRef()
    const solidLogoRef = useRef()
    const tl = useRef(gsap.timeline())

    useEffect(() => {

        tl.current
        .to(bgRef.current, {
            duration: 1,
            opacity: 1,
        })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            }, {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <>
            <div className='logo-container' ref={bgRef}>
                <img ref={solidLogoRef} className="solid-logo" src={LogoA} alt="S"/>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="550.000000pt" height="882.000000pt" viewBox="0 0 550.000000 882.000000"
                preserveAspectRatio="xMidYMid meet">
                <g className="svg-container" transform="translate(0.000000,882.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="#9c0c02">
                <path ref={outlineLogoRef} d="M1370 8807 c0 -1 -306 -1532 -680 -3402 l-680 -3400 0 -988 c0 -544
                -2 -993 -5 -998 -4 -5 260 -9 687 -9 l694 0 363 1568 c200 862 371 1595 378
                1630 l15 62 534 0 c330 0 534 -4 534 -9 0 -19 431 -3245 434 -3248 1 -2 419
                -2 928 -1 l925 3 -783 4395 c-431 2417 -783 4396 -783 4398 -1 3 -2561 3
                -2561 -1z m420 -29 c0 -32 -1748 -8476 -1760 -8503 -5 -12 -9 325 -10 825 l-1
                845 683 3423 682 3422 203 0 c156 0 203 -3 203 -12z m2130 1 c0 -6 349 -1970
                775 -4365 426 -2395 775 -4361 775 -4369 0 -13 -72 -15 -592 -15 l-593 0 -304
                1588 c-168 873 -309 1606 -314 1630 l-9 42 -766 -2 -766 -3 -371 -1600 c-204
                -880 -374 -1612 -378 -1627 l-7 -28 -670 0 c-445 0 -670 3 -670 10 0 11 1172
                5747 1496 7325 102 495 207 1010 235 1145 27 135 52 253 55 263 5 16 64 17
                1055 17 757 0 1049 -3 1049 -11z m-277 -5531 c7 -28 617 -3205 617 -3213 0 -3
                -135 -5 -300 -5 l-300 0 -5 23 c-6 29 -425 3181 -425 3201 0 14 25 16 204 16
                203 0 204 0 209 -22z"/>
                <path ref={innerOutlineRef} d="M2476 8118 c-12 -73 -298 -2999 -294 -3004 3 -2 319 -3 704 -2 l699
                3 -180 1515 -181 1515 -371 3 -372 2 -5 -32z m729 10 c6 -17 355 -2944 355
                -2980 l0 -28 -680 0 c-641 0 -680 1 -680 18 0 27 291 2976 295 2990 3 9 83 12
                355 12 271 0 352 -3 355 -12z"/>
                </g>
                </svg>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Logo