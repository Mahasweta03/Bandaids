import React, { useEffect } from 'react';
import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';
// import './Gallery.css'; // Create this CSS file for custom styling
import './index.scss';
import G1 from '../../assets/images/G1.jpg';
import G2 from '../../assets/images/G2.jpg';
import G3 from '../../assets/images/G3.jpg';
import G4 from '../../assets/images/G4.jpg';
import G5 from '../../assets/images/G5.jpg';
import G6 from '../../assets/images/G6.jpg';
import G7 from '../../assets/images/G7.jpg';
import G8 from '../../assets/images/G8.jpg';
import G9 from '../../assets/images/G9.jpg';


const Gallery = () => {
  useEffect(() => {
    baguetteBox.run('.grid-gallery', {
      animation: 'slideIn'
    });
  }, []);

  return (
    <div className="grid-gallery">
      
      <div className="gallery-item">
        <a href={G1}>
          <img src={G1} alt="Photo 1" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G2}>
          <img src={G2} alt="Photo 2" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G3}>
          <img src={G3} alt="Photo 3" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G4}>
          <img src={G4} alt="Photo 4" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G5}>
          <img src={G5} alt="Photo 5" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G6}>
          <img src={G6} alt="Photo 6" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G7}>
          <img src={G7} alt="Photo 7" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G8}>
          <img src={G8} alt="Photo 8" />
        </a>
      </div>
      <div className="gallery-item">
        <a href={G9}>
          <img src={G9} alt="Photo 9" />
        </a>
      </div>
    </div>
  );
};

export default Gallery;
