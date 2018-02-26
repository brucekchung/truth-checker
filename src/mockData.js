export const mock = {
  article: {
    title: 'Trump4lyfe',
    type: 'article',
    objects: [{
      author: 'Bruce',
      date: 'today',
      siteName: 'Trump4prez4eva.com',
      text: '2016 was a great year',
      pageUrl: 'www.trumplyfe.com'
    }]
  },
  watson: {
    document_tone: {
      tone_categories: [{
        tones: [
          {score: 0.1},
          {score: 0.2},
          {score: 0.3},
          {score: 0.3},
        ]
      },
      {
        tones: [{score: 0.5}]
      }
      ]
    }
  },
  author: {
    count: 100,
    results: [{citedCount: 1}, {citedCount: 3}]
  },
  site: [
    {
      RatingIcons: [{Url: "http://www.bbb.org/ratingicons/lg-A+.png", DeviceType: "web"}]
    }
  ],
  rating: {
    website: 'A+',
    author: {searchLength: 1300},
    article: {neutral: 0.4}
  }
}

export const mockApiData = {
  url: {
    author: 'Bruce',
    text: 'stuff'
  }
}

export const mockState = {
  result: {
    error: 'stuff',
    cleanArticle: 'stuff',
    rating: 'A+'
  },
  search: {
    cleanArticle: 'stuff'
  }
}