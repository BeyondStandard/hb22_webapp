import React from "react"
import { Grid } from "@mui/material"

function AudioLoadingAnimation() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh" }}
        >
            <Grid item>
                <div className="boxContainer">
                    <div className="box box1"></div>
                    <div className="box box2"></div>
                    <div className="box box3"></div>
                    <div className="box box4"></div>
                    <div className="box box5"></div>
                </div>
            </Grid>
        </Grid>
    )
}

export default AudioLoadingAnimation
