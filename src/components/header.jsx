import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/Logo.png';  

function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static">
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "white" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <img src={logo} alt="Logo" />

                        </IconButton>
                        <Box className="text-black" sx={{ display: "flex", }}>
                            <Link href="#" underline="none">
                                <Typography className="text-black" variant='body1'>Home</Typography>
                            </Link>
                            <Link className='mx-3' href="#" underline="none">
                                <Typography className="text-black" variant='body1'>Service</Typography>
                            </Link>
                            <Link href="#" underline="none">
                                <Typography className="text-black" variant='body1'>Feature</Typography>
                            </Link>
                            <Link href="#" underline="none">
                                <Typography className="text-black mx-3" variant='body1'>Product</Typography>
                            </Link>
                            <Link href="#" underline="none">
                                <Typography className="text-black" variant='body1'>Testimonal</Typography>
                            </Link>
                            <Link href="#" underline="none">
                                <Typography className="text-black mx-3" variant='body1'>FAQ</Typography>
                            </Link>

                        </Box>
                        <Box>
                            <Button className='mx-2' variant="outlined" color="success">
                                Sign-in
                            </Button>
                            <Button variant="contained" color="success">
                                Sign-Up
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;
