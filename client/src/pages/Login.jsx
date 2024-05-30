import { useState } from "react";
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
      <form onSubmit={loginUser}>
        <Input type="email" label="Correo electrónico" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
        <Input type="password" label="Contraseña" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
        <Button color='primary' variant='flat' type='submit'>Acceder</Button>
      </form>
    </div>
  )
}
