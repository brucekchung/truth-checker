import React from 'react'
import { Methods } from './Methods'
import { shallow } from 'enzyme'

describe('Methods', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Methods />)

    expect(wrapper).toMatchSnapshot()
  })
})