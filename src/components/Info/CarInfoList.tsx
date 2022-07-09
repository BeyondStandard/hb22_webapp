import * as React from "react"
import { useTheme, Grid, Typography } from "@mui/material"
import { IDataProps } from "../../types/data"

interface IProps {
    data: IDataProps
}

const CarInfoList: React.FC<IProps> = ({ data }) => {
    const theme = useTheme()
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ margin: "2rem 0 2rem 0" }}
        >
            <Grid item xs={4}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h5" style={{ color: "#caffbf" }}>
                            {data.car_type
                                ? data.probability.winner_label
                                : "4-Wheeler"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="lightgray">
                            Car Type
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h5" style={{ color: "#ffd6e0" }}>
                            {data.engine_type ? data.engine_type : "Diesel"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="lightgray">
                            Engine Type
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                >
                    <Grid item>
                        <Typography variant="h5" style={{ color: "#ffef9f" }}>
                            {data.speed ? data.speed : "63 km/h"}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" color="lightgray">
                            Speed
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CarInfoList
