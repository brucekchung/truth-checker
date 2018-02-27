import { 
  combinedScore,
  normalizeZeroToHundred,
  convertScore 
} from './helper'
import { mock } from './mockData'

describe('helper', () => {

  it('combineScore should return a single score', () => {
    const actual = combinedScore(mock.rating)
    const expected = 64

    expect(actual).toEqual(expected)
  })

  it('normalizeZeroToHundred should return a score between 0 and 100', () => {
    let actual = normalizeZeroToHundred(7600, 0, 10000)
    let expected = 76

    expect(actual).toEqual(expected)

    actual = normalizeZeroToHundred(.44, 0, 0.5)
    expected = 88

    expect(actual).toEqual(expected)
  })

  it('normalizeZeroToHundred should return a score between 0 and 100 even if the input falls outside the min and max', () => {
    const actual = normalizeZeroToHundred(-.2, 0, 0.5)
    const expected = 0

    expect(actual).toEqual(expected)
  })

  it('convertScore should return a 0-100 score based of a letter', () => {
    let actual = convertScore('A+')
    let expected = 100

    expect(actual).toEqual(expected)

    actual = convertScore('D')
    expected = 50

    expect(actual).toEqual(expected)
  })

  it('convertScore should return "no score" if a letter grade is not given', () => {
    const actual = convertScore()
    const expected = 'no score'

    expect(actual).toEqual(expected)
  })
})