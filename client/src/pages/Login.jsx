import { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import logoSite from "./../assets/logoSite.png";


export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault();
  }

  return (

    <div className="containerCenter">
      <Card className="cardCenter">
        <CardBody className="overflowVisible">
          <div className="logoSite login">
            <img src={logoSite} />
          </div>
          <form onSubmit={loginUser}>
            <Input className="inputForm" type="email" label="Correo electrónico" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <Input className="inputForm" type="password" label="Contraseña" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            <Button color='primary' variant='flat' fullWidth='true' type='submit'>Acceder</Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
