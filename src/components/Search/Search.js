import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanArticle } from '../../cleaner'
import { siteRating } from '../../helper'
import { cleanArticleAction, errorAction, ratingAction } from '../../actions/actionIndex'
import { destructureUrl, bbbRating } from '../../api'
import './Search.css'
import cleanUrl from 'url-clean'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleInput = (e) => {
    this.setState({input: e.target.value})
  }

  handleClick = async () => {
    const url = cleanUrl(this.state.input)
    const response = await destructureUrl(url)

    console.log('url: ', this.state.input)
    console.log('cleaned: ', url)

    if (response.errorCode) {
      this.props.sendError(response)

    } else {
      const cleaned = cleanArticle(response)

      this.props.sendCleanArticle(cleaned)
      this.props.sendError(null)
      this.getRating()
    }

    this.props.history.push('./result')
    this.setState({input: ''})
  }

  getRating = async () => {
    const organization = this.props.cleanArticle.siteName
    const orgData = await bbbRating(organization)
    const websiteRating = siteRating(orgData.SearchResults)

    this.props.sendRating(
      {
        website: websiteRating,
        author: null,
        article: null,
        currency: null,
      }
    )
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

const mapState = (state) => ({
  cleanArticle: state.cleanArticle
})

const mapDispatch = (dispatch) => ({
  sendError: (error) => dispatch(errorAction(error)),
  sendRating: (rating) => dispatch(ratingAction(rating)),
  sendCleanArticle: (article) => dispatch(cleanArticleAction(article)),
})

export default connect(mapState, mapDispatch)(Search)