import {
  cleanArticleAction,
  errorAction,
  ratingAction
} from './actionIndex'

describe('actionIndex', () => {
  it('cleanArticleAction should add the argument to payload', () => {
    const actual = cleanArticleAction('testing...')
    const expected = {
      type: 'CLEAN_ARTICLE',
      payload: 'testing...'
    }

    expect(actual).toEqual(expected)
  })

  it('errorAction should add the argument to payload', () => {
    const actual = errorAction('error')
    const expected = {
      type: 'ERROR',
      payload: 'error'
    }

    expect(actual).toEqual(expected)
  })

  it('ratingAction should add the argument to payload', () => {
    const actual = ratingAction('nice')
    const expected = {
      type: 'RATING',
      payload: 'nice'
    }

    expect(actual).toEqual(expected)
  })
})