// import LogoTitle from '../../assets/images/B.png'
import Background from '../../assets/images/BAND AID POSTER - Copy.png'
import About from '../../assets/images/about.jpg';
// import Book from '../../assets/images/bandaids.png'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import './index.scss';
// import Logo from '../Logo';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp, faYoutube, faSpotify, faApple, faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import YoutubeEmbed from "../Work/Youtube";
import Gallery from './gallery';
// import here from '../../assets/images/here.gif'
// import show_1 from '../../assets/images/show_1.jpg'
import santanu from '../../assets/images/santanu.jpg'
import jishu from '../../assets/images/jishu.jpg'
import rahul from '../../assets/images/rahul.jpg'
import souptik from '../../assets/images/souptik.jpg'
// import soumyadeep from '../../assets/images/soumya.jpg'
import rohan from '../../assets/images/rohan.jpg'


const Home = () => {
    const [letterClass, setLetterClass] = useState(`text-animate`)
    // const nameArray = [ 'a','n','d','a','i','d','s']


    useEffect(() => {
        let timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
        return () => {
            clearTimeout(timerId);
        };
    }, [])

    return (
        <>
            <div className="container home-page">

                <div className="text-zone">
                    {/* <h1> */}
                    {/* <span className={letterClass}>H</span> */}
                    {/* <span className={letterClass}>i,</span> */}

                    {/* <br/> */}
                    {/* <span className={letterClass}>W</span> */}
                    {/* <span className={letterClass}>E</span> */}
                    {/* <span className={letterClass}>'R</span> */}
                    {/* <span className={letterClass}>E</span> */}
                    {/* <span className={letterClass}> </span> */}

                    {/* <span className={`${letterClass}_13`}>W</span> */}
                    {/* <span className={`${letterClass}_14`}>e</span> */}
                    {/* <span className={`${letterClass}_15`}>'r</span> */}
                    {/* <span className={`${letterClass}_16`}>e</span> */}
                    {/* <span className={`${letterClass}_17`}> </span> */}
                    {/* <img src={LogoTitle} alt='band'/> */}
                    {/* <AnimatedLetters letterClass={letterClass}  */}
                    {/* strArray={nameArray}  */}
                    {/* idx={18}/> */}
                    {/* </h1> */}
                    <h2>Bollywood Rock Band </h2>
                    <Link to="/contact" className='flat-button'>CONTACT US</Link>

                </div>
                <div className="bg-zone">
                    <img src={Background} alt='background' />
                </div>
                <div className='about-zone'>

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'U', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Meet Bandaids, the electrifying Bollywood rock band that seamlessly blends the
                        soulful melodies of Bollywood with the raw power of rock. This dynamic ensemble,
                        formed by seasoned musicians, delivers a captivating fusion on stage, inviting audiences
                        on a journey that defies musical boundaries.
                        <br /><br />
                        <span>Rocking the Bollywood beat, one riff at a time!</span>
                        <Link to="/about" className='about-button'>KNOW MORE </Link>
                    </p>
                    <img src={About} alt='about' />
                </div>
                <div className='Profile-zone'>
                    <img src={santanu} alt="/santanu" />
                    <img src={rahul} alt='/rahul' />
                    <img src={jishu} alt='/jishu' />
                    <img src={souptik} alt='/souptik' />
                    {/* <img src={soumyadeep} alt='/soumyadeep' /> */}
                    <img src={rohan} alt='/rohan' />
                </div>

                <div className='work-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'o', 'm', 'e', ' ', 'G', 'l', 'i', 'm', 'p', 's', ' ', 'O', 'f', ' ', 'O', 'u', 'r', ' ', 'W', 'o', 'r', 'k']}
                            idx={15}
                        />
                    </h1>
                    {/* <div className='shows'> 
                        <h2 className='event-head'>Our Events</h2>
                        <div className='card'>
                            <img src={show_1} alt='/show1' />
                            <p>lorem </p>
                        </div>
                     </div>     */}
                    <main>
                        <Gallery />
                    </main>
                     {/* <img src={here}/> */}




                    <h2 className='work-head'>Exclusive Work !</h2> 
                    <div className='work-video'>

                        <YoutubeEmbed embedId="lu4duhig2vE?si=8vfPyPJW3t5DWFl2" />
                        <YoutubeEmbed embedId="5w0OZOLlhGM?si=ar4EANsMNOaYydtu" />
                        <YoutubeEmbed embedId="rRKXqGksFv0?si=unFNizRsZsBwloRx"/>
                    </div>
                </div>
                <div className='contact-details'>
                    <p>Bandaids<br />
                        Kolkata, West Bengal
                    </p>
                    <p><FontAwesomeIcon icon={faPhone} color='#4d4d4e' /> +91 79808 32668 / +91 70443 17107</p>
                    <a href="mailto:bandaids_official@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' /> bandaids.band.official@gmail.com
                    </a>
                    <p>Listen Us On:</p>
                    <br></br>
                    <div className='listen-link'>

                        <a target='_blank' href='https://music.youtube.com/watch?v=gQPjc96tLb8&si=Qqc-7CdKjU34YM9B'>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a target='_blank' href='https://open.spotify.com/track/4rzM6Q73FjGkb2T76W1RLL?si=5c5e9c9187644437'>
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                        <a target='_blank' href='https://music.apple.com/us/album/o-humdum-suniyo-re-cover-single/1747308817'>
                            <FontAwesomeIcon icon={faApple} />
                        </a>
                        <a target='_blank' href='https://music.amazon.com/tracks/B0D4MFKWPZ?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_4Y2UiDcrAfeGN1rEFT2FsuyfI'>
                            <FontAwesomeIcon icon={faAmazon} />
                        </a>
                    </div>
                    {/* <img src={Book} alt='booking'/>     */}
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61557002443600&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=25570228029259022" width="340" height="500" scrolling="no" frameBorder="0" allowFullScreen={true} title='facebookpage embed' allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className='social-media'>
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href='https://wa.me/message/36FM3L7MTKG5J1'>
                                <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />
                            </a>
                            <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@TheBandaids'>
                                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href='https://www.facebook.com/jishu.chakraborty.9277?mibextid=ZbWKwL'>
                                <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href='https://www.facebook.com/jishu.chakraborty.9277?mibextid=ZbWKwL'>
                                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                            </a>
                        </li>
                    </ul>
                </div>
                <footer>
                    <ul>
                        <li>© 2024 - Bandaids All rights reserved</li>
                        <li>Designed By : Mahasweta Saha</li>

                    </ul>
                </footer>
                {/* <Logo/> */}
            </div >
            <Loader type="pacman" />
        </>
    );
}

export default Home