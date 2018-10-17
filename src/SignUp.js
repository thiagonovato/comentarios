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
                <form className='form-inline'>
                    <input type='text' className='form-control mr-1' onChange={this.handleChange('email')} placeholder='email' />
                    <input type='password' className='form-control mr-1' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button type='button' className='btn btn-primary' onClick={this.createAccount}>Criar Conta</button>
                </form>
                {
                    this.props.isSignUpError &&
                    <div className='card text-white bg-danger mt-2'>
                        <div className='card-header'>Erro ao criar nova conta</div>
                        <div className='card-body'>
                            {errorMessages[this.props.signUpError]}
                        </div>
                    </div>
                }
                <button className='btn' onClick={() => this.props.changeScreen('login')}>Já tenho conta. Logar!</button>
            </div>
        )
    }
}
export default SignUp