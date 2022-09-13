import { useState } from "react";
import { useDispatch } from "react-redux";
import { AccionEliminarUsuarios } from "../Redux/actions/UserAction";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const User = (props) => {

    const [User, ] = useState(props.user)
    const dispatch = useDispatch()

    const handleDelete = async () => {
        dispatch(AccionEliminarUsuarios(User.id))
    }

    return (
        <Card title={User.name}>
            <div className="card-container">
                <h3>Nickname: {User.username}</h3>
                <h3>Telefono: {User.phone}</h3>
                <h3>Email: {User.email}</h3>
                <Button onClick={handleDelete} label="Eliminar usuario" className="p-button-danger p-button-rounded" />
            </div>
        </Card>
    )
}

export default User