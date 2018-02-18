import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cleanArticle } from '../../cleaner'
import { sendUrlAction, destructureContentAction, cleanArticleAction } from '../../actions/actionIndex'
import { destructureUrl, bbbRating } from '../../api'

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
    const cleaned = cleanArticle(response)

    this.props.sendCleanArticle(cleaned)
    this.getOrganization()
  }

  getOrganization = async () => {
    const organization = this.props.cleanArticle.siteName
    const orgData = await bbbRating(organization)

    console.log('orgData: ', orgData)
  }

  render() {
    return (
      <div>
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
  //sendUrl: (url) => dispatch(sendUrlAction(url)),
  //sendContent: (content) => dispatch(destructureContentAction(content)),
  sendCleanArticle: (article) => dispatch(cleanArticleAction(article)),
})

export default connect(mapState, mapDispatch)(Search)