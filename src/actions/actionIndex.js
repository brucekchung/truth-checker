export const sendUrlAction = (url) => ({
  type: 'SEND_URL',
  payload: url
})

export const destructureContentAction = (content) => ({
  type: 'DESTRUCTURE_CONTENT',
  payload: content
})

export const cleanArticleAction = (article) => ({
  type: 'CLEAN_ARTICLE',
  payload: article
})
