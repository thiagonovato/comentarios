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
                <h4>Entre para comentar:</h4>
                <form className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button type='button' className='btn btn-primary' onClick={this.login}>Logar</button>
                    <button className='btn' onClick={() => this.props.changeScreen('signup')}>Criar conta</button>
                </form>
                {
                    this.props.isAuthError &&
                    <div className='card text-white bg-danger mt-2'>
                        <div className='card-header'>Erro ao entrar</div>
                        <div className='card-body'>
                            <b></b>{errorMessages[this.props.authError]}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default Login