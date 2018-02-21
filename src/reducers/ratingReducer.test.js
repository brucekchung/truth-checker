import { ratingReducer } from './ratingReducer'

const mockAction = {
  type: 'RATING',
  payload: 'hello'
}

const mockFail = {
  type: 'WRONG_TYPE'
}

describe('ratingReducer', () => {

  it('should return the payload if type matches', () => {
    const actual = ratingReducer(null, mockAction)
    const expected = 'hello'

    expect(actual).toEqual(expected)
  })

  it('should return the default state if type does not match', () => {
    const actual = ratingReducer(null, mockFail)
    const expected = null

    expect(actual).toEqual(expected)
  })
})

