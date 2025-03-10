// import { onAuthStateChanged, signOut } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { auth } from "../../firebase";
// import '../Authdetails/Authdetails.scss'
// import { Link } from "react-router-dom";
// import Audiomusic from '../../assets/images/Sitar Drone - Bgm.mp3'

// const AuthDetails = () => {
//   const [authUser, setAuthUser] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false); // State for music play

//   useEffect(() => {
//     const listen = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user);
//       } else {
//         setAuthUser(null);
//       }
//     });

//     return () => {
//       listen();
//     };
//   }, []);

//   const userSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("sign out successful");
//       })
//       .catch((error) => console.log(error));
//   };
  
//   const toggleMusic = () => {
//     setIsPlaying((prevState) => !prevState); // Toggle music play state
//   };
//   useEffect(() => {
//     const audioElement = document.getElementById('music');
//     if (audioElement) { // Check if audioElement is not null
//       const playPromise = audioElement.play();
//       if (playPromise !== undefined) {
//         playPromise.then(_ => {
//           // Automatic playback started!
//           // Show playing UI.
//         })
//         .catch(error => {
//           // Auto-play was prevented
//           // Show paused UI.
//           console.log("Auto-play was prevented:", error);
//         });
//       }
//     }
    
//   return () => {
//     // Cleanup
//     if (audioElement) {
//       audioElement.pause();
//     }
//   };
//   }, [isPlaying]);

//   return (
//     <div className="auth-container">
//       <h1 className="wel_text">Hello! </h1>
//       {authUser ? (
//         <>
          
//           <p>{`Signed In as ${authUser.email}`}</p>
//           <button onClick={userSignOut}>Sign Out</button>
//           {/* Music play button */}
//           <button onClick={toggleMusic}>{isPlaying ? 'Stop Music' : 'Play Music'}</button>
//           {/* Audio element for music */}
//           {isPlaying && (
//             <audio id="music" loop>
//               <source src={Audiomusic} type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//           )}
//         </>
//       ) : (
//         <p>Signed Out</p>
//       )}
//     </div>
//   );
// };

// export default AuthDetails;

import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import Audiomusic from "../../assets/images/Sitar Drone - Bgm.mp3";
import '../Authdetails/Authdetails.scss'

const Authdetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      setAuthUser(user ? user : null);
    });
    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Sign out successful"))
      .catch((error) => console.log(error));
  };

  const toggleMusic = () => {
    setIsPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    const audioElement = document.getElementById("music");
    if (audioElement) {
      if (isPlaying) {
        audioElement.play().catch(error => console.log("Auto-play prevented", error));
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="welcome-container">
      <div className="backgrounds">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`background background${i}`}></div>
        ))}
      </div>
      <div className="criterion">
        {["B", "A", "N", "D", "A", "I", "D","S", "🎸"].map((char, i) => (
          <div key={i} className={`text text${i}`}>{char}</div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`frame frame${i}`}></div>
        ))}
        {[...Array(80)].map((_, i) => (
          <div key={i} className={`particle particle${i}`}></div>
        ))}
      </div>
      <div className="auth-container">
        <h1 className="wel">Greetings From </h1>
        <h1 className="wel_text">Hello!</h1>
        {authUser ? (
          <>
            <p>{`Signed In as ${authUser.email}`}</p>
            <button onClick={userSignOut}>Sign Out</button>
            <button onClick={toggleMusic}>{isPlaying ? "Stop Music" : "Play Music"}</button>
            {isPlaying && (
              <audio id="music" loop>
                <source src={Audiomusic} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
    </div>
  );
};

export default Authdetails;
