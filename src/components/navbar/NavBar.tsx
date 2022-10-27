import React from 'react';
import { Link } from "gatsby"
import '../../styles/navbar.scss';

type NavBarElement = (props: NavBarProps) => JSX.Element;
type NavBarProps = {
  activePage: string;
}

const NavBar: NavBarElement = ({ activePage } : NavBarProps) => {
  return (
    <nav>
      <div>
        <h1>Elizabeth Tae</h1>
        <h2>MOTION GRAPHICS DESIGNER</h2>
      </div>
      <div className="links">
        <Link className={activePage === 'home' ? 'active' : ''} to="/">Home</Link>
        <Link className={activePage === 'about' ? 'active' : ''} to="/about">About</Link>
      </div>
    </nav>
  )
}

export default NavBar;
