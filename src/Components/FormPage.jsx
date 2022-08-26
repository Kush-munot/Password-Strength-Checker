import React from 'react'
import { Grid,} from '@mui/material';
import img from '../Assets/bg-image.png'


const FormPage = () => {
    return (
        <div>
            <Grid container spacing={2} columns={16}
                sx={{
                    margin: '0',
                    backgroundImage: { img },
                    height: '100vh',
                    width: '100%',
                }}
            >
                <Grid item md={12} xs={16} sx={{
                    backgroundColor: 'rgba(184, 214, 204, 0.26)',
                    height:'450px',
                    position:'relative',
                    top:70,
                    left:'160px',
                    borderRadius:'50px'

                }}>
                    <Grid item md={8} xs={16}>
                        
                    </Grid>
                    <Grid item md={4} xs={16}>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FormPage