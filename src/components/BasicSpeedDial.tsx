import * as React from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import AssignmentIcon from "@mui/icons-material/Assignment"

const actions = [
    { icon: <DirectionsCarIcon />, name: "Car Info" },
    { icon: <AssignmentIcon />, name: "Information" },
]

export default function BasicSpeedDial() {
    return (
        <Box
            component="div"
            sx={{
                transform: "translateZ(0px)",
                flexGrow: 1,
                position: "absolute",
                right: "1rem",
                bottom: "1rem",
            }}
        >
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}
