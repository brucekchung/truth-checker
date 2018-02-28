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

  it.skip('handleClick should setState', () => {
    wrapper.instance().handleClick()

    expect(wrapper.instance().state.searching).toEqual(true)
  })

  it.skip('handleClick should do many things', () => {
    //cleans and destructures url
    //may send error code
    //cleans the article
    //sends an error and article to store
    //calls this.getRating
    //pushes to result component
  })

  it('handleInput should setState based on the input', () => {
    const event = {target: {value: 'stuff'}}
    
    wrapper.instance().handleInput(event)
    expect(wrapper.instance().state.input).toEqual('stuff')
  })

  it.skip('getRating should do many, many things', () => {
    //makes api calls to bbb, watson, author
    //cleans all three
    //sends rating up
  })

  it.skip('componentDidUpdate should setState of searching to false if params are met', () => {
    wrapper = shallow(<Search rating='stuff' />)
    const newProp = {rating: 'good'}

    wrapper.instance().setState({searching: true})
    //console.log('state: ', wrapper.instance().state)
    
    wrapper.instance().componentDidUpdate(newProp)
    //console.log('props: ', wrapper.prop('rating'))
  })
})