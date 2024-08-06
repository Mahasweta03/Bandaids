import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import Us from '../../assets/images/about.jpg';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'
import Modal from './Modal';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
// import Modal4 from './Modal4';
import Modal5 from './Modal5';


  

const About = () => {
    const [openModal, setOpenModal] = useState(false);
    /*const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);
    const [openModal5, setOpenModal5] = useState(false);*/
    const openSpecificModal = (modal) => {
        setOpenModal(modal);
      };
    
      const closeModal = () => {
        setOpenModal(null);
      };
    
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
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b' , 'o' ,'u' , 't', ' ', 'U','s']}
                    idx={15}
                />
                </h1>
                <p>
                    Meet Bandaids, the electrifying Bollywood rock band that seamlessly blends the 
                    soulful melodies of Bollywood with the raw power of rock. This dynamic ensemble, 
                    formed by seasoned musicians, delivers a captivating fusion on stage, inviting audiences 
                    on a journey that defies musical boundaries. From classic Bollywood anthems to rock adaptations 
                    of chart-toppers, Bandaids creates a unique sonic experience that heals through the universal language of melody. 
                    Get ready for a musical rollercoaster where the beats of Bollywood and the echoes of rock converge in perfect harmony – 
                    Bandaids is here to leave an indelible mark on the soundtrack of your soul.
                </p>
                {/* <img src={Us} alt='about'/> */}
                <h2 className='mem'>OUR MEMBERS</h2>
            </div>
            {/* <div className='Profile-zone'> */}
                {/* <img className="profile" src="p1.jpg"/> */}
                {/* <img className="profile" src="p3.jpg"/> */}
                {/* <img className="profile" src="p2.jpg"/> */}
                {/* <img className="profile" src="p4.jpg"/> */}
                {/* <img className="profile" src="p5.jpg"/> */}
            {/* </div> */}
            {/* <h2 className='mem'>OUR MEMBERS</h2> */}
            <div className='modal'>
                
                {/* <button onClick={() => setOpenModal(true)} className='modalButton'>  </button>  
                <button onClick={() => setOpenModal1(true)} className='modalButton1'>  </button>
                <button onClick={() => setOpenModal2(true)} className='modalButton2'>  </button>
                <button onClick={() => setOpenModal3(true)} className='modalButton3'>  </button>
                <button onClick={() => setOpenModal4(true)} className='modalButton4'>  </button>
                <button onClick={() => setOpenModal5(true)} className='modalButton5'>  </button>
                
                
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
                <Modal1 open={openModal1} onClose={() => setOpenModal1(false)} />
                <Modal2 open={openModal2} onClose={() => setOpenModal2(false)} />
                <Modal3 open={openModal3} onClose={() => setOpenModal3(false)} />
                <Modal4 open={openModal4} onClose={() => setOpenModal4(false)} />
                <Modal5 open={openModal5} onClose={() => setOpenModal5(false)} />*/}
                
                <button onClick={() => openSpecificModal('modal')} className='modalButton'></button>
                <button onClick={() => openSpecificModal('modal1')} className='modalButton1'></button>
                <button onClick={() => openSpecificModal('modal2')} className='modalButton2'></button>
                <button onClick={() => openSpecificModal('modal3')} className='modalButton3'></button>
                {/* <button onClick={() => openSpecificModal('modal4')} className='modalButton4'></button> */}
                <button onClick={() => openSpecificModal('modal5')} className='modalButton5'></button>
     
      
                <Modal open={openModal === 'modal'} onClose={closeModal} />
                <Modal1 open={openModal === 'modal1'} onClose={closeModal} />
                <Modal2 open={openModal === 'modal2'} onClose={closeModal} />
                <Modal3 open={openModal === 'modal3'} onClose={closeModal} />
                {/* <Modal4 open={openModal === 'modal4'} onClose={closeModal} /> */}
                <Modal5 open={openModal === 'modal5'} onClose={closeModal} />
                
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
    );
};


export default About