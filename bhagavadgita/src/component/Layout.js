import './style.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return(
        <>
            <Navbar/>
            <div className='body'>
                <Outlet/>    
            </div>
        </>
    );
}

export default Layout;