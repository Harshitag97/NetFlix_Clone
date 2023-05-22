import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {

    const[show,handleShow] =  useState(true)

const transitionNavBar=()=>{
    window.scrollY  > 100 ? handleShow(true):handleShow(false);
}

useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar)
    return ()=> window.removeEventListener("scroll",transitionNavBar)
},[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__content'>

        <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' className='nav__logo'/>
         <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='nav__avatar'/>
         </div>
    </div>
  )
}

export default Nav