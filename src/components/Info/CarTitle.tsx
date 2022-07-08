import * as React from "react"
import { Typography, styled } from "@mui/material"

const TitleContainer = styled("div")({
    paddingTop: "2rem",
    textAlign: "center",
})

export default function CarTitle() {
    return (
        <TitleContainer>
            <Typography variant="h3">Car Title</Typography>
            <Typography variant="subtitle1" color="gray">
                Car Subtitle
            </Typography>
        </TitleContainer>
    )
}
