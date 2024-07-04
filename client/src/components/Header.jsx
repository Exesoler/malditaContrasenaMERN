import './../styles/Header.css';
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";

import logoSite from "./../assets/logoSite.png";

export default function Navbar() {
  return (
    <header className='contenedor'>
      <div className="fila">
        <div className="col-auto logoContainer">
          <Link to="/"><img src={logoSite} /></Link>
        </div>
        <div className="col actions">
          <Link to={'/login'}><Button color='default' variant='light' type='submit'>Cerrar sesión</Button></Link>
        </div>
      </div>
    </header>
  )
}
