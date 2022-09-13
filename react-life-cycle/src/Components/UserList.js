import { useSelector } from "react-redux"
import { useState, useEffect } from "react";
import User from "./User";

const UserList = () => {

  const [UserList, setUserList] = useState([])
  const usuario = useSelector((state) => state.Usuario.usuario)

  // eslint-disable-next-line
  useEffect(() => {
    setUserList(usuario)
  })

  return (
    <div className="card">
      <div className="flex flex-row flex-wrap card-container">
        {UserList.map(user => (
          <div key={user.id} className="flex align-items-center justify-content-center px-4 py-4">
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList;