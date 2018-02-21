export const cleanArticle = (article) => {
  const { title, type } = article
  const { author, date, siteName, text, authorUrl, pageUrl } = article.objects[0]

  return {
    title,
    type,
    author,
    date,
    siteName,
    text, 
    authorUrl,
    pageUrl  
  }
}

export const cleanWatsonAnalysis = (analysis) => {
  const anger = analysis.document_tone.tone_categories[0].tones[0].score
  const fear = analysis.document_tone.tone_categories[0].tones[3].score
  const analytical = analysis.document_tone.tone_categories[1].tones[0].score

  const bias = (anger + fear)/2
  const neutral = analytical - bias
  
  return {
    anger,
    fear,
    analytical,
    bias,
    neutral
  }
}

export const cleanAuthor = (authorData) => {
  const searchLength = authorData.count
  const citations = authorData.results.reduce(
    (total, article) => total + article.citedCount, 0)

  return {
    searchLength,
    citations
  }
}

export const cleanSiteRating = (site) => {
  if (!site.length) {
    return 'no matches found'

  } else {
    const match = site[0]
    const ratingImage = match.RatingIcons[0].Url
    const split = ratingImage.split('-')
    const separate = split[1].split('.')
    const rating = separate[0]

    return rating ? rating : 'no rating'
  }
}


