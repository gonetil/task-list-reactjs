import logo from '../imagenes/freecodecamp-logo.png';
import '../css/Logo.css';

const Logo = (props) => (
    <div className={props.css+'-contenedor'}>
    <img 
      src={logo} 
      className={props.css} alt={props.alt} 
    />
  </div>);

export default Logo;