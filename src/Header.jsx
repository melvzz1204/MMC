import './css/head.css'
import Menulog from '/Slide-img/menu.svg'
import SocialMedia from './component/SocialMedia'
import Sidepanel from './component/Sidepanel'
import { useState } from 'react'

export default function Head() {
  const [show, setShow] = useState(false);
  
  console.log(show)
  return (
    <>
    <SocialMedia />
    <div className='head-main-container'> 
        <div className='title-menu-container'>
            <h2 className='title-menu'>MMC</h2>
            <p className='subtitle-menu'>Construction Services</p> 
        </div>
        <img src={Menulog} alt="menu" className='head-menu-img'  onClick={() => setShow(!show)} />  
    </div>
    {show ? "" : <Sidepanel/>}
    {show && <Sidepanel/>}
    </>
  )

}
