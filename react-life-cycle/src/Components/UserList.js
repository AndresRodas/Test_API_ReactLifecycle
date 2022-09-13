import { connect } from "react-redux"
import { useState, useEffect } from "react";
import User from "./User";

const UserList = (props) => {

  const [UserList, setUserList] = useState([])

  useEffect(() => {
    setUserList(props.Usuario.usuario)
  })

  return (
    <div>
      <h1>USER LIST</h1>
      <ul>
        {UserList.map(user => (
          <li key={user.id}>
            <div>
              <User user={user} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    Usuario: state.Usuario
  }
}

export default connect(mapStateToProps)(UserList);