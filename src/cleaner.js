export const cleanArticle = (article) => {
  //console.log('cleaner: ', article)
  const { title, type } = article
  const { author, date, siteName, text } = article.objects[0]

  return {
    title,
    type,
    author,
    date,
    siteName,
    text
  }
}