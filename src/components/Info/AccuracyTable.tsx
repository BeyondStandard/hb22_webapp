import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { styled, useTheme } from "@mui/material"
import { Float } from "@react-three/drei"

function createData(name: string, accuracy: string) {
    return { name, accuracy }
}

// const rows = [
//     createData("Frozen yoghurt", 159),
//     createData("Ice cream sandwich", 237),
//     createData("Eclair", 262),
//     createData("Cupcake", 305),
//     createData("Gingerbread", 356),
// ]

const types = [
    "Bus",
    "Minivan",
    "Pick Up",
    "Sportscar",
    "Jeep",
    "Truck",
    "Crossover",
    "Limusine",
    "In Motion",
]

const Root = styled("div")({})

// interface IArrayProps {
//     type: string
//     accurracy: string
// }
interface IProps {
    data: Record<number, number>
}

interface ArrayProps {
    name: string
    accuracy: string
}

const AccuracyTable: React.FC<IProps> = ({ data }) => {
    const theme = useTheme()
    const rows: Array<ArrayProps> = []
    for (let i = 0; i < 9; i++) {
        rows.push(createData(types[i], data[i].toFixed(3)))
    }

    rows.sort(function (a, b) {
        return +b.accuracy - +a.accuracy
    })

    return (
        <Root>
            <TableContainer
                component={Paper}
                style={{
                    margin: "2rem auto 2rem auto",
                    maxWidth: "25rem",
                    border: `2px solid ${theme.palette.info.main}`,
                }}
            >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Car Type</TableCell>
                            <TableCell align="right">Accuracy</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.accuracy}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Root>
    )
}

export default AccuracyTable
