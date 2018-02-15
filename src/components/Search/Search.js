import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendUrlAction, destructureContentAction } from '../../actions/actionIndex'
import { destructureUrl } from '../../api'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  componentDidMount() {
    console.log('cdm, ', this.props)
  }

  handleInput = (e) => {
    this.setState({input: e.target.value})
  }

  handleClick = async () => {
    const url = this.state.input

    this.props.sendUrl(url)
    const response = await destructureUrl(url)

    this.props.sendContent(response)
    console.log('response: ', response)
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

const mapDispatch = (dispatch) => ({
  sendUrl: (url) => dispatch(sendUrlAction(url)),
  sendContent: (content) => dispatch(destructureContentAction(content))
})

export default connect(null, mapDispatch)(Search)