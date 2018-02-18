import React from 'react'
import { connect } from 'react-redux'
import { cleanArticle } from '../../cleaner'

export const Result = ({ rawContent, cleanArticle }) => {

  if(cleanArticle) {
    const { title, type, author, date, siteName, text} = cleanArticle
    return (
      <div>
        <p>title: {title}</p>
        <p>type: {type}</p>
        <p>author: {author}</p>
        <p>date: {date}</p>
        <p>siteName: {siteName}</p>
        <p>text: {text}</p>
      </div>
    )
  } else {
    //return null later
    return (
      <div>
        Result container
        example url: 
        https://www.cnn.com/travel/article/passenger-planes-future-look/index.html
        http://www.independent.co.uk/voices/holocaust-israel-poland-history-difficult-acknowledge-netanyahu-jewish-polish-government-a8212071.html
      </div>
    )
  }
}

const mapState = (state) => ({
  rawContent: state.rawContent,
  cleanArticle: state.cleanArticle,
})

export default connect(mapState)(Result)