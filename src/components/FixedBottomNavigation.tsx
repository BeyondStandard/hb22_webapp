import * as React from "react"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ReadMoreIcon from "@mui/icons-material/ReadMore"
import Paper from "@mui/material/Paper"

interface NavProps {
    setSubPages: CallableFunction
}

const FixedBottomNavigation: React.FC<NavProps> = ({
    setSubPages,
}: NavProps) => {
    const [value, setValue] = React.useState(0)
    const ref = React.useRef<HTMLDivElement>(null)

    return (
        <Box component="div" sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper
                sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                        setSubPages(newValue)
                    }}
                >
                    <BottomNavigationAction
                        label="Car"
                        icon={<DirectionsCarIcon />}
                    />
                    <BottomNavigationAction
                        label="Information"
                        icon={<AssignmentIcon />}
                    />
                    <BottomNavigationAction
                        label="Further Reading"
                        icon={<ReadMoreIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default FixedBottomNavigation
