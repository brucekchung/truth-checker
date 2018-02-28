import React from 'react'
import { connect } from 'react-redux'
import { string, oneOfType, object } from 'prop-types'
import { combinedScore } from '../../helper.js'
import './Result.css'

export const Result = ({ error, cleanArticle, rating }) => {
  if (error) {
    return (
      <div className="Result">
        <p>Result could not be displayed</p>
        <p>error code: {error.errorCode}</p>
        <p>error message: {error.error}</p>
      </div>
    )

  } else if (cleanArticle.type) {
    const {title, type, author, date, siteName, text} = cleanArticle

    return (
      <div className="Result">
        {
          !rating.article &&
          <h2>Rating: Pending</h2>
        }

        {
          rating.article &&
          <div className="result-info Result">
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

        <div className="article-info Result">
          <p>title: {title}</p>
          <p>type: {type}</p>
          <p>author: {author}</p>
          <p>date: {date}</p>
          <p>site name: {siteName}</p>
          <p>original text: </p>
          <div className="original-text">
            {text}
          </div>
        </div>
      </div>
    )

  } else {
    return (
      <div className="Result">
        No results to display
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