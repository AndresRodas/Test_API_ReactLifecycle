import { useState } from "react";
import { connect } from "react-redux";
import { AccionEliminarUsuarios } from "../Redux/actions/UserAction";

const User = (props) => {   

    const [User, setUser] = useState(props.user)
    
    const handleDelete = async () => {
        props.AccionEliminarUsuarios(User.id)
    }

    return (
        <div>
            <h2>{User.name}</h2>
            <h3>Username:</h3><h4>{User.username}</h4>
            <h3>Phone:</h3><h4>{User.phone}</h4>
            <h3>Email:</h3><h4>{User.email}</h4>
            <button onClick={handleDelete}>Eliminar usuario</button>
        </div>
    );
}

const mapDispatchToProps = {
    AccionEliminarUsuarios
}

export default connect(null, mapDispatchToProps)(User)