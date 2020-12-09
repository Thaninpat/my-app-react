import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { MenuItems, MenuItems2 } from './MenuItems';
import { Button } from '../Button';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../SidebarData';
import { IconContext } from 'react-icons';

import Register from '../Register/Register';

import { AuthContext } from '../../context/auth';
function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => setClicked(!clicked);
  const showSidebar = () => setSidebar(!sidebar);

  const navBar = user ? (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='NavbarItems'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h1 className='navbar-logo'>
          React <i className='fab fa-react'> </i>
        </h1>
        <div className='menu-icon' onClick={handleClick}>
          <i
            className={
              clicked
                ? 'fas fa-chevron-circle-down action'
                : 'fas fa-chevron-circle-down'
            }
          ></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button>
          <Link to='/register'>Register</Link>
        </Button>
      </nav>
      {/* Sidebar */}
      <nav className={sidebar ? 'nav-menu2 active' : 'nav-menu2'}>
        <ul className='nav-menu2-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span> {item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  ) : (
    <IconContext.Provider value={{ color: '#fff' }}>
      <nav className='NavbarItems'>
        <div to='#' className='menu-bars' />
        <h1 className='navbar-logo'>
          React <i className='fab fa-react'> </i>
        </h1>
        <div className='menu-icon' onClick={handleClick}>
          <i
            className={
              clicked
                ? 'fas fa-chevron-circle-down action'
                : 'fas fa-chevron-circle-down'
            }
          ></i>
        </div>
        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems2.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button>
          <Link to='/register'>Register</Link>
        </Button>
      </nav>
    </IconContext.Provider>
  );

  return navBar;
}

export default Navbar;
