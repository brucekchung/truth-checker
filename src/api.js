import { key } from './apiKey'

export const destructureUrl = async (url) => {
  try {
    const diffBot = `https://api.diffbot.com/v3/analyze?token=${key}&url=${url}`
    const response = await fetch(diffBot)

    return await response.json()
  } catch (error) {
    console.log('error')
    return error
  }
}

const token = 'e6Y1tz8eIBs0Xar_FMQB2cJZ2LKv90PGttIBsWq4xRl8A7CUhag61Nu1DmwBvVad-wu1UeZpdRfQ3RTfz1yW4ki24Vg0hD9H7gWG1Q6HI-DhdolOmcazID2pzMHkr0bCJ269Z3VlrKg2dTZdgwYIZBBq5sMJyVmMxZsw5NVArlJcWqCembpDnfEHO_UGtZib2sywers0Ecy7zu0W0R6RNLwMwpVsxR9SZFWY7vXWVdyj4Jh3G7pQM4d_pJ97kU-fl5iFR3oCmXy1UGwuZE_KyL0dzFl99emvBfNVq1aPfPK9GhXyiDSsjLIfRdj72pAbNKHa7CViw-o_q0U3sDLBnKcoUX3dRBPRaUW6BUzERBsDzj6_ndmFiicrBtv9BW3BQPAORIdMypGJ1s_vsfVyJqXAXHybY3b_miofeIdi1V1VF0FmMoAlqe5zEY0Py5kk-vh0fSn-oztDngUImrVqor5kcG9a17C5WkH_fRLeFCW0H1Ryi4U2iwBb00sqqgg-B15OtnB48gh9u0K5CA3CSHzd4H2JCymWYo3K80d3JJS4595hH-e8Wz5InfRpREMq2SC9MEGI_RdWTzTYjcEuSLqeyR-DqreNoNc7HCP7NTe-nvLbeTebeAFNwHfaejNTX-awoANyaZR1gqMVKkQbpnkUc2s'

export const authorize = async() => {
  const url = `https://api.bbb.org/token`
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'Ecurb1987',
      username: 'brucekchung@gmail.com',
      password: 'Ecurb1987'
    }),
    headers: {'Content-Type': 'application/json'}
  })
  //'Content-Type': 'application/x-www-form-urlencoded'
  //JSON.stringify({
    //   grant_type: 'Ecurb1987',
    //   username: 'brucekchung@gmail.com',
    //   password: 'Ecurb1987'
    // }),
  console.log('authorize respons: ', response)
}

// export const signUpUser = async (email, password, name ) => {
//   await fetch('http://localhost:3000/api/users/new', {
//     method: 'POST',
//     body: JSON.stringify({email, password, name}),
//     headers: {'Content-Type': 'application/json'},
//   });
// };