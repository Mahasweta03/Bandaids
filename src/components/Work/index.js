import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import YoutubeEmbed from "./Youtube";
import show_1 from '../../assets/images/show_1.jpg'
import show_2 from '../../assets/images/show_2.jpg'
import show_3 from '../../assets/images/show_3.jpg'
import show_4 from '../../assets/images/show_4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Work = () => {
    const [letterClass, setLetterClass] = useState(`text-animate`)
    useEffect(() => {
        let timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timerId);
        };
    },[])
    return (
        <>
        <div className='container work-page'>
            {/* <div className='background'> 
                <img src={background} alt='/bg'/>
            </div>*/}    
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['O', 'u' , 'r' ,' ', 'W', 'o', 'r','k']}
                    idx={15}
                />
                </h1>
            </div>
            <div className='shows'>
                <h1 className='event-head'>Our Events</h1>
                <div className='card'>
                    <img src={ show_3 } alt='/show1'/>
                    <FontAwesomeIcon icon={faCalendar} /><p className='date'>31st December </p>
                    <FontAwesomeIcon icon={faLocationDot} /><p className='place'>Howrah</p>
                </div>
                <div className='card'>
                    <img src={ show_4 } alt='/show1'/>
                    <FontAwesomeIcon icon={faCalendar} /><p className='date'>3rd January </p>
                    <FontAwesomeIcon icon={faLocationDot} /><p className='place'>Kolkata</p>
                </div>
                <div className='card'>
                    <img src={ show_1} alt='/show1'/>
                    <FontAwesomeIcon icon={faCalendar} /><p className='date'>16th March </p>
                    <FontAwesomeIcon icon={faLocationDot} /><p className='place'>Howrah</p>
                </div>
                
                
                <div className='card'>
                    <img src={ show_2 } alt='/show1'/>
                    <FontAwesomeIcon icon={faCalendar} /><p className='date'>28th December </p>
                    <FontAwesomeIcon icon={faLocationDot} /><p className='place'>Howrah</p>
                </div>
            </div>
            <div className='work-video'>    
                <h1 className='link-head'>Watch NOW!</h1>
                <YoutubeEmbed embedId="lu4duhig2vE?si=8vfPyPJW3t5DWFl2" />
                <YoutubeEmbed embedId="rRKXqGksFv0?si=WUUNt10X3MDpIriq" />
                <YoutubeEmbed embedId='5w0OZOLlhGM?si=ar4EANsMNOaYydtu'/>
            </div>  
            {/* <div className='gallery'></div> */}
            <footer>
                <ul>
                    <li>© 2024 - Bandaids All rights reserved</li>  
                    <li>Designed By : Mahasweta Saha</li>

                </ul>
            </footer>
        </div> 
        
        <Loader type="pacman"/> 
        </>
    )
}

export default Work



/*import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const UserLogo =() =>{
    return (
        <div className='logo'>
            <FontAwesomeIcon icon={faUser} />
        </div>
    );
};
export default UserLogo;
.user {
    position: relative;
    float: right;
    z-index: 10;
    margin-right: -261px;
    font-size: 29px;
    top: 11px;
}

*/