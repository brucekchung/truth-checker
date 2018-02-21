import {
  cleanArticle,
  cleanWatsonAnalysis,
  cleanAuthor,
  cleanSiteRating
} from './cleaner'
import { mock } from './mockData'

describe('cleaner', () => {

  it('cleanArticle should format input correctly', () => {
    const actual = cleanArticle(mock.article)
    const expected = {
      title: 'Trump4lyfe',
      type: 'article',
      author: 'Bruce',
      date: 'today',
      siteName: 'Trump4prez4eva.com',
      text: '2016 was a great year',
      authorUrl: undefined,
      pageUrl: 'www.trumplyfe.com'
    }
    
    expect(actual).toEqual(expected)
  })

  it('cleanWatsonAnalysis should format input correctly', () => {
    const actual = cleanWatsonAnalysis(mock.watson)
    const expected = {
      anger: 0.1,
      fear: 0.3,
      analytical: 0.5,
      bias: 0.2,
      neutral: 0.3
    }

    expect(actual).toEqual(expected)
  })

  it('cleanAuthor should format input correctly', () => {
    const actual = cleanAuthor(mock.author)
    const expected = {
      searchLength: 100,
      citations: 4
    }

    expect(actual).toEqual(expected)
  })

  it('cleanSiteRating should format input correctly', () => {
    const actual = cleanSiteRating(mock.site)
    const expected = 'A+'

    expect(actual).toEqual(expected)
  })

  it('cleanSiteRating should return respond properly to an empty array', () => {
    const actual = cleanSiteRating([])
    const expected = 'no matches found'

    expect(actual).toEqual(expected)
  })

})