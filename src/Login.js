import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = () => [
        this.props.login(this.state.email, this.state.passwd)
    ]

    render() {
        const errorMessages = {
            'auth/wrong-password': 'Senha incorreta.',
            'auth/invalid-email': 'E-mail inválido.',
            'auth/user-not-found': 'E-mail não cadastrado.'
        }
        return (
            <div>
                <h4>Login</h4>
                <input type='text' onChange={this.handleChange('email')} placeholder='email' />
                <input type='password' onChange={this.handleChange('passwd')} placeholder='senha' />
                <button type='button' onClick={this.login}>Logar</button>
                {
                    this.props.isAuthError && <p>
                    <b>Erro: </b>{errorMessages[this.props.authError]}</p>
                }
            </div>
        )
    }
}
export default Login