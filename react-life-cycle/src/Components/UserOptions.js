import { GetUsers } from "../Services/UserService";
import { useDispatch } from "react-redux";
import { AccionAgregarUsuarios } from "../Redux/actions/UserAction";
import { Button } from 'primereact/button';

const UserOptions = () => {

  const dispatch = useDispatch()

  const handleClick = async () => {
    await GetUsers().then(resp => {
      dispatch(AccionAgregarUsuarios(resp))
    })
  }

  return (
    <div className="card">
      <div className="flex flex-column">
        <h1>Opciones de Usuario</h1>
        <Button onClick={handleClick} label="Cargar Usuarios" className="p-button-success p-button-rounded" />
      </div>
      <div>
      </div>
    </div>
  );
}

export default UserOptions;