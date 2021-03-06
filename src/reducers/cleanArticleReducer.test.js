import { cleanArticleReducer } from './cleanArticleReducer'

const mockAction = {
  type: 'CLEAN_ARTICLE',
  payload: 'hello'
}

const mockFail = {
  type: 'WRONG_TYPE'
}

describe('cleanArticleReducer', () => {

  it('should return the payload if type matches', () => {
    const actual = cleanArticleReducer(undefined, mockAction)
    const expected = 'hello'

    expect(actual).toEqual(expected)
  })

  it('should return the default state if type does not match', () => {
    const actual = cleanArticleReducer(undefined, mockFail)
    const expected = {}

    expect(actual).toEqual(expected)
  })
})

