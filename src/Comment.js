import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                Comentário: {this.props.c.comment}
            </div>
        )
    }
}