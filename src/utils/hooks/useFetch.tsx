import { useEffect, useState } from "react"
import axios from "axios"
import { IDataProps } from "../../types/data"

function useFetch(url: string) {
    const [data, setData] = useState<IDataProps>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        let time = new Date().getTime()
        axios
            .get(url)
            .then((response) => {
                time = new Date().getTime() - time
                response.data.time = time
                // response.data.car_type = "electric"
                response.data.probability = JSON.parse(
                    response.data.probability,
                )
                setData(response.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    const refetch = () => {
        setLoading(true)
        axios
            .get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return { data, loading, error, refetch }
}

export default useFetch
