import React, { useState, useEffect } from "react"
import Moment from "moment"
import { Typography, styled } from "@mui/material"

const ClockContainer = styled("div")({
    float: "right",
    marginRight: "1rem",
    marginTop: "1rem",
})

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
        <ClockContainer>
            <Typography variant="h6" component="div" gutterBottom color="white">
                {Moment(date).format("hh:mm").toString()}
            </Typography>
        </ClockContainer>
    )
}

export default Clock
