import React from 'react';
import nft from '../../assets/images/rohan.jpg';
import './index.scss'

const Modal5 = ({ open, onClose }) => {
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
            <h1>Rohan Karar</h1>
            <p>Bassist</p>
            <p>Rohan Karar, the bassist of the band, delivers a synchronized enjoyment with his grooves. He is one of the professional players in the group, excelling in his craft. His favorite genres are metal and alternative rock.</p>
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
  
  

export default Modal5;  