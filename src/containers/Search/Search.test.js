import React from 'react'
import { shallow } from 'enzyme'
import { Search, mapState, mapDispatch } from './Search'
import { mockState } from '../../mockData'

describe('Search', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('mapState should return the correct object', () => {
    const actual = mapState(mockState.search)
    const expected = {
      cleanArticle: 'stuff'
    }

    expect(actual).toEqual(expected)
  })

  it('mapDispatch should call dispatch', () => {
    const mockDispatch = jest.fn()
    const call = mapDispatch(mockDispatch)

    call.sendError()

    expect(mockDispatch).toHaveBeenCalled()
  })
})