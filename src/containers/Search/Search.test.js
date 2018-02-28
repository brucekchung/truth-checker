/*eslint-disable*/
import React from 'react'
import { shallow } from 'enzyme'
import { Search, mapState, mapDispatch } from './Search'
import { mock, mockState } from '../../mockData'
import * as apiCalls from '../../api'
import * as cleaner from '../../cleaner'

describe('Search', () => {
  let wrapper
  const mockFunction = jest.fn()
  const mockHistory = {push: jest.fn()}
  
  beforeEach(() => {
    wrapper = shallow(<Search 
      sendError={mockFunction}
      sendCleanArticle={mockFunction}
      sendRating={mockFunction}
      history={mockHistory}
    />)
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

  it('handleClick should setState', () => {
    wrapper.instance().parseArticle = jest.fn()
    wrapper.instance().handleClick()

    expect(wrapper.instance().state.searching).toEqual(true)
  })

  it('parseArticle should call destructureUrl', () => {
    apiCalls.destructureUrl = jest.fn().mockImplementation(() => Promise.resolve({
        response: 'article destructured'
    }))
    wrapper.instance().sendArticle = jest.fn()

    wrapper.instance().parseArticle()
    expect(apiCalls.destructureUrl).toHaveBeenCalled()
  })

  it('parseArticle should send an Error if the response has an error code', async () => {
    apiCalls.destructureUrl = jest.fn().mockImplementation(() => Promise.resolve({
        errorCode: 404
    }))
    wrapper.instance().sendArticle = jest.fn()

    wrapper.instance().parseArticle()
    expect(await mockFunction).toHaveBeenCalled()
  })

  it('sendArticle should call getRating', () => {
    cleaner.cleanArticle = jest.fn().mockImplementation(() => Promise.resolve({
        article: 'formatted'
    }))
    wrapper.instance().getRating = jest.fn()

    wrapper.instance().sendArticle(mock)
    expect(mockFunction).toHaveBeenCalled()
  })

  it('handleInput should setState based on the input', () => {
    const event = {target: {value: 'stuff'}}
    
    wrapper.instance().handleInput(event)
    expect(wrapper.instance().state.input).toEqual('stuff')
  })

  it('cleanRating should call sendRating', () => {
    const mockClean = jest.fn().mockImplementation(() => {
        article: 'formatted'
    })
    cleaner.cleanSiteRating = mockClean
    cleaner.cleanWatsonAnalysis = mockClean
    cleaner.cleanAuthor = mockClean

    wrapper.instance().cleanRating([[],[],[]])
    expect(mockFunction).toHaveBeenCalled()
  })

  it('componentDidUpdate should setState of searching to false if params are met', () => {
    wrapper = shallow(<Search rating='okay' />)
    wrapper.instance().setState({searching: true})

    const newProp = {rating: 'good'}
    wrapper.instance().componentDidUpdate(newProp)
    
    expect(wrapper.instance().state.searching).toEqual(false)
  })
})