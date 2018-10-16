import React from 'react'

const User = props => {
    return (
        <div>
            Usuário: {props.email}
            <button onClick={props.logout}>Sair</button>
        </div>
    )
}
export default User