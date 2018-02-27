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
  beforeEach(() => {
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

  it('bbbRating calls fetch with the correct parameters', () => {
    const expectedUrl = `https://api.bbb.org/api/orgs/search?organizationNameExact=CNN Travel`
    const expectedFetchBody = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bbbKey}`
      }
    }

    bbbRating('CNN Travel')
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedFetchBody)
  })

  it('bbbRating should return a error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))
    const organization = 'CNN Travel'

    const result = bbbRating(organization)
    expect(result).rejects.toEqual(Error('could not get bbb rating'))
  })

  it('watsonToneAnalysis should be called with the correct parameters', () => {
    const expectedUrl = '/toneAnalyzer'
    const articleText = 'example string to analyze'
    const requestObj = {
      tone_input: articleText,
      content_type: 'text/plain',
    }
    const expectedFetchBody = {
      method: 'POST',
      body: JSON.stringify(requestObj),
      headers: {
        'Content-Type': 'application/json',
      },
    }

    watsonToneAnalysis(articleText)
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedFetchBody)
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
    const expectedUrl = '/googleAuthor'
    const expectedFetchBody = {
      method: 'POST',
      body: JSON.stringify({name: 'Orson Scott Card'}),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    googleAuthor('Orson Scott Card')
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedFetchBody)
  })

  it('googleAuthor should throw an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    const result = googleAuthor('brophus')
    expect(result).rejects.toEqual(Error('could not get googleAuthor data'))
  })
})
