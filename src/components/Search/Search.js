import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendUrlAction } from '../../actions/actionIndex'

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

  handleClick = () => {
    console.log('sending: ', this.state.input)
    this.props.sendUrl(this.state.input)
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
  sendUrl: (url) => dispatch(sendUrlAction(url))
})

export default connect(null, mapDispatch)(Search)