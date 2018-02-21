import { errorReducer } from './errorReducer'

const mockAction = {
  type: 'ERROR',
  payload: 'hello'
}

const mockFail = {
  type: 'WRONG_TYPE'
}

describe('errorReducer', () => {

  it('should return the payload if type matches', () => {
    const actual = errorReducer(null, mockAction)
    const expected = 'hello'

    expect(actual).toEqual(expected)
  })

  it('should return the default state if type does not match', () => {
    const actual = errorReducer(null, mockFail)
    const expected = null

    expect(actual).toEqual(expected)
  })
})

