
import React, { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {
    const [show, handleshow]=useState(false);

    const transitionNavBar=()=>{

        if(window.scrollY>100)
        {
            handleshow(true);
            console.log(show);
        }
        else
        {
            handleshow(false);
        }
    }
    useEffect(()=>{
              window.addEventListener("scroll", transitionNavBar);
            //console.log(show);
            return ()=>{
                window.removeEventListener("scroll", transitionNavBar);
            }
                
        }
    )

  return (
    <div className={`nav ${show && 'nav__black'}`}>

        <div className="nav__contents">
           <img
           className="nav__logo" 
           src="https://banner2.cleanpng.com/20180919/fzv/kisspng-vector-graphics-logo-netflix-image-television-1713939568653.webp"
                alt=''
            />
            <img
           className="nav__avatar" 
           src="https://sm.mashable.com/mashable_sea/photo/default/slightly-smiling-face-1f642_59z9.jpg"
                alt=''
            />

        </div>
    </div>
  )
}
