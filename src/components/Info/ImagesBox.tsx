import * as React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { Paper, useTheme } from "@mui/material"
import AudioPlayer from "./AudioPlayer"
import { IDataProps } from "../../types/data"

interface IProps {
    data: IDataProps
}

const ImagesBox: React.FC<IProps> = ({ data }) => {
    const theme = useTheme()

    // console.log(image)

    const itemData = [
        {
            img: `data:image/jpeg;base64, ${data.probability.Spectrograph}`,
            title: "Spectrograph",
        },
        {
            img: `data:image/jpeg;base64, ${data.probability.Waveform}`,
            title: "Waveform",
        },
    ]

    return (
        <Paper
            style={{
                // backgroundColor: theme.palette.secondary.main,
                border: `2px solid ${theme.palette.info.main}`,
                maxWidth: "25rem",
                margin: "auto",
            }}
        >
            <ImageList
                sx={{
                    width: "20rem",
                    margin: "auto",
                    padding: "1.5rem 0 1.5rem 0",
                }}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={3}>
                        <img
                            // src={`${item.img}?w=248&fit=crop&auto=format`}
                            src={item.img}
                            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            // subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <AudioPlayer file={data.audio_encoded} />
        </Paper>
    )
}

export default ImagesBox
