/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import { Example } from './Example'

describe('Example', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Example />)

    expect(wrapper).toMatchSnapshot()
  })
})