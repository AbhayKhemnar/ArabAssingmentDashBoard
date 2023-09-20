import React from 'react'
import Header from '../header/header'
import LeftSection from '../Left_Section/leftSection'
import RightSection from '../RightSection/RightSection'
import './main.css'

function Main() {
  return (
    <div>
        <div className='MainHeader'>
             <Header/>
        </div>
        <div className='heroSection'>
          <div className='LeftSection'>
           <LeftSection/>  
        </div>
        <div className='RightSection'>
            <RightSection/> 
        </div>  
        </div>
        
    
    
    </div>
  )
}

export default Main