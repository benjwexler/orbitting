
import React, { useRef, useEffect, useState, useLayoutEffect, Suspense } from "react";
import { useSpring as useS, animated } from "@react-spring/web";
import {get} from 'lodash';
import useStore from "./context/store";

const facts = {
  Earth: [1, 2, 3],
  Sun: [4, 5, 6],
}

const Info = ({
  height,
  isPaused,
}) => {
  const { activeElement } = useStore();
  // const activeElement = null;
  const [shouldHideProgress, setShouldHideProgress] = useState(false);
  const { opacity, height: infoBodyHeight } = useS({
    config: { duration: 250 },
    opacity: activeElement ? 1 : 0,
    height: activeElement ? '100%' : '25%',
  });

  const [currentFact, setCurrentFact] = useState(1);
  const initProgressBar = {
    1: 0,
    2: 0,
    3: 0,
  }
  const [progressBars, setProgressBars] = useState(initProgressBar)
  // console.log('progressBar', progressBars)
  const {transform} = useS({
    // pause: isPaused,
    reset: !activeElement,
    // cancel: isPaused && !activeElement,
    // loop: true,

    onRest: () => {
      if(currentFact !== 3) {
        setProgressBars({...progressBars, [currentFact]: 1 })
      }
      
      setTimeout(() => {
        setCurrentFact(currentFact + 1 > 3 ? 1 : currentFact + 1)
      }, 0)
    }
    ,
    loop: true,
    from: { transform: 'scaleX(0)' },
    to: { transform: 'scaleX(1)' },
    config: {
      duration: 3000,
    }
  })

  useEffect(() => {
    if(!activeElement) {
      setCurrentFact(1)
      // if (isPaused) {
      //   return setShouldHideProgress(true)
      // }
      // return
    } 

    // if(isPaused) return;

    // return setShouldHideProgress(false)

  }, [activeElement])

  // console.log('should', shouldHideProgress)



  // useLayoutEffect(() => {
  //   // if(currentFact === 0) {
  //   //   setProgressBars(initProgressBar)
  //   // } else {
  //   //   // setProgressBars({...progressBars, [currentFact]: 1 })
  //   // }
  // }, [currentFact])

  // const { opacity: headerOpacity } = useS({
  //   config: { duration: 250 },
  //   opacity: activeElement ? 1 : 0,
  //   delay: 50
  // });

  const timbarInnerProps = {
    transform,
  }

  const animateInnerTimebar = (barNum) => {

    // if(shouldHideProgress) {
    //   return { transform: 'scaleX(0)' }
    // }

    // return progressBars[barNum]
    if(currentFact > barNum) {
      // console.log('barNum', barNum)currentFact
      return { transform: 'scaleX(1)' }
    };

    if(currentFact < barNum) {
      return { transform: 'scaleX(0)' }
    };

    if(barNum !== currentFact) {
      return { transform: `scaleX(${progressBars[barNum]})` }
    }

    return timbarInnerProps;
  }

const getFact = () => {
  // if(!activeElement?.name) return '';
  return get(facts, `${activeElement?.name}[${currentFact - 1}]`, '')


}

  return (
    <animated.div
      className="info2"
      // opacity={opacity}
      style={{
        height: '30%',
        // maxHeight: 200,
        maxWidth: 360,
        width: '40%',
        position: 'absolute',
        top: `${height}vh`,
        right: 0,
        padding: 0,
        color: 'white',
        borderBottomLeftRadius: 5,
        opacity
        // opacity: activeElement ? 1 : 0,
      }}>
      <animated.h2
        style={{
          background: '#111011',
          margin: 0,
          padding: 20,
          height: 64,
          // opacity: opacity,
        }}
      >{activeElement ?.name}</animated.h2>
      <animated.div
        className="info-body"
        style={{
          padding: '5px 20px',
          // height: '100%',
          height: infoBodyHeight,
          // height: activeElement ? '100%' : 0,
          background: 'rgba(255, 255, 255, 0.08)',
          overflow: 'hidden',
        }}>
        <p >Fun Facts:</p>
        <p style={{ padding: '0 15px', margin: '10px 0', fontSize: 20 }}>
          {/* Earth is 4.54 billion years old. */}
          {getFact()}
        </p>
        <div style={{ opacity: activeElement ? 1 : 0, display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 'auto', marginBottom: 10 }}>
          { !!activeElement ?
            <>
          <div className="timebar">

            <animated.div  style={animateInnerTimebar(1)} className="timebar-inner" />
          </div>
          <div className="timebar">
          <animated.div  style={animateInnerTimebar(2)} className="timebar-inner" />
          </div>
          <div className="timebar">
          <animated.div  style={animateInnerTimebar(3)} className="timebar-inner" />
          </div>
          </> : null
          }
        </div>
      </animated.div>
    </animated.div>
  )
}

export default Info;
