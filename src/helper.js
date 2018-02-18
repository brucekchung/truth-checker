
export const siteRating = (site) => {
  console.log('received sites: ', site.length)

  if (!site.length) {
    return 'no matches found'

  } else {
    const match = site[0]
    const ratingImage = match.RatingIcons[0].Url
    const split = ratingImage.split('-')
    const separate = split[1].split('.')
    const rating = separate[0]

    console.log('rating: ', rating)
    return rating ? rating : 'no rating'
  }
}