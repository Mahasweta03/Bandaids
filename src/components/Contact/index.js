import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {
    const [letterClass, setLetterClass] = useState(`text-animate`)
    const form = useRef()

    useEffect(() => {
        let timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timerId);
        };
    },[])
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_s8fns8n',
                'template_rvc7l9k',
                form.current,
                'sHCzeVgTB3orZnsYx'
            )
            .then(
                () => {
                    alert('Message succesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }


    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','U','s']}
                            idx={15} 
                        />
                    </h1>
                    <p>
                        Book Your show Now!
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name="email" placeholder='Email' required/>
                                </li>
                                {/* <li className='half'> */}
                                    {/* <input type='date'  required/> */}
                                {/* </li> */}
                                <li className='half'>
                                    <input type='text' name="subject" placeholder='Subject' required/>
                                </li>
                                <li>
                                  <textarea name='message' placeholder='Message (Please Provide Your Mobile Number)' required></textarea> 
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                    
                </div>
                <div className='info-map'>
                    The BANDAIDS Team
                    <br/>
                    Kolkata
                    <br/>
                    <span>Email : bandaids.band.official@gmail.com <br/>
                    Call Us on : 79808 32668 / 70443 17107
                    </span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[22.5726, 88.3639]} zoom={13}>
                    <TileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" />
                    <Marker position={[22.5726, 88.3639 ]}>
                        <Popup>BANDAIDS lives here, lets have a musical discussion :)</Popup>
                    </Marker>
                </MapContainer>
                </div>
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

export default Contact