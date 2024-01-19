import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect,useRef } from 'react'
import './Navbar.css'
import bread from '../assets/img/bread-logo.png'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [nav, setNav] = useState(false)
  
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        show &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('scroll',handler)
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('scroll',handler)
    };
  }, [show]);


const changeBackground = () => {
  if(window.scrollY < 500){
    setNav(false)
  }else{
    setNav(true)
  }
}
useEffect(() => {
  window.addEventListener('scroll',changeBackground)

  
  return () => {
    window.removeEventListener('scroll',changeBackground)
  }
}, [])





  return (
    <div className={`navbar ${nav && 'active'}`}>
        <div className="left">
        <label className='z-10  flex align-middle font-extrabold text-2xl text-[#0000ff]'>DailyBread<span className='inline'>
          <img className='w-10' src={bread} alt="" /></span> </label>
        </div>

        

        <div className="right" ref={ref}>
            <div className='menu font-bold px-2 border-[1px] shadow-[2px_2px_0px_0px]  border-black '  onClick={() => setShow((e) => !e) }>
                <span className=''>{show ? 'close' : 'menu'}</span>
            </div>
            <div  className={`nav-links  ${ show ? 'showing' : ''}`}>
            <ul  className='links  '>
                <Link  
                to='/' smooth     
                onClick={() => setShow(false)} 
                className='font-bold px-2   md:border-[1px] md:shadow-[2px_2px_0px_0px] hover:shadow-[0.5px_0.5px_0px_0px_#171796] border-black '><li>Home</li> </Link> 

               <Link  
               to='/about'  
               onClick={()=> {
                setShow(false)
               }}
               > 
               <li  className='font-bold px-2   md:border-[1px] md:shadow-[2px_2px_0px_0px] hover:shadow-[0.5px_0.5px_0px_0px_#171796] border-black '>About</li>
               </Link>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar

