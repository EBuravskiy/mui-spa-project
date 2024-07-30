import { TableRow, TableCell, TextField, Stack, Button } from "@mui/material"

export const TableRows = () => {
    return (
        <>
            <TableRow sx={{
                '&:last-child td, &:last-child th': {border: 0}
            }}>
                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <span>Cell</span>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                </TableCell>
            </TableRow>

            <TableRow sx={{
                '&:last-child td, &:last-child th': {border: 0}
            }}>
                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <TextField required></TextField>
                </TableCell>

                <TableCell sx={{
                    padding: "10px 5px 10px 0",
                }}>
                    <Stack direction="column">
                        <Button variant="outline" color="primary">Confirm</Button>
                        <Button variant="outline" color="primary">Clear</Button>
                    </Stack>
                </TableCell>
            </TableRow>
        </>
    )
}