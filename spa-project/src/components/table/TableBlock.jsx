import {Box, Button}  from "@mui/material";
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { TableRows } from "./TableRows";

export const TableBlock = () => {
    return (
        <>
        <Box display="flex" alignItems='center' padding="10px">
            <Button
                variant='outlined'
                component="a"
                href='/'
                endIcon={<UpdateRoundedIcon></UpdateRoundedIcon>}>
                <Box display="flex">
                    <Typography component="span">
                        Update
                    </Typography>
                </Box>
            </Button>
            </Box>
            <TableContainer sx={{ 
                maxHeight: "85vh" 
            }}>
                <Table stickyHeader sx={{
                    minWidth: 650,
                    marginBottom: 10
                }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Дата регистрации компании</TableCell>
                            <TableCell>Название подписи компании</TableCell>
                            <TableCell>Название документа</TableCell>
                            <TableCell>Статус документа</TableCell>
                            <TableCell>Тип документа</TableCell>
                            <TableCell>Номер сотрудника</TableCell>
                            <TableCell>Дата регистрации сотрудника</TableCell>
                            <TableCell>Имя подписи сотрудника</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRows></TableRows>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}