/* eslint-disable */
import { 
  destructureUrl, 
  bbbRating, 
  watsonToneAnalysis, 
  googleAuthor
} from './api'
import { dbKey, bbbKey } from './apiKey'
import { mockApiData } from './mockData'

describe('api calls', () => {
  let wrapper

  beforeEach(() => {
    wrapper = 

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockApiData.url)
    }))
  })

  it('destructureUrl should call the correct url when an input is added', () => {
    const inputUrl = 'www.awesomesite.com'
    const expectedUrl = 'https://api.diffbot.com/v3/analyze?token=990cf59a16e44503c8346bb435efbeaa&url=www.awesomesite.com'

    destructureUrl(inputUrl)
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl)
  })

  it('destructureUrl should return an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }))

    const result = destructureUrl('stuff')
    expect(result).rejects.toEqual(Error('could not fetch diffbot'))
  })

  it('bbbRating should make a fetch request with the correct parameters', () => {
    const organization = 'CNN Travel'

    bbbRating(organization)
    expect(window.fetch).toHaveBeenCalled()
  })

  it('bbbRating calls fetch with the correct data', () => {
    const expectedFetchBody = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bbbKey}`
      }
    }

  })

//   // AddGroceryForm.test.js

// it('calls fetch with the correct data when adding a new grocery', () => {
//   const expectedFetchBody = {
//     method: 'POST',
//     body: JSON.stringify({ grocery: mockGrocery }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }

//   renderedComponent.setState({grocery: mockGrocery})
//   renderedComponent.instance().handleAddGrocery(mockEvent)
//   expect(window.fetch).toHaveBeenCalledWith('/api/v1/groceries', expectedFetchBody)
// })

  it('bbbRating should return a error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))
    const organization = 'CNN Travel'

    const result = bbbRating(organization)
    expect(result).rejects.toEqual(Error('could not get bbb rating'))
  })

  it('watsonToneAnalysis should be called with the correct parameters', () => {
    const text = 'testing and testing and testing'

    watsonToneAnalysis(text)
    expect(window.fetch).toHaveBeenCalled()
  })

  it('watsonToneAnalysis should return an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const text = 'stuff'
    const result = watsonToneAnalysis(text)
    expect(result).rejects.toEqual(Error('could not get watson analysis'))
  })

  it('googleAuthor should call fetch with the correct parameters', () => {
    const author = 'Brophus'

    googleAuthor(author)
    expect(window.fetch).toHaveBeenCalled()
  })

  it('googleAuthor should throw an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const result = googleAuthor('brophus')
    expect(result).rejects.toEqual(Error('could not get googleAuthor data'))
  })
})










