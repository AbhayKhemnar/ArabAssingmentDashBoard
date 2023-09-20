import React, { useState } from 'react'
import {LuLayoutDashboard} from 'react-icons/lu'
import {PiPottedPlantDuotone} from 'react-icons/pi'
import {SlPuzzle} from 'react-icons/sl'
import {FcFaq} from 'react-icons/fc'
import {AiOutlinePoweroff} from 'react-icons/ai'
import './leftSection.css'

function LeftSection() {
   const [isactivels , setActivels]=useState("DashBoard")//useState to change the sate so we can change the class of ls
   function handlels(ls){  
    setActivels(ls) //this we change the value of isactive 
   }
   
  return (
    <div className='leftsection'>
         <div className='profile'>
            <img alt='profile' src='https://images.pexels.com/photos/2076596/pexels-photo-2076596.jpeg?auto=compress&cs=tinysrgb&w=600' />
            <h4>Abhay Khemnar</h4>
            <h5>abhaykhemnar07@gmail.com</h5>
         </div>
         <div className='pages'>
            
             <ls onClick={()=>handlels("DashBoard")} className={isactivels==="DashBoard"?"ActiveLS":""}>{/* //we will pass "DashBoard" as a argument  */}
                
                <LuLayoutDashboard/>DashBoard

            </ls>
            <ls onClick={()=>handlels("Preks")} className={isactivels==="Preks"?"ActiveLS":""}>
                <PiPottedPlantDuotone/>Perks
            </ls>
            <ls onClick={()=>handlels("Addons")} className={isactivels==="Addons"?"ActiveLS":""}>
                <SlPuzzle/>Addons
            </ls>
            <ls onClick={()=>handlels("FAQ")} className={isactivels==="FAQ"?"ActiveLS":""}>
                <FcFaq/>FAQ
            </ls>
            <ls onClick={()=>handlels("Support")} className={isactivels==="Support"?"ActiveLS":""}>
                <FcFaq/>Support
            </ls>
            
         </div>
         <div className='logout'>
             <button>LOGOUT<AiOutlinePoweroff/></button>
         </div>
    </div>
  )
}

export default LeftSection