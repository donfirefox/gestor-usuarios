export default function Lista({ usuarios }) {
  console.log(usuarios);
  return (
    <table>
      <thead>
        <tr>
          <td>Nombre</td>
          <td>Apellido</td>
          <td>Email</td>
        </tr>
      </thead>

      <tbody>
        {usuarios.map((u) => {
          return (
            <tr key='u.mail'>
              <td>{u.name}</td>
              <td>{u.lastname}</td>
              <td>{u.mail}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
