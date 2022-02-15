import { MenuItems } from './MenuItems'
import './Navbar.css'
// import { Button } from '../Button';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        
        <div className="navigation">
            
      
        <nav className="NavbarItems" >
           
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'bi bi-x' : 'bi bi-list'}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index} className='nav-item'>
                            <Link className={item.cName} to={item.url} onClick={closeMobileMenu}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

            </ul>
            {/* <Button>Sign Up</Button> */}
        </nav>
        <div className="Marq">
    <marquee class="que">
                <p class="line">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                
            </marquee>
            </div>
        </div>
        
    );
}

export default Navbar;
