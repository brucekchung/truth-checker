const express = require('express');
const app = express();
const user = require('../user')
const watson = require('watson-developer-cloud')
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')
const toneAnalyzer = new ToneAnalyzerV3(user)
const bodyParser = require('body-parser')
const scholar = require('google-scholar')
//nodemon - will constantly refresh

app.use(bodyParser.json())

app.listen(3001, () => {
  console.log('Watson-interface running on localhost:3001')
})

app.get('/', (request, response) => {
  response.send('WE CAN DO WHATEVER WE WANt!')
})

app.post('/toneAnalyzer', (request, response) => {
  const params = request.body

  toneAnalyzer.tone(params, (error, res) => {
    if (error) {
      console.log('error:', error)
    } else {
      return response.status(200).send(res)
    }
  })
})

app.post('/googleAuthor', (request, response) => {
  const author = request.body.name
  console.log('author: ', author)

  scholar.search(author, (error, res) => {
    if (error) {
      console.log('error:', error)
    } else {
      return response.status(200).send(res)
    }
  })
})

