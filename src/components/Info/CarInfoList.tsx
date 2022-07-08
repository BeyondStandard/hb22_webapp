import * as React from "react"
import { useTheme, Grid, Typography } from "@mui/material"

export default function CarInfoList() {
    const theme = useTheme()
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ margin: "2rem 0 2rem 0" }}
        >
            <Grid item xs={3}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h5">Example</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="gray">
                            Car Type
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h5">Example</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="gray">
                            Engine Type
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h5">Example</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="gray">
                            Speed
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
