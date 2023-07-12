import { useState } from 'react'
import axios from 'axios'

export function usePutData() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [responseMsg, setResponseMsg] = useState(null)

  const putData = async (url, data) => {
    setIsLoading(true)

    try {
      const response = await axios.put(url, data)
      if (response) {
        setResponseMsg(response)
      }
    } catch (error) {
      setError(error)
    }
    setIsLoading(false)
  }

  return { putData, isLoading, error, responseMsg }
}
