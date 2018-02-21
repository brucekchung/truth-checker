
export const combinedScore = (ratingObj) => {
  const { website, author, article } = ratingObj
  
  const websiteScore = convertScore(website)
  const authorScore = author !== 'none' ? normalizeZeroToHundred(author.searchLength, 0, 10000) : 'none'
  const articleScore = normalizeZeroToHundred(article.neutral, 0, 0.5)
  //console.log('article neutral: ', article.neutral, Math.round(articleScore))
  // console.log('scores: ', websiteScore, authorScore, articleScore)

  const scoreArray = [websiteScore, authorScore, articleScore]
  const scoreOnlyNumbers = scoreArray.filter(score => typeof score === 'number')

  if (!scoreOnlyNumbers.length) {
    return 'NA'
  } else {
    // console.log('scon: ', scoreOnlyNumbers)
    const combined = scoreOnlyNumbers.reduce(
      (total, score) => total + score, 0)
    // console.log('combined: ', combined)
    return Math.round(combined / scoreOnlyNumbers.length)
  }
}

const normalizeZeroToHundred = (num, min, max) => {
  let result = (num) * (100 - min) / (max - min)
  if (result > 100) result = 100
  if (result < 0) result = 0

  return result
}

const convertScore = (letterGrade) => {
  switch (letterGrade) {
    case 'A+':
      return 100
    case 'A':
      return 95
    case 'B+':
      return 90
    case 'B':
      return 85
    case 'C+':
      return 75
    case 'C':
      return 70
    case 'D+':
      return 60
    case 'D':
      return 50
    case 'F+':
      return 40
    case 'F':
      return 30
    default:
      return 'no score'
  }
}