import React, { Component } from 'react'

export default class NewComment extends Component {
    state = {
        newComment: ''
    }

    handleChange = event => {
        this.setState({
            newComment: event.target.value
        })
    }

    sendComment = () => {
        this.props.sendComment(this.state.newComment);
        this.setState({
            newComment: ''
        })
    }

    render() {
        return (
            <div className='form-group'>
                <textarea className='form-control' value={this.state.newComment} onChange={this.handleChange}></textarea>
                <button className='btn btn-primary' onClick={this.sendComment}>Enviar</button>
            </div>
        )
    }
}