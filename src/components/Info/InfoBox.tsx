import * as React from "react"
import { Grid, useTheme } from "@mui/material"
import QuestionMarkSharpIcon from "@mui/icons-material/QuestionMarkSharp"

interface InfoBoxProps {
    icon?: boolean
    text: string
}

const InfoBox: React.FC<InfoBoxProps> = ({ icon, text }) => {
    const theme = useTheme()
    return (
        <div
            style={{
                maxWidth: "25rem",
                backgroundColor: "rgb(255, 255, 255, 0.1)",
                margin: "auto",
                border: `2px solid ${theme.palette.info.main}`,
                borderRadius: "4px",
            }}
        >
            <Grid
                container
                justifyContent="center"
                alignContent="center"
                direction="row"
                style={{ textAlign: "center", padding: "1rem" }}
            >
                {icon && (
                    <Grid item xs={2}>
                        <QuestionMarkSharpIcon
                            fontSize="medium"
                            style={{ color: "white" }}
                        />
                    </Grid>
                )}
                <Grid item xs={10} style={{ color: "white" }}>
                    {text}
                </Grid>
            </Grid>
        </div>
    )
}

export default InfoBox
