import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import logoSite from "./../assets/logoSite.png";

export default function Register() {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const registerUser = (e) => {
    e.preventDefault();
  }

  showHeader = false;

  return (
    <div className="containerCenter">
      <Card className="cardCenter">
        <CardBody className="overflowVisible">
          <div className="logoSite register">
            <img src={logoSite} />
          </div>
          <form onSubmit={registerUser}>
            <Input className="inputForm" type="text" label="Nombre de usuario" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <Input className="inputForm" type="email" label="Correo electrónico" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <Input className="inputForm" type="password" label="Contraseña" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            <Button color='primary' variant='flat' fullWidth='true' type='submit'>Registrar</Button>
          </form>
        </CardBody>
      </Card>
      <div className="row">
        <div className="col">
          <Link to='/login'><Button color='default' variant='flat' fullWidth='true' type='submit'>Loguearte</Button></Link>
        </div>
      </div>
    </div>
  )
}
