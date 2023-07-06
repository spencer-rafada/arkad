import { useState } from 'react'
import axios from 'axios'

export const usePostData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [responseMsg, setResponseMsg] = useState(null)

  const postData = async (url, data) => {
    setIsLoading(true)

    console.log(url)
    try {
      const response = await axios.post(url, data)
      if (response) {
        setResponseMsg(response)
      }
    } catch (error) {
      setError(error)
    }

    setIsLoading(false)
  }

  return { postData, isLoading, error, responseMsg }
}
