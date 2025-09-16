import './style.css';
import { useNavigate } from 'react-router-dom';
import Drop from './Drop';

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="navbox p-3">
                <nav className="navbar rounded-2 navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                            <h2>Bhagavad Gita</h2>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Chapters
                                    </a>
                                    <ul className="dropdown-menu">
                                        <Drop/>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a style={{cursor:'pointer'}} className="nav-link" onClick={() => navigate('/quotes')}>Quotes</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{cursor:'pointer'}} className="nav-link" onClick={() => navigate('/aboutgita')}>About Gita</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" onClick={() => navigate('/quotes')}>Disabled</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;