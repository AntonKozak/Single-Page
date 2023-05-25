import { Link, NavLink } from 'react-router-dom';

//CSS
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className='container'>
            <ul className='menu'>
              <li className='logo'>
                <Link to ='/'>
                  <span className='fa-brands fa-react'></span> Vejby Pokemons</Link>
              </li>
              <li className='toggle'>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' htmlFor='menu-btn'>
                  <span className='nav-icon'></span>
                </label>
              </li>
              <li className='menu-item'>
                <NavLink to='/'>Home</NavLink>
              </li>
              <li className='menu-item'>
                <NavLink to='/pokemons'>Pokemons</NavLink>
              </li>
              <li className='menu-item'>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li className='menu-item'>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
