import React, { useState } from 'react'
import './header.css'
import {MdArrowDropDown} from 'react-icons/md'
function Header() {
  const [isDropDown , setISDropDown]=useState(false)
  return (
    <div className='Header'>
     <div className='Logo'>
       <h1>LOGO</h1>
     </div>
     <div className='HeaderRight'>
        <div className='companyName'>
            <img alt='logo' src='https://images.pexels.com/photos/2885578/pexels-photo-2885578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <span >AK private Ltd</span>
        </div>
        <div className='DropDown'>
           <MdArrowDropDown onClick={()=>setISDropDown(!isDropDown)}/>//work as a toggle button chnage the state so we can display diffrent class on click
        </div>
        
     </div> 
     <div className={isDropDown?"isDropDown":"NotDropDown"}>
           <span>js</span>
           <span>js</span>
           <span>js</span>

        </div>
    </div>
  )
}

export default Header