import './style.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
    return(
        <>
            <Navbar/>
            <div className='body'>
                <Outlet/>    
            </div>
            <Footer/>
        </>
    );
}

export default Layout;