import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = () => [
        this.props.createAccount(this.state.email, this.state.passwd)
    ]

    render() {
        const errorMessages = {
            'auth/email-already-in-use': 'Email já existe.',
            'auth/invalid-email': 'E-mail inválido.',
            'auth/weak-password': 'Senha muito fraca.'
        }
        return (
            <div>
                <h4>Criar conta</h4>
                <input type='text' onChange={this.handleChange('email')} placeholder='email' />
                <input type='password' onChange={this.handleChange('passwd')} placeholder='senha' />
                <button type='button' onClick={this.createAccount}>Criar Conta</button>
                {
                    this.props.isSignUpError && <p>
                        <b>Erro: </b>{errorMessages[this.props.signUpError]}</p>
                }
                <button onClick={() => this.props.changeScreen('login')}>Já tenho conta. Logar!</button>
            </div>
        )
    }
}
export default SignUp