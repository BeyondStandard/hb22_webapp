import * as React from "react"
import { styled } from "@mui/material"

const AudioContainer = styled("div")({
    textAlign: "center",
    paddingBottom: "1rem",
})

interface IAudioPlayerProps {
    file: string
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ file }) => {
    // const audio = new Audio("data:audio/wav;base64," + file)

    if (!file) {
        return <AudioContainer>Audio file could not be loaded!</AudioContainer>
    }
    return (
        <AudioContainer>
            <audio controls>
                <source
                    src={"data:audio/wav;base64," + file}
                    type="audio/wav"
                />
                Your browser does not support the audio element.
            </audio>
        </AudioContainer>
    )
}

export default AudioPlayer
