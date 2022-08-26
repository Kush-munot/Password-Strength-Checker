import React from 'react'
import { Grid, Paper, Stack, Typography } from '@mui/material';
import img from '../Assets/bg-image.png'


const FormPage = () => {
    return (
        <div>
            <Paper sx={{
                backgroundImage: `url(${img})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}>
                <Grid container spacing={2} columns={16}
                    sx={{
                        margin: '0',
                        backgroundImage: { img },
                        height: '100vh',
                        width: '100%',
                    }}
                >
                    <Stack direction='row' spacing={2}>
                        {/* LOGO */}
                        <Typography sx={{
                            position: 'relative',
                            width: '195px',
                            height: '65px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 800,
                            fontSize: '32px',
                            lineHeight: '65px',
                            textAlign: 'center',
                            letterSpacing: '-0.03em',
                            color: '#FFFFFF',
                        }}>
                            UNLOCK
                        </Typography>


                        <Typography sx={{
                            position: 'absolute',
                            width: '196px',
                            height: '33px',
                            left: '260px',
                            top: '17px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '33px',
                            letterSpacing: '-0.01em',
                            color: '#FFFFFF',
                        }}>
                            Password Entropy
                        </Typography>

                        <Typography sx={{
                            position: 'absolute',
                            width: '196px',
                            height: '33px',
                            left: '460px',
                            top: '17px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '33px',
                            letterSpacing: '-0.01em',
                            color: '#FFFFFF',
                        }}>
                            Examples
                        </Typography>
                        <Typography>Contact Me</Typography>
                    </Stack>
                    <Grid item xs={8}>

                    </Grid>
                    <Grid item xs={8}>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default FormPage