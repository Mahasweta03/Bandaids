import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import '../Authdetails/Authdetails.scss'
import { Link } from "react-router-dom";
import Audiomusic from '../../assets/images/Sitar Drone - Bgm.mp3'

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // State for music play

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };
  
  const toggleMusic = () => {
    setIsPlaying((prevState) => !prevState); // Toggle music play state
  };
  useEffect(() => {
    const audioElement = document.getElementById('music');
    if (audioElement) { // Check if audioElement is not null
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
          console.log("Auto-play was prevented:", error);
        });
      }
    }
    
  return () => {
    // Cleanup
    if (audioElement) {
      audioElement.pause();
    }
  };
  }, [isPlaying]);

  return (
    <div className="auth-container">
      <h1 className="wel_text">Hello! </h1>
      {authUser ? (
        <>
          
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
          {/* Music play button */}
          <button onClick={toggleMusic}>{isPlaying ? 'Stop Music' : 'Play Music'}</button>
          {/* Audio element for music */}
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
  );
};

export default AuthDetails;