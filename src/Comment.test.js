import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('should renderv text', () => {
    const comment = {
        comment: 'test'
    }
    const wrapper = render(<Comment c={comment} />)
    expect(wrapper.text()).toBe('Comentário: test')
})

it('should render empty', () => {
    const wrapper = render(<Comment c={comment} />)
    expect(wrapper.text()).toBe('Comentário: vazio')
})