import { useState, useEffect } from 'react'
import Container from '../mixed/container'

export default function Nav({children}) {
   const [navColor, setNavColor] = useState(false)

  useEffect(()=>{
      const handleScroll = () => {
        window.scrollY > 20? setNavColor(true) : setNavColor(false)
        console.log(window.scrollY)
      }
      window.addEventListener("scroll", handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[])

  return (
    <nav className={`${navColor? "bg-[#ffffff]" : "bg-[transparent]"} z-[3] flex justify-center items-center transition-[0.8s] w-full fixed top-[-2px] h-[max-content]`}>
        <Container variant="nav">
            {children}
        </Container>
    </nav>
  )
}
