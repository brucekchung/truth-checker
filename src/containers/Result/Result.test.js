import React from 'react'
import { Result, mapState } from './Result'
import { shallow } from 'enzyme'
import { mockState } from '../../mockData'

describe('Result', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Result />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should display an error if an error object is passed', () => {
    const error = {
      errorCode: 500,
      error: 'stuff'
    }
    const wrapper = shallow(<Result error={error} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('mapState should return the correct data', () => {
    const actual = mapState(mockState.result)
    const expected = {
      error: 'stuff',
      cleanArticle: 'stuff',
      rating: 'A+'
    }

    expect(actual).toEqual(expected)
  })
})