import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import '../index.css';

const pages = ['Home', 'FAQs', 'About-Us', 'Contact-Us'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" style={{ backgroundColor: '#FF7A85' }} elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Poppins',
                            fontWeight: 800,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Short.ly
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link to={page} className="Link" >
                                    <MenuItem key={page} onClick={handleCloseNavMenu} style={{ textTransform: 'none' }}>
                                        <Typography textAlign="center" style={{ color: 'black' }}>{page}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Short.ly
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Link to={page} className="Link" >
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}

                                    sx={{
                                        my: 1, mr: 3,
                                        color: 'white',
                                        display: 'block',
                                        textTransform: 'none',

                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        fontSize: '16px'
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Stack direction="row" sx={{
                        flexGrow: 0,
                        '@media (max-width:780px)': {
                            display: 'none',
                        }
                    }}>
                        <Link to="/Login" className='Link'>
                            <Button
                                sx={{
                                    my: 1, mr: 3, color: 'white', display: 'block', textTransform: 'none', fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '16px'
                                }}
                            >
                                Login
                            </Button>
                        </Link>

                        <Link to="/Signup" className='Link'>
                            <Button
                                sx={{
                                    my: 1, mr: 3,
                                    display: 'block',
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    backgroundColor: '#ffffff',
                                    color: '#FF525D',
                                    "&:hover": { backgroundColor: "#ffffff" },
                                }}
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar