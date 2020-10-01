import React from "react"
import USerCard from "../Molecules/UserCard"
const UsersGrid = ({ users }) => (
    <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {
                users.length === 0
                    ? <h1 className="t3">Cargando....</h1>
                    : users.map(u => (
                        <USerCard
                            key={u.phone}
                            name={u.name.title + " " + u.name.first + " " + u.name.last}
                            username={u.login.username}
                            email={u.email}
                            foto={u.picture.medium}
                            ciudad={u.location.city}
                            pais={u.location.country}
                            telefono={u.phone}
                            edad={u.dob.age}

                        />
                    ))
            }
        </div>
    </div>

)

export default UsersGrid;