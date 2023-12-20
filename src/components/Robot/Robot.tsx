import React, { useEffect, useReducer, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import { motion as m, useAnimation } from 'framer-motion'
import animationData from '../../assets/animations/Robot.json'
import Terminal from './Terminal'
import Prompts from './Prompts'
import RobotNav from './RobotNav'
import InterFace from '../../assets/icons/interface.png'
import Loca from '../../assets/icons/location.png'
import { UseRobotContext } from '../../context/RobotContext'
import Contacts from './Contacts'
import { useWindowScroll } from 'react-use'
import StartIcon from '../../assets/icons/play.png'
import StopIcon from '../../assets/icons/stop-button.png'
import Glootie1 from '../../assets/audio/wanna_develop_an_app_1.mp3'
function Robot() {
  const { robotState, RobotDispatch } = UseRobotContext()

  // drag animations

  const screenSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  const dragConstraints = {
    left: 0,
    right: screenSize.width - 500,
    top: 0,
    bottom: screenSize.height - 333,
  }
  const style = {
    mainDiv: `flex absolute  z-50`,
    section: ` w-[100%] h-[100%] `,
    iconWrapper: `absolute flex gap-2 left-[14rem] top-[-1.2rem] `,
    icon: `w-[40px] h-[40px] cursor-pointer z-50`,
  }

  const [scrollY, setScrollY] = React.useState(10)
  const { y: pageYOffset } = useWindowScroll()

  React.useEffect(() => {
    setScrollY(pageYOffset)
  }, [pageYOffset])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  //   robot terminal views
  const RobotTerminalViews = () => {
    switch (robotState.RobotSwtich) {
      case 'PROMPTS':
        return <Prompts />
      case 'NAV':
        return <RobotNav />
      case 'CONTACT':
        return <Contacts />
      default:
        return <Prompts />
    }
  }
  //   robbot start stoper state
  const [stopStart, setStopStart] = useState<boolean>(false)
  // robbot audio

  const audioRef = useRef(null)

  // robbot buttons
  const handleNav = () => {
    RobotDispatch({ type: 'ROBOT_SWTICH', payload: 'NAV' })
    RobotDispatch({ type: 'CLOSE_NAV', payload: '' })
    RobotDispatch({ type: 'CLOSE_TERMINAL', payload: false })
  }
  // robot moivng randomliy

  const [robotPosition, setRobotPosition] = useState({
    x: screenSize.width - 2000,
    y: screenSize.height - 800,
  })

  const directions = [
    { x: 1, y: 1 },
    { x: -1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: -1 },
  ]

  let currentDirectionIndex = Math.floor(Math.random() * directions.length)

  const moveRobot = () => {
    const direction = directions[currentDirectionIndex]
    let newX = robotPosition.x + direction.x * (screenSize.width - 100)
    let newY = robotPosition.y + direction.y * (screenSize.height - 133)

    // Check and adjust direction when hitting any boundary
    if (newX <= 0 || newX >= screenSize.width - 100) {
      direction.x *= -1 // Reverse the x direction
      currentDirectionIndex = (currentDirectionIndex + 1) % directions.length
    }
    if (newY <= 0 || newY >= screenSize.height - 133) {
      direction.y *= -1 // Reverse the y direction
      currentDirectionIndex = (currentDirectionIndex + 1) % directions.length
    }

    setRobotPosition({ x: newX, y: newY })
    console.log(`X: ${newX}, Y: ${newY}, Direction: ${currentDirectionIndex}`)
  }

  const controls = useAnimation()

  //   useEffect(() => {
  //     let timer: any

  //     if (!stopStart) {
  //       timer = setInterval(() => {
  //         moveRobot()
  //       }, 2000)

  //       return () => {
  //         clearInterval(timer) // Clear the timer when component unmounts or stopStart becomes true
  //       }
  //     }
  //   }, [stopStart])

  const toggleAudio = () => {
    const audio: any = audioRef.current
    if (audio) {
      if (stopStart) {
        audio.pause()
        controls.stop()
      } else {
        audio.play()
        // moveRobot()
      }
    }
    setStopStart((prevIsPlaying) => !prevIsPlaying)
  }
  return (
    <m.div
      animate={{ x: robotPosition.x, y: robotPosition.y }}
      style={{ top: scrollY }}
      drag={true}
      dragConstraints={dragConstraints}
      initial={{ y: 140 }}
      dragElastic={true}
      dragMomentum={true}
      transition={{ duration: 0.6, type: 'spring' }}
      className={style.mainDiv}
    >
      <Terminal>
        <RobotTerminalViews />
      </Terminal>
      <audio ref={audioRef} src={Glootie1}></audio>

      <div className={style.iconWrapper}>
        {/* <img
          onClick={handleContact}
          title="კონტაქტი"
          className={style.icon}
          src={InterFace}
        /> */}
        <img
          onClick={toggleAudio}
          title="კონტაქტი"
          className={style.icon}
          src={stopStart ? StopIcon : StartIcon}
        />
        <img
          onClick={handleNav}
          title="საიტის რუკა"
          className={`${style.icon} mt-4`}
          src={Loca}
        />
      </div>

      <Lottie
        onDoubleClick={handleNav}
        options={defaultOptions}
        height={300}
        width={400}
        isClickToPauseDisabled={true}
      />
    </m.div>
  )
}

export default Robot
