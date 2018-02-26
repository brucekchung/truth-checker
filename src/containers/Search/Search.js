import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanArticle, cleanWatsonAnalysis, cleanAuthor, cleanSiteRating } from '../../cleaner'
import { cleanArticleAction, errorAction, ratingAction } from '../../actions/actionIndex'
import { destructureUrl, bbbRating, watsonToneAnalysis, googleAuthor } from '../../api'
import './Search.css'
import { func, object } from 'prop-types'
import cleanUrl from 'url-clean'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  handleClick = async () => {
    const url = cleanUrl(this.state.input)
    const response = await destructureUrl(url)

    // console.log('url: ', this.state.input)
    // console.log('cleaned: ', url)

    if (response.errorCode) {
      this.props.sendError(response)

    } else {
      const cleaned = cleanArticle(response)
      console.log('props: ', this.props)
      this.props.sendCleanArticle(cleaned)
      this.props.sendError(null)
      this.getRating()
    }

    this.props.history.push('./result')
    this.setState({input: ''})
  }

  getRating = async () => {
    const organization = this.props.cleanArticle.siteName
    const articleText = this.props.cleanArticle.text
    const author = this.props.cleanArticle.author
    // running all async elements at once:
    const orgData = bbbRating(organization)
    const watsonAnalysis = watsonToneAnalysis(articleText)
    const authorData = author ? googleAuthor(author) : 'none'
    // waiting to resolve all:
    const ready = await Promise.all([orgData, watsonAnalysis, authorData])

    if (ready) {
      const websiteRating = cleanSiteRating(ready[0].SearchResults)
      const articleRating = cleanWatsonAnalysis(ready[1])
      const authorRating = ready[2] === 'none' ? 'none' : cleanAuthor(ready[2])

      this.props.sendRating(
        {
          website: websiteRating,
          author: authorRating,
          article: articleRating
        }
      )
    }
  }

  render() {
    return (
      <div className="Search">
        <input
          value={this.state.input}
          onChange={this.handleInput}
        />
        <button
          onClick={this.handleClick}
        >CHECK
        </button>
      </div>
    )
  }
}

Search.propTypes = {
  cleanArticle: object,
  sendError: func,
  sendRating: func,
  sendCleanArticle: func,
  history: object
}

export const mapState = (state) => ({
  cleanArticle: state.cleanArticle
})

export const mapDispatch = (dispatch) => ({
  sendError: (error) => dispatch(errorAction(error)),
  sendRating: (rating) => dispatch(ratingAction(rating)),
  sendCleanArticle: (article) => dispatch(cleanArticleAction(article))
})

export default connect(mapState, mapDispatch)(Search)