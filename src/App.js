import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import './App.scss'
import ToggleButton from '../src/components/ToggleButton';
// import BookButton from '../src/components/BookButton'
// import Appointment from './components/Appointment';
import UserLogo from './components/Authentication';
import SignIn from './components/auth-login';
import SignUp from './components/auth-signup';
import AuthDetails from './components/Authdetails/Authdetails';
import PasswordReset from './components/auth-passwordreset';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/SignIn' || location.pathname === '/SignUp' || location.pathname === '/PasswordReset' || location.pathname === '/Authdetails';

  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
      {/* <BookButton/> */}
      {/* <ToggleButton /> */}
      {/* <UserLogo/> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {!isAuthPage && <ToggleButton />}
      {!isAuthPage && <UserLogo />}
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="appointment" element={<Appointment/>} /> */}
          <Route path="work" element={<Work />} /> 
        </Route>  
        
      </Routes>
      <Routes>
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="PasswordReset" element={<PasswordReset />} />
        <Route path="Authdetails" element={<AuthDetails/>} />
        
      </Routes>
         
    </>
  )
}

export default App;
