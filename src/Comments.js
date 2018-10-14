import React, { Component } from 'react'

import Comment from './Comment'

export default class Comments extends Component {
    render() {
        const keys = Object.keys(this.props.comments)
        return (
            <div>
                {keys.map(key => <Comment key={key} c={this.props.comments[key]} />)}
            </div>
        )
    }
}