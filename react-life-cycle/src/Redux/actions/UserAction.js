export const AgregarUsuarios = 'AGREGAR_USUARIOS'
export const EliminarUsuarios = 'ELIMINAR_USUARIOS'

export const AccionAgregarUsuarios = (users) => {
    return {
        type: AgregarUsuarios,
        payload: users
    }
}

export const AccionEliminarUsuarios = (id) => {
    return {
        type: EliminarUsuarios,
        payload: id
    }
}

