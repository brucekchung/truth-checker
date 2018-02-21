import { combinedScore } from './helper'
import { mock } from './mockData'

describe('helper', () => {

  it('should return a single score', () => {
    const actual = combinedScore(mock.rating)
    const expected = 64

    expect(actual).toEqual(expected)
  })
})