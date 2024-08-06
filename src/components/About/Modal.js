import React from 'react';
import nft from '../../assets/images/santanu.jpg';
import './index.scss'

const Modal = ({ open, onClose }) => {
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
            <h1>Santanu Naskar</h1>
            <p>Vocalist</p>
            <p>Santanu Naskar is a dynamic singer known for his versatility across various musical genres, including Bollywood, pop, Sufi, and semi-classical. With a passion for music that transcends boundaries, Santanu captivates audiences with his soulful renditions and powerful performances.

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
  
  

export default Modal;  
// export {Modal1,Modal2,Modal3,Modal4,Modal5};
