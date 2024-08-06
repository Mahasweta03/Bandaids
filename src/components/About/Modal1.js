import React from 'react';
import nft from '../../assets/images/rahul.jpg';
import './index.scss'

const Modal1 = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
        <img src={nft} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}> X </p>
          <div className='content'>
            <h1>Rahul</h1>
            <p>Guitarist</p>
            <p>With a guitar in hand and a passion for music that spans rock, blues, pop, and metal, Rahul Sarkar is a versatile and dynamic guitarist known for his electrifying performances and soulful sound. From the raw energy of rock and the deep grooves of blues to the catchy hooks of pop and the powerful riffs of metal, he seamlessly blends these genres to create a unique and captivating musical experience.

            </p>
          </div>
          {/* <div className='btnContainer'> }
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, I love NFT's
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks
            </button>
            </div>*/}
        </div>
      </div>
    </div>
  );
};
/* Modal 2
const Modal1 = ({ open, onClose }) => {
    if (!open) return null;
    return (
      <Modal1
        open={open}
        onClose={onClose}
        image={nft} // Replace nft2 with the path to your second image
        title="Modal 2 Title"
        content="Modal 2 Content"
      />
    );
  };*/
  
  

export default Modal1;  