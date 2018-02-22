import React from 'react'
import { Nav } from './Nav'
import { shallow } from 'enzyme'

describe('Nav', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Nav />)

    expect(wrapper).toMatchSnapshot()
  })
})