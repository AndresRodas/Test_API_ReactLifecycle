import { GetUsers } from "../Services/UserService";
import { connect } from "react-redux";

import { AccionAgregarUsuarios } from "../Redux/actions/UserAction";

const UserOptions = (props) => {

  const handleClick = async () => {
    await GetUsers().then(resp => {
      props.AccionAgregarUsuarios(resp)
    })
  }

  return (
    <div>
      <h1>USER OPTIONS</h1>
      <button onClick={handleClick}>Load Users</button>
    </div>
  );
}

const mapDispatchToProps = {
  AccionAgregarUsuarios
}

export default connect(null, mapDispatchToProps)(UserOptions);
