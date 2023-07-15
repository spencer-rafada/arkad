import { useState } from 'react'
import axios from 'axios'

export const usePostData = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const postData = async (url, data) => {
    setIsLoading(true)

    try {
      const response = await axios.post(url, data)
      if (response.data) {
        setIsLoading(false)
        return response.data
      }
    } catch (error) {
      setError(error)
    }

    setIsLoading(false)
  }

  return { postData, isLoading, error }
}
