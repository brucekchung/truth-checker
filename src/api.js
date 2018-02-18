import { dbKey, bbbKey } from './apiKey'

export const destructureUrl = async (url) => {
  try {
    const diffBot = `https://api.diffbot.com/v3/analyze?token=${dbKey}&url=${url}`
    const response = await fetch(diffBot)

    return await response.json()
  } catch (error) {
    console.log('error')
    return error
  }
}

export const bbbRating = async(organization) => {
  const url = `https://api.bbb.org/api/orgs/search?primaryOrganizationName=${organization}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${bbbKey}`
    }
  })

  return await response.json()
}
