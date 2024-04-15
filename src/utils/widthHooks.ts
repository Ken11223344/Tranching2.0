import { useEffect, useState } from "react";

const useWidth = () => {
  const [innerWidth,setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[])
  return {
    innerWidth
  }
}

export default useWidth