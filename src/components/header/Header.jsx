import './header.scss'
import logo from '../../img/icons/logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'>
            <img src={logo} alt='logo' />
            <span>FASHION</span>
          </div>
          <div className='header__nav'>
            <ul>
              <li>
                <a href='#!'>CATALOGUE</a>
              </li>
              <li>
                <a href='#!'>FASHION</a>
              </li>
              <li>
                <a href='#!'>FAVORITE</a>
              </li>
              <li>
                <a href='#!'>LIFESTYLE</a>
              </li>
              <li>
                <a className='header__nav-btn' href='#!'>
                  SIGN UP
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
