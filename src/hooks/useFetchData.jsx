import { useEffect, useState } from 'react'
import fetchData from '../services/Api'
export const useFetchData = (endPoint) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        ;(async () => {
            try {
                setLoading(true)
                const res = await fetchData(endPoint)
                console.log(res)

                setData(res)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        })()
    }, [endPoint])
    return { data, loading, error }
}
