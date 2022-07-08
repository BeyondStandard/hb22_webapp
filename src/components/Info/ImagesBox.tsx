import * as React from "react"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import { Paper, useTheme } from "@mui/material"

export default function ImagesBox() {
    const theme = useTheme()
    return (
        <Paper
            style={{
                // backgroundColor: theme.palette.secondary.main,
                border: "2px solid lightblue",
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
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ height: "5rem" }}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Paper>
    )
}

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
]
