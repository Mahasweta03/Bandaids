import React from 'react';
import nft from '../../assets/images/souptik.jpg';
import './index.scss'

const Modal3 = ({ open, onClose }) => {
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
            <h1>Souptik Mukherjee</h1>
            <p>Drummer</p>
            <p>The backbone and the only man to pick your soul out. His drumming will carry you from the soothing essence to the headbanging rock and definitely create the ambience of the play.
            His favorite genres are Blues, alternative rock. He is also a great percussionist.
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
  
  

export default Modal3;  