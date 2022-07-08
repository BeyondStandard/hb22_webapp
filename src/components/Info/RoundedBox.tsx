import * as React from "react"
import { Grid, Paper, Typography, useTheme } from "@mui/material"

export default function RoundedBox() {
    const theme = useTheme()
    return (
        <Paper
            elevation={0}
            style={{
                maxWidth: "25rem",
                // backgroundColor: theme.palette.secondary.main,
                border: "2px solid lightblue",
                margin: "2rem auto 2rem auto",
                // borderBottomRightRadius: "50px",
                // borderTopRightRadius: "25%",
                // borderBottomLeftRadius: "25%",
                // borderTopLeftRadius: "25%",
                borderRadius: "50px",
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
        </Paper>
    )
}
