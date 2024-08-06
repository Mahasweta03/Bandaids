import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar';
import './index.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons';


const Layout = () => {
    return( 
        <div className="App">
            <Sidebar/>
            <div className='page'>
                {/* <span className='tags top-tags'>Bandaids</span> */}
                <Outlet/>
                <Link to="/contact" className='floating-button'>
                    <FontAwesomeIcon icon={faMessage} color='#4d4d4e'/>
                </Link>
                
                
            </div>
        </div> 
    )
}

export default Layout;