import React from 'react'
import { connect } from 'react-redux'
import { string, oneOfType, object } from 'prop-types'
import { combinedScore } from '../../helper.js'

export const Result = ({ error, cleanArticle, rating }) => {
  if (error) {
    return (
      <div>
        <p>Result could not be displayed</p>
        <p>error code: {error.errorCode}</p>
        <p>error message: {error.error}</p>
      </div>
    )

  } else if (cleanArticle) {
    const {title, type, author, date, siteName, text} = cleanArticle

    return (
      <div>
        {
          !rating &&
          <h2>Rating: Pending</h2>
        }

        {
          rating &&
          <div className="result-info">
            <h2>Rating: {combinedScore(rating)}</h2>
            <h3>Organization: {rating.website}</h3>
            <h3>Author: search {rating.author.searchLength}</h3>
            <h3>
              Content: 
              anger {rating.article.anger}, 
              fear {rating.article.fear}, 
              analytical {rating.article.analytical}
            </h3>
          </div>
        }

        <div className="article-info">
          <p>title: {title}</p>
          <p>type: {type}</p>
          <p>author: {author}</p>
          <p>date: {date}</p>
          <p>site name: {siteName}</p>
          <p>text: {text}</p>
        </div>
      </div>
    )

  } else {
    //return null or keep page? can fine tune examples
    return (
      <div>
        <p>example url: </p>
        <p>https://www.wsj.com/articles/like-peter-thiel-others-feel-alienated-by-silicon-valley-groupthink-1518962400</p>
        <p>https://www.bloomberg.com/news/articles/2018-01-09/trump-loving-farmers-let-him-know-that-they-also-love-free-trade</p>
        <p>https://www.cnn.com/travel/article/passenger-planes-future-look/index.html</p>
        <p>http://www.independent.co.uk/voices/holocaust-israel-poland-history-difficult-acknowledge-netanyahu-jewish-polish-government-a8212071.html</p>
        <p>https://www.washingtonpost.com/?utm_term=.4205470b3748</p>
        <p>https://www.theonion.com/nra-calls-for-teachers-to-keep-loaded-gun-pointed-at-cl-1819575763?utm_content=Main&utm_campaign=SF&utm_source=Facebook&utm_medium=SocialMarketing</p>
        <p>http://www.bbc.com/news/world-us-canada-43088644</p>
        <p>http://www.dancemagazine.com/peter-martins-nycb-investigation-results-2535425336.html?utm_campaign=RebelMouse&socialux=facebook&share_id=3329042&utm_medium=social&utm_content=Dance+Magazine&utm_source=facebook</p>
        <p>https://www.rd.com/advice/parenting/stop-bullying-strategy/</p>
      </div>
    )
  }
}

Result.propTypes = {
  error: object,
  cleanArticle: object,
  rating: oneOfType([object, string])
}

export const mapState = (state) => ({
  error: state.error,
  cleanArticle: state.cleanArticle,
  rating: state.rating
})

export default connect(mapState)(Result)