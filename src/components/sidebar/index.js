// import { Link, NavLink } from 'react-router-dom'
// import './index.scss'
// import { useState } from 'react'
// import images from '../../assets/images/BAND AID LOGO - black bg.png'
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faDrum, faEnvelope, faHome, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook, faInstagram, faWhatsapp, faYoutube, } from '@fortawesome/free-brands-svg-icons'
// const Sidebar = () => {
//     const [showNav, setShowNav] = useState(false);
  
//     return (
//     <div className='nav-bar'>
//         <Link className='logo' to='/'onClick={() => setShowNav(false)}>
//             <img src={images} alt="logo"/>
//             {/* <h1>Bandaids</h1> */}
//         </Link>
//         <nav className={showNav ? 'mobile-show' : ''}>
//             <NavLink exact="true" activeclassname="active" to="/">
//                 <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
//                 <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" className="work-link" to="/work" onClick={() => setShowNav(false)}>
//                 <FontAwesomeIcon icon={faDrum} color="#4d4d4e" />
//             </NavLink>
//             <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
//                 <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
//             </NavLink>
//             <FontAwesomeIcon 
//                 onClick={() => setShowNav(false)}
//                 icon={faClose}
//                 color="#ffd700"
//                 size="3x"
//                 className='close-icon' />
//         </nav>
//         <ul>
//             <li>
//                 <a target="_blank" rel="noreferrer" href='https://wa.me/message/36FM3L7MTKG5J1'>
//                     <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>
//                 </a>
//             </li>
//             <li>
//                 <a target="_blank" rel="noreferrer" href='https://youtube.com/@JishuChakraborty-official?si=7_MLhaDeiPFKQs0A'>
//                     <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
//                 </a>
//             </li>
//             <li>
//                 <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=61557002443600&mibextid=ZbWKwL'>
//                     <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
//                 </a>
//             </li>
//             <li>
//                 <a target="_blank" rel="noreferrer" href='https://www.instagram.com/the_bandaids_official?igsh=MThoaXZxdHA0MmQ0cg=='>
//                     <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
//                 </a>
//             </li>
//         </ul>
        
//         <FontAwesomeIcon 
//           onClick={() => setShowNav(true)}
//           icon={faBars}
//           color="#ffd700"
//           size="3x"
//           className='hamburger-icon' />
          
//     </div>
// )
// }
// export default Sidebar
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import images from '../../assets/images/BAND AID.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDrum, faEnvelope, faHome, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
  
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}>
                <img src={images} alt="logo"/>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact activeClassName="active" className="home-link" to="/" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact activeClassName="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact activeClassName="active" className="work-link" to="/work" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faDrum} color="#4d4d4e" />
                </NavLink>
                <NavLink exact activeClassName="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
                
                {/* Social Media Icons */}
                <ul className="social-icons">
                    <li>
                        <a target="_blank" rel="noreferrer" href='https://wa.me/message/36FM3L7MTKG5J1'>
                            <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href='https://youtube.com/@JishuChakraborty-official?si=7_MLhaDeiPFKQs0A'>
                            <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=61557002443600&mibextid=ZbWKwL'>
                            <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/the_bandaids_official?igsh=MThoaXZxdHA0MmQ0cg=='>
                            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    );
};

export default Sidebar;
