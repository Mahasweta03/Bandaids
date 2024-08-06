import './index.scss';
import { Link } from 'react-router-dom';
const BookButton = () =>{
    return (
        <div className='Book'>
           
            <Link to="/appointment" className='Book_button'>Book AN Appointment</Link>
        </div>
    );
};    

export default BookButton;