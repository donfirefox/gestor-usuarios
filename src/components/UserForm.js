import Input from "./Input";
import Buttom from "./Buttom";
import useFormulario from "../hooks/useFormulario";

export default function UserForm({submit}) {

  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    mail: "",
  });

  const handletSubmit = (e) => {
    e.preventDefault()
    submit(formulario)
    reset(formulario)
  }

  return (
    <form onSubmit={handletSubmit}>
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
  );
}
