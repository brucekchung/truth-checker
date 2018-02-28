import React from 'react'
import './Example.css'

export const Example = () => (
  <div className="Example">
    <h2>Examples </h2>
    <h4>Copy and paste any of the following links into the search bar to see how Truth-check responds to a variety of sources:</h4>
    <div className='card'>
      <h5>Features tone of bias against a political figure</h5>
      <p>https://www.bloomberg.com/news/articles/2018-01-09/trump-loving-farmers-let-him-know-that-they-also-love-free-trade</p>
    </div>
    <div className='card'>
      <h5>Informative article about travel</h5>
      <p>https://www.cnn.com/travel/article/passenger-planes-future-look/index.html</p>
    </div>
    <div className='card'>
      <h5>Satirical article from The Onion</h5>
      <p>https://www.theonion.com/nra-calls-for-teachers-to-keep-loaded-gun-pointed-at-cl-1819575763</p>
    </div>
    <div className='card'>
      <h5>Article from a polarizing site (Brietbart News) containing a somewhat racy view</h5>
      <p>http://www.breitbart.com/big-journalism/2018/02/27/jorge-ramos-very-sad-latino-trump-voters-turned-backs-on-immigrants/</p>
    </div>
    <div className='card'>
      <h5>Article from a polarizing site (Brietbart News) on school shootings</h5>
      <p>http://www.breitbart.com/big-government/2018/02/27/poll-americans-blame-school-shooting-government-not-guns/</p>
    </div>
  </div>
)