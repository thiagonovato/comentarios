import React from 'react'

const User = props => {
    return (
        <div>
            <form className='form-inline'>
                Usuário: {props.email}
                <button className='btn btn-dark btn-sm' onClick={props.logout}>Sair</button>
            </form>
        </div>
    )
}
export default User