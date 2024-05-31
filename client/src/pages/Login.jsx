import { useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/button";


export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = (e) => {
    e.preventDefault();
  }

  return (

    <div>
      <Card className="cardCenter">
        <CardBody>
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
