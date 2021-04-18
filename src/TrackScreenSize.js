
import React, {useLayoutEffect} from 'react';
import useStore from './context/store';


const TrackScreenSize = () => {

  const { setScreenWidth } = useStore();
  useLayoutEffect(() => {
    const getAndSetBodyWidth = () => {
        const bodyWidth = document.body?.getBoundingClientRect()?.width;
        setScreenWidth(bodyWidth);
    }
    getAndSetBodyWidth()
    window.addEventListener('resize', getAndSetBodyWidth);
    return () => window.removeEventListener('resize', getAndSetBodyWidth);
  }, [])

  return null;
};

export default TrackScreenSize