import './Header.css'
import hooksUpLogo from '.././media/hooksUpLogoCropped.png'
import WeatherToggle from '.././weather/WeatherToggle.js'

const Logo = () => {
  return(
    <div>
      <img className='Header-logo' src={hooksUpLogo} alt="Hooks Up Logo"></img>
    </div>
  )
}

const Header = () => {

  return(
    <div className='Header'>
      <Logo />
      <WeatherToggle hidden={document.weatherWidget.style.display === 'none'} />
    </div>
  );
}

export default Header;