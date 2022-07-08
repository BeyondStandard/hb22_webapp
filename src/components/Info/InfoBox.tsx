import * as React from "react"
import { Grid, Paper, useTheme } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"

export default function CarInfoList() {
    const theme = useTheme()
    return (
        <Paper
            elevation={0}
            style={{
                maxWidth: "25rem",
                backgroundColor: theme.palette.secondary.main,
                margin: "auto",
            }}
        >
            <Grid
                container
                justifyContent="center"
                alignContent="center"
                direction="row"
                style={{ textAlign: "center", padding: "1rem" }}
            >
                <Grid item xs={2}>
                    <InfoIcon fontSize="medium" />
                </Grid>
                <Grid item xs={10}>
                    Hier können Sie alle Informationen über dieses Fahrzeug
                    einsehen.
                </Grid>
            </Grid>
        </Paper>
    )
}
