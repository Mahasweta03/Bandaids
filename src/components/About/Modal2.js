import React from 'react';
import nft from '../../assets/images/jishu.jpg';
import './index.scss'

const Modal2 = ({ open, onClose }) => {
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
            <h1>Jishu Chakraborty</h1>
            <p>Keyboardist</p>
            <p>Jishu Chakraborty, the band's hands holder, is an experienced keyboardist with a melodious touch. His favorite genres are jazz, alternative rock, and folk. He also controls the technical aspects of the band, enhancing the music with his musical experiments.</p>
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
  
  

export default Modal2;  