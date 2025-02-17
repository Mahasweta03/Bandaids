import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth ,facebookprovider,provider} from "../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../auth-signup/signup.scss'
import signupImage from "../../assets/images/signup.png"
import images from '../../assets/images/BAND AID (2).png';
import { signInWithPopup } from "firebase/auth";
// import GoogleButton from 'react-google-button'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXmark} from '@fortawesome/free-solid-svg-icons'



const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const history = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const handleCloseError = () => {
    setError(null); // Clear the error
  };
  const signUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        history("/Authdetails")
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please use a different email or log in.");
      } else {
        setError(error.message);
      }
        // setError(error.message);
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        history("/Authdetails");
      })
      .catch((error) => {
        console.log(error);
        setError("Sign-in with Google failed. Please try again.");
      });
  };
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookprovider)
      .then((result) => {
        console.log(result);
        history("/Authdetails");
      })
      .catch((error) => {
        console.log(error);
        setError("Sign-in with Facebook failed. Please try again.");
      });
  };


  return (
    <div className="sign-up-container">
      <Link className='logo' to='/'>
          <img src={images} alt="logo"/>
      </Link>
      <form className="signup" onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)} required></input>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} required></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required></input>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        ></input>  
        <button type="submit">Sign Up</button>
        <h1 className="or-text">Or</h1>
        <FontAwesomeIcon icon={faGoogle} className="log-gog" onClick={signInWithGoogle}/>
        <FontAwesomeIcon icon={faFacebook} className="log-fac" onClick={signInWithFacebook}/>
        {/* <GoogleButton onClick={signInWithGoogle} /> */}
        <img src={signupImage} alt="login" />
        <p className="con-sign">Already have an Account? <span><Link to="/SignIn">Log In</Link></span></p>
        {error && (
          <div className="error-container">
            <p className="error">{error}</p>
            <FontAwesomeIcon icon={faXmark}  onClick={handleCloseError} className="con-icon" />
          </div> 
          
        )}
      </form>
    </div>
  );
};

export default SignUp;