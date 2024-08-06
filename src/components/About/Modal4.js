import React from 'react';
import nft from '../../assets/images/soumya.jpg';
import './index.scss'

const Modal4 = ({ open, onClose }) => {
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
            <h1>Soumyadeep Roy</h1>
            <p>Guitarist</p>
            <p>A passionate guitarist where love runs through his notes and pitches. With a great love for old school classic rock, he hustles to serve Bandaids and has even played in past bands, always thinking of new ways to contribute to the field of music. He is a permanent member of the beloved Bandaids.</p>
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
  
  

export default Modal4;  