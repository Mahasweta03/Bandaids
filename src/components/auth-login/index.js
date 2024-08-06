// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../../firebase";
// import { Link } from "react-router-dom";
// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  
//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-in-container">
//       <form onSubmit={signIn}>
//         <h1>Log In to your Account</h1>
        
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} required></input>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)} required></input>
//         <button type="submit">Log In</button>
//         <p>Don't have an Account? <span><Link to="/SignUp">Register</Link></span></p>
//       </form>
//     </div>
//   );
// };

// export default SignIn;

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/Login-amico.png"
import images from '../../assets/images/BAND AID.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'


import { useNavigate } from "react-router-dom";

import '../auth-login/login.scss'


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();
  const handleCloseError = () => {
    setError(null); // Clear the error
  };


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        history("/Authdetails")
        
      })
      .catch((error) => {
        console.log(error);
          if (error.code!== "auth/email-in-database" || "auth/password"){
          setError("Login Failed. Please check your credentials.");
        } else{
          setError(error.message)
        }
      });
  };

  return (
    <div className="sign-in-container">
      <Link className='logo' to='/'>
        <img src={images} alt="logo"/>
      </Link>
      <form className="login" onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit">Log In</button>
        {/* <button type="button" className="google-button" onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle} /> Sign In with Google</button> */}
        
        <img src={loginImage} alt="login" /> 
        <p className="con-log">
          Don't have an Account?{" "}
          <span>
            <Link to={{ pathname: "/SignUp", state: { isNewUser: true } }}>
              Register
            </Link>
          </span>
        </p>
        <p className="pass_reset"><Link to={{pathname: "/PasswordReset"}}>Forgot your password? </Link></p>
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

export default SignIn;

