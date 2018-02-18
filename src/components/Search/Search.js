import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanArticle } from '../../cleaner'
import { cleanArticleAction, errorAction } from '../../actions/actionIndex'
import { destructureUrl, bbbRating } from '../../api'
import './Search.css'

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
    const url = this.state.input
    const response = await destructureUrl(url)

    if (response.errorCode) {
      console.log('error is: ', response)
      this.props.sendError(response)

    } else {
      const cleaned = cleanArticle(response)

      this.props.sendCleanArticle(cleaned)
      this.props.sendError(null)
      this.getOrganization()
    }
  }

  getOrganization = async () => {
    const organization = this.props.cleanArticle.siteName
    const orgData = await bbbRating(organization)

    console.log('orgData: ', orgData)
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
  sendCleanArticle: (article) => dispatch(cleanArticleAction(article)),
})

export default connect(mapState, mapDispatch)(Search)