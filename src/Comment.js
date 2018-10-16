import React from 'react'

const Comment = ({ c }) => {
    let comment = 'vazio'
    let email = 'vazio'
    if (c) {
        if (c.comment) {
            comment = c.comment
        }
        if (c.email) {
            email = c.email
        }
    }
    return (
        <div>
            {email} - {comment}
            <hr />
        </div>
    )
}

export default Comment