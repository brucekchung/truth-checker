import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanArticle, cleanWatsonAnalysis, cleanAuthor, cleanSiteRating } from '../../cleaner'
import { cleanArticleAction, errorAction, ratingAction } from '../../actions/actionIndex'
import { destructureUrl, bbbRating, watsonToneAnalysis, googleAuthor } from '../../api'
import './Search.css'
import { func, object, string, oneOfType } from 'prop-types'
import cleanUrl from 'url-clean'
import { Nav } from '../../components/Nav/Nav'
import loading from '../../assets/Infinity-loading.gif'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      searching: false
    }
  }

  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  handleClick = () => {
    this.setState({
      input: '',
      searching: true
    })

    this.parseArticle()
  }

  parseArticle = async () => {
    const url = cleanUrl(this.state.input)
    const response = await destructureUrl(url)
    
    if (response.errorCode) {
      this.props.sendError(response)
    } else {
      this.sendArticle(response)
    }  
  }

  sendArticle = (response) => {
    const cleaned = cleanArticle(response)

    this.props.sendCleanArticle(cleaned)
    this.props.sendError(null)
    this.props.history.push('./result')
    this.getRating()
  }

  getRating = async () => {
    const organization = this.props.cleanArticle.siteName
    const articleText = this.props.cleanArticle.text
    const author = this.props.cleanArticle.author

    const orgData = bbbRating(organization)
    const watsonAnalysis = watsonToneAnalysis(articleText)
    const authorData = author ? googleAuthor(author) : 'none'

    const rating = await Promise.all([orgData, watsonAnalysis, authorData])
    this.cleanRating(rating)
  }

  cleanRating = (rating) => {
    const websiteRating = cleanSiteRating(rating[0].SearchResults)
    const articleRating = cleanWatsonAnalysis(rating[1])
    const authorRating = rating[2] === 'none' ? 'none' : cleanAuthor(rating[2])

    this.props.sendRating(
      {
        website: websiteRating,
        author: authorRating,
        article: articleRating
      }
    )
  }

  componentDidUpdate(newProps) {
    if ((newProps.rating !== this.props.rating) && this.state.searching) {
      this.setState({searching: false}) 
    }
  }

  render() {
    return (
      <div className="Search">
        {
          this.state.searching &&
          <img className="loading-gif" alt="loading-gif" src={loading} />
        }
        <input
          value={this.state.input}
          placeholder="paste URL link"
          onChange={this.handleInput}
        />
        <button
          onClick={this.handleClick}
        >CHECK
        </button>
        <Nav />
      </div>
    )
  }
}

Search.propTypes = {
  cleanArticle: object,
  sendError: func,
  sendRating: func,
  sendCleanArticle: func,
  history: object,
  rating: oneOfType([object, string])
}

export const mapState = (state) => ({
  cleanArticle: state.cleanArticle,
  rating: state.rating
})

export const mapDispatch = (dispatch) => ({
  sendError: (error) => dispatch(errorAction(error)),
  sendRating: (rating) => dispatch(ratingAction(rating)),
  sendCleanArticle: (article) => dispatch(cleanArticleAction(article))
})

export default connect(mapState, mapDispatch)(Search)