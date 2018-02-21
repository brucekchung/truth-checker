export const cleanArticleAction = (article) => ({
  type: 'CLEAN_ARTICLE',
  payload: article
})

export const errorAction = (error) => ({
  type: 'ERROR',
  payload: error
})

export const ratingAction = (rating) => ({
  type: 'RATING',
  payload: rating
})