// import {watson} from 'watson-developer-cloud'
const watson = require('watson-developer-cloud')

export const authorization = new watson.AuthorizationV1({
  username: 'un',
  password: 'pw',
  url: 'https://stream.watsonplatform.net/authorization/api', // Speech tokens
});

authorization.getToken({
  url: 'https://stream.watsonplatform.net/text-to-speech/api'
},
 (err, token) => {
   if (!token) {
     console.log('error:', err)
   } else {
     console.log(token)
     return token
   } 
})

