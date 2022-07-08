import React, { useState, useEffect } from "react"
import Moment from "moment"
import { Typography } from "@mui/material"

function Clock() {
    const [date, setDate] = useState(new Date())

    function refreshClock() {
        setDate(new Date())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    return (
        <Typography variant="body1" component="div" gutterBottom color="gray">
            {Moment(date).format("hh:mm").toString()}
        </Typography>
    )
}

export default Clock
