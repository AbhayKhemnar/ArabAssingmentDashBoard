import React from 'react'
import './RightSection.css'
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {TiCloudStorageOutline} from 'react-icons/ti'
import {MdNotifications} from 'react-icons/md'
function Rightsec() {
    return (
        <div className='right-sec'>

            <div className='top-sec'>
                <div className='choose'>
                    <h2>Choose a plan that's just right for You!!</h2>
                </div>
                <div className='selector'>
                    <span className='annualy'>Annualy</span>
                    <span className='monthly'>Monthly</span>
                </div>
            </div>
           
            <div className='cards-sec'>
                <div className='card'>
                    <div className='card-top'>
                        <h2>Basic</h2>
                        <p>$ 9.99/mon</p>
                       <button className='btn1'>Get started <BsArrowRight/></button>
                    </div>
                    <hr/>
                    <div className='card-bottom'>
                        <span>What you will get:</span>
                        <span><AiOutlineUser/> Upto 25 users</span>
                        <span><TiCloudStorageOutline/> Upto 25gb storage</span>
                        <span><AiOutlineMail/> Email support</span>
                        <p><a class="link-opacity-100" href="#">Explore Features</a></p>
                    </div>
                </div>
                <div className='card'>
                <div className='card-top'>
                        <h2>Standard</h2>
                        <p>$ 99.99/mon</p>
                       <button className='btn2'>Get started <BsArrowRight/></button>
                    </div>
                    <hr/>
                    <div className='card-bottom'>
                        <span>What you will get:</span>
                        <span><AiOutlineUser/> Upto 25 users</span>
                        <span><TiCloudStorageOutline/> Upto 25gb storage</span>
                        <span><AiOutlineMail/> Email support</span>
                        <p><a class="link-opacity-100" href="#">Explore Features</a></p>
                    </div>
                </div>
                <div className='card'>
                <div className='card-top'>
                        <h2>Premium</h2>
                        <p>$ 199.99/mon</p>
                       <button className='btn3'>Get started <BsArrowRight/></button>
                    </div>
                    <hr/>
                    <div className='card-bottom'>
                        <span>What you will get:</span>
                        <span><AiOutlineUser/> Upto 25 users</span>
                        <span><TiCloudStorageOutline/> Upto 25gb storage</span>
                        <span><AiOutlineMail/> Email support</span>
                        <p><a class="link-opacity-100" href="#">Explore Features</a></p>
                    </div>
                </div>
            </div>

            <div className='bottom-sec'>
                <div className='bottom-left'>
                    <div className='bottom-left1'>
                        <span className='span'>Free forever</span>
                        <h4>free starter</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button>Get started <BsArrowRight/></button>
                    </div>
                    <div className='bottom-left2'>
                    <span>What you will get:</span>
                        <span><AiOutlineUser/> Upto 8 users</span>
                        <span><TiCloudStorageOutline/> Upto 8gb storage</span>
                        <span><AiOutlineMail/> Email support</span>
                        
                    </div>
                </div>
                <div className='bottom-right'>
                    <div className='bottom-right1'>
                        <span className='span'>Free forever</span>
                        <h4>free starter</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button>Get started <BsArrowRight/></button>
                    </div>
                    <div className='bottom-right2'>
                    <span>What you will get:</span>
                        <span><AiOutlineUser/> Upto 8 users</span>
                        <span><TiCloudStorageOutline/> Upto 8gb storage</span>
                        <span><AiOutlineMail/> Email support</span>
                    </div>
                </div>
            </div>
           <div className='notification'>
            <MdNotifications/>
           </div>
        </div>
    )
}

export default Rightsec