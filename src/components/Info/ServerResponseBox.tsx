import * as React from "react"
import { Grid, Paper, Typography, useTheme } from "@mui/material"

export default function ServerResponseBox() {
    const theme = useTheme()
    return (
        <div
            style={{
                maxWidth: "25rem",
                border: "2px solid lightblue",
                margin: "2rem auto 2rem auto",
                color: "white",
                backgroundColor: "rgb(255, 255, 255, 0.1)",
            }}
        >
            <Grid
                container
                justifyContent="space-between"
                alignContent="center"
                direction="row"
                style={{ padding: "1rem" }}
            >
                <Grid item xs={6}>
                    <Typography variant="body1">Server Response</Typography>
                </Grid>
                <Grid item xs="auto">
                    <Typography variant="body1">1234 ms</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
