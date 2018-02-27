import React from 'react'
import './Methods.css'

export const Methods = () => (
  <div className="Methods">
    <h1>Methods</h1>
    <p>Categories of Evaluation: </p>
    <p>Organization, Author, and Content</p>
    <p>
      Organization - uses the Better Business Bureau (BBB) api. 
      A letter rating A - F is parsed from the data.
    </p>
    <p>
      Author - uses GoogleScholar via node.js module.
      Author data returned includes length of search.
      Citations based of the Author&apos;s works are currently not functioning in the node module.
    </p>
    <p>
      Content - uses the Watson Tone Analyzer api.
      Information parsed includes anger and fear (strong indicators of a biased article)
      and &apos;analytical&apos; - an emotional tone indicating potential for a balanced article.
      Content that scores low in anger/fear and high in analytical is assessed positively, and the reverse negatively.
      Content analysis does not attempt to fact-check.
    </p>
  </div>
)