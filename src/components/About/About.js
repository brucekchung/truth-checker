import React from 'react'

export const About = (asdf) => (
  <div>
    {
      //console.log('about props: ', asdf)
    }
    <h1>About</h1>
    <h4>created by</h4>
    <h2>Bruce Chung</h2>
    <h4>A Turing Student Project</h4>
    <p>
      According to the Pew Research Center, 
      two-thirds (67%) of Americans report they get at least some of their news from social media (Aug 2017).
      Facebook leads social media sites as a news outlet and is largely uncontrolled.
      Users can post 'fake news' and reach a large user base.  
      This is a concerning issue - especially in light of reports of Russian interference in the 2016 election.
      This site attempts the first step in creating what Facebook or Twitter should do to make their user base more aware.
      The first step is being able to assess the validity of an online news article in a completely automated way by simply having access to the url.
      The url (online article) should be assessed according to a set of criteria and scored for the possiblity of being valid, unbiased news.
      The end goal is that Facebook and other social media giants will one day score every article posted,
      so that readers are alert to the implications.
    </p>
  </div>
)