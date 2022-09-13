import { AgregarUsuarios, EliminarUsuarios } from "../actions/UserAction";

const UsuarioInicial = {
  usuario: []
}

const Usuario = (state = UsuarioInicial, action) => {
  switch (action.type) {
    case AgregarUsuarios:
      return {
        ...state,
        usuario: action.payload
      }
    case EliminarUsuarios:
      return {
        ...state,
        usuario: state.usuario.filter((user) => user.id !== action.payload)
      }
    default:
      return state
  }
}

export default Usuario;