import { useState } from "react";
import Buttom from "./components/Buttom";
import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import Lista from "./components/Lista";
import useFormulario from "./hooks/useFormulario";

export default function App() {

  const [usuarios, setUsuarios] = useState([])

  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    mail: "",
  });

  

  const submit = e=> {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset()
  }



  return (
    <div style={{marginTop:'5%'}}>
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit} >
            <Input
              label="Nombre"
              name="name"
              onChange={handleChange}
              value={formulario.name}
            />
            <Input
              label="Apellido"
              name="lastname"
              onChange={handleChange}
              value={formulario.lastname}
            />
            <Input
              label="Correo"
              name="mail"
              onChange={handleChange}
              value={formulario.mail}
            />
            <Buttom>Enviar</Buttom>
          </form>
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map(u => 
            <li key='u.name'>{`${u.name} ${u.lastname} ${u.mail}`}</li>
          )}
        </ul>
      </Card>
      <Lista usuarios={usuarios} />
    </Container>
    </div>
  );
}
