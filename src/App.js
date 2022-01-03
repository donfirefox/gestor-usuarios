import { useState } from "react";

import Card from "./components/Card";
import Container from "./components/Container";

import Lista from "./components/Lista";
import UserForm from "./components/UserForm";


export default function App() {

  const [usuarios, setUsuarios] = useState([])


  

  const submit = usuario=> {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }



  return (
    <div style={{marginTop:'5%'}}>
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
        <UserForm submit={submit} />
        </div>
      </Card>
      <Card>
        <ul>
          {usuarios.map(u => 
            <li key='u.mail'>{`${u.name} ${u.lastname} ${u.mail}`}</li>
          )}
        </ul>
      </Card>
      <Lista usuarios={usuarios} />
    </Container>
    </div>
  );
}
