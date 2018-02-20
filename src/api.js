import { dbKey, bbbKey } from './apiKey'

export const destructureUrl = async (url) => {
  try {
    const diffBot = `https://api.diffbot.com/v3/analyze?token=${dbKey}&url=${url}`
    const response = await fetch(diffBot)

    return await response.json()
  } catch (error) {
    return error
  }
}

export const bbbRating = async(organization) => {
  console.log('org: ', organization)
  const url = `https://api.bbb.org/api/orgs/search?organizationNameExact=${organization}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bbbKey}`
    }
  })

  return await response.json()
}

export const getToneAnalysis = async (articleText) => {
  const requestObj = {
    tone_input: articleText,
    content_type: 'text/plain',
  }

  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(requestObj),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await response.json()
}
