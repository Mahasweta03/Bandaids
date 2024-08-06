// import { sendPasswordResetEmail } from "firebase/auth";


// const reset = document.getElementById("reset");
// reset.addEventListener("click", function(event){
// event.preventDefault()

// const email = document.getElementById("email").value;
// sendPasswordResetEmail(auth, email)
// .then(() => {
//     // Password reset email sent!
//     // ..
//     alert("email sent")
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });


// })
import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import resetImage from "../../assets/images/Forgot password.png";
import images from '../../assets/images/BAND AID.png';
import { Link } from "react-router-dom";
import '../auth-passwordreset/reset.scss'



function PasswordReset(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(auth,emalVal).then(data=>{
            alert("If we find your email associated with Bandaids. We will send an email.")
            history("/PasswordReset")
        }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });    
    }
    return(
        <div className="App">
            <h2 className="intro">Welcome BACK!</h2>
            <Link className='logo' to='/'>
                <img src={images} alt="logo"/>
            </Link>
            <form className="reset-container" onSubmit={(e)=>handleSubmit(e)}>
                
                <h1>Forgot Password</h1>
                <input name="email" placeholder="Enter your email"
                /><br/><br/>
                <button>Reset</button>
                <img src={resetImage} alt="reset" />
                <p className="back"><Link to="/SignIn">Log In</Link></p>
            </form>
        </div>
    )
}
export default PasswordReset;
