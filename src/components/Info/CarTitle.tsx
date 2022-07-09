import * as React from "react"
import { Typography, styled } from "@mui/material"

const TitleContainer = styled("div")({
    paddingTop: "2rem",
    textAlign: "center",
})

interface ITitleProps {
    carTitle: string
}

const CarTitle: React.FC<ITitleProps> = ({ carTitle }) => {
    return (
        <TitleContainer>
            <Typography variant="h3" style={{ color: "white" }}>
                {carTitle}
            </Typography>
            {/* <Typography variant="subtitle1" color="lightgray">
                Car Subtitle
            </Typography> */}
        </TitleContainer>
    )
}

export default CarTitle
