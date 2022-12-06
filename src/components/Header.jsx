import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className='main-header'>
      <nav>
        <NavLink className='nav-link' to='/' exact>
          Home
        </NavLink>
        <NavLink className='nav-link' to='/user-page'>
          User page
        </NavLink>
        <NavLink className='nav-link' to='/login'>
          Login
        </NavLink>
        <Link className='nav-link' to={'/logout'}>
          Logout
        </Link>
        {/* jei useris prisilogines, tai rodom louguot */}
        {/* jei useris prisilogines, tai userio email */}
        {/* jei neprisilogines login */}
      </nav>
    </header>
  );
}
export default Header;
