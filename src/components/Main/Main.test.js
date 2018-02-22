import React from 'react'
import { Main } from './Main'
import { shallow } from 'enzyme'

describe('Main', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Main />)

    expect(wrapper).toMatchSnapshot()
  })
})