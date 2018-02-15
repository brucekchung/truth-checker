import { key } from './apiKey'

export const destructureUrl = async (url) => {
  const diffBot = `https://api.diffbot.com/v3/analyze?token=${key}&url=${url}`
  const response = await fetch(diffBot)

  return await response.json()
}