import Fb from './assets/socialMedia-img/fb.svg'
import './css/socialmedia.css'
import Linkedin from './assets/socialMedia-img/linkedin.svg'
import Viber from './assets/socialMedia-img/viber.svg'
import Search from './assets/socialMedia-img/search.svg'
export default function SocialMedia() {
  return (
    <div className='socialmedia-main-content'>
        <img src={Fb} alt="" />
        <img src={Linkedin} alt="" />
        <img src={Viber} alt="" />
        <img src={Search} alt="" className='search-icon'/>
    </div>
  )
}


