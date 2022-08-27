import { Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




function createData(Pool, Elements, Pool_Size) {
    return { Pool, Elements, Pool_Size };
}

const rows = [
    createData('Digits', '0-9', 10),
    createData('Lower case Letters', 'a-z', 26),
    createData('Upper Case Letters', 'A-Z', 26),
    createData('Latin Letters', 'a-z A-Z', 52),
    createData('Alphanumeric', '0-9 a-z', 36),
    createData('Alphanumeric + Uppercase', '0-9 a-z A-Z', 62),
    createData('Special Symbols', "`~!@#$%^&*-=_+|;':", 10)
];


const PasswordEntropy = () => {
    return (
        <div id='Password-Entropy' style={{
            backgroundColor: '#ffff',
            padding: '30px 150px',
            textAlign: 'left',
        }}>
            <Typography sx={{
                width: '100%',
                height: '100px',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 800,
                fontSize: '38px',
                textAlign: 'center',
                letterSpacing: '-0.01em',
                color: '#1A1D71',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                Password Entropy
            </Typography>

            <Typography sx={{
                width: '100%',
                height: '100px',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                textAlign: 'left',
                letterSpacing: '-0.01em',
                color: '#1A1D71',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                Password Entropy signifies a measure of password strength, i.e., how effective a password is against adversaries who try to guess it or use a brute-force attack.
                Therefore, in principle, the greater the entropy, the better a password, at least when it comes to resisting brute force attacks.
            </Typography>

            <Typography sx={{
                width: '100%',
                height: '100px',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                textAlign: 'left',
                letterSpacing: '-0.01em',
                color: '#1A1D71',
                marginTop: '60px',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                For each common symbol type (lower case letters, upper case letters, numbers, etc.), enter how many characters of that type there are in your password. The calculator does not require you to enter the password - you're 100% safe😊😇🥳
            </Typography>

            <Typography sx={{
                width: '100%',
                height: '50px',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                textAlign: 'left',
                letterSpacing: '-0.01em',
                color: '#1A1D71',
                marginTop: '30px',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                Here's a mathematical recipe for how to calculate password entropy:
            </Typography>

            <Typography sx={{
                width: '100%',
                fontFamily: 'Nunito',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
                textAlign: 'left',
                letterSpacing: '-0.01em',
                color: '#21E1E1',
                '@media (max-width:780px)': {
                    width: '90%',
                    height: '100px',
                    fontSize: '28px',
                    lineHeight: '45px',
                }
            }}>
                Entropy = Length Of Password * ( Log base 2( R )) where R is The Pool Size.
            </Typography>

            <TableContainer component={Paper} sx={{ marginTop: '50px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pool</TableCell>
                            <TableCell align="left">Elements</TableCell>
                            <TableCell align="left">Pool_Size</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Pool}
                                </TableCell>
                                <TableCell align="left">{row.Elements}</TableCell>
                                <TableCell align="left">{row.Pool_Size}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default PasswordEntropy