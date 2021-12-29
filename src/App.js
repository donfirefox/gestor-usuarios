import Card from "./components/Card";
import Container from "./components/Container";
import Input from "./components/Input";
import useFormulario from "./hooks/useFormulario";

export default function App() {
  const [formulario, handleChange] = useFormulario({ name: "", lastname: "" });

  console.log(formulario);

  return (
    <Container>
      <Card>
        <div style={{padding: 20}}>
          <form>
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
          </form>
        </div>
      </Card>
    </Container>
  );
}
