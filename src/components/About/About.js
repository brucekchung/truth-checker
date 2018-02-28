import React from 'react'
import { object } from 'prop-types'
import './About.css'

export const About = ({ history }) => {
  const goExample = () => {
    history.push('./Example')
  }

  const goMethods = () => {
    history.push('./Methods')
  }

  return (
    <div className="About">
      <h3>Ever wonder if the news on your social media feed is legit?</h3>
      <h3>Paste the article URL in question into the search bar above and News-rater will tell you what it thinks</h3>
      <p>
        According to the Pew Research Center, 
        two-thirds (67%) of Americans report they get at least some of their news from social media (Aug 2017).
        Facebook leads social media sites as a news outlet and is largely uncontrolled.
        Users can post &apos;fake news&apos; and reach a large user base.  
        This is a concerning issue - especially in light of reports of Russian interference in the 2016 election.
        This site attempts the <b>first step in creating what Facebook or Twitter should do</b> to make their user base more aware.
        The first step is being able to assess the validity of an online news article in a completely automated way by simply having access to the url.
        The url (online article) should be assessed according to a set of criteria and scored for the possiblity of being valid, unbiased news.
        The end goal is that <b>Facebook</b> and other social media giants will one day <b>score every article posted</b>,
        so that readers are alert to the implications. Disclaimer: this is NOT a fact-checker!
      </p>
      <div className="redirect">
        <div className="go-example">
          <p>suggested URLs:</p>
          <button onClick={goExample}>Example</button>
        </div>
        <div className="go-methods">
          <p>how scores are formulated:</p>
          <button onClick={goMethods}>Methods</button>
        </div>
      </div>
      <div className="credits">
        <h5>created by:</h5>
        <h5>Bruce Chung</h5>
      </div>
    </div>
  )
}

About.propTypes = {
  history: object
}