import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchData = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await axios.get(url)
        setData(response.data.data)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return { data, isLoading, error }
}
