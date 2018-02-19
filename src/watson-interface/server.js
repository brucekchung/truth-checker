const express = require('express');
const app = express();

const watson = require('watson-developer-cloud')
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')

app.listen(3001, () => {
  console.log('Watson-interface running on localhost:3001');
});

app.get('/token', (request, response) => {

  response.status(200).json({"name": "Bruce"})
})

// const toneAnalyzer = new ToneAnalyzerV3({
//   username: 'brucekchung@gmail.com',
//   password: 'Ecurb1987!',
//   version_date: '2017-09-21'
// })

// const params = {
//   'tone_input': require('tone.json'),
//   'content_type': 'application/json'
// }

// toneAnalyzer.tone(params, function(error, response) {
//   if (error)
//     console.log('error:', error)
//   else
//     console.log(JSON.stringify(response, null, 2))
//   }
// )
//sdk

//find key
//const = username, 