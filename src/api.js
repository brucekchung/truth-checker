import { dbKey, bbbKey } from './apiKey'

export const destructureUrl = async (url) => {
  const diffBot = `https://api.diffbot.com/v3/analyze?token=${dbKey}&url=${url}`
  
  try {
    const response = await fetch(diffBot)
    
    if (response.status < 300) {
     return await response.json()
    
    } else {
      throw new Error ('could not fetch diffbot')
    }
  
  } catch (error) {
    throw error //previously return error
  }
}

export const bbbRating = async(organization) => {
  const url = `https://api.bbb.org/api/orgs/search?organizationNameExact=${organization}`
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bbbKey}`
      }
    })

    if (response.status < 300) {
      return await response.json()

    } else {
      throw new Error ('could not get bbb rating')
    }
  
  } catch (error) {
    throw error
  }
}

export const watsonToneAnalysis = async (articleText) => {
  const requestObj = {
    tone_input: articleText,
    content_type: 'text/plain',
  }

  try {
    const response = await fetch('/toneAnalyzer', {
      method: 'POST',
      body: JSON.stringify(requestObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status < 300) {
      return response.json()

    } else {
      throw new Error ('could not get watson analysis')
    }

  } catch (error) {
    throw (error)
  }
}

export const googleAuthor = async (author) => {
  try {
    const response = await fetch('/googleAuthor', {
      method: 'POST',
      body: JSON.stringify({name: author}),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.status < 300) {
      return response.json()
      
    } else {
      throw new Error ('could not get googleAuthor data')
    } 
  } catch (error) {
    throw error
  }
}
