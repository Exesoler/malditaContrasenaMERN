import { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function Register() {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const registerUser = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Card className="cardCenter">
        <CardBody>
          <form onSubmit={registerUser}>
            <Input type="text" label="Nombre de usuario" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <Input type="email" label="Correo electrónico" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <Input type="password" label="Contraseña" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
            <Button color='primary' variant='flat' type='submit'>Registrar</Button>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
