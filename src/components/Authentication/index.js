import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserLogo =() =>{
    return (
        <div className='u-logo'>
            <Link to ='/SignIn'><FontAwesomeIcon icon={faUser} /></Link>
        </div>
    );
};
export default UserLogo;