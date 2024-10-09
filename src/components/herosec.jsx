import { Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Heroimg from '../assets/hero-img (2).png'
import Dot from '../assets/Dot.png'

function Herosec() {
  return (
    <>

      <Box className='my-5'>
        <Toolbar className='justify-content-evenly'>
          <Box>
            <Typography variant='h2' >
              Lessons and insights
            </Typography>
            <Typography variant='h2' color='success' >
              from 8 years
            </Typography>
            <Typography variant='body1'  >
              Where to grow your business as a photographer: site or social media?
            </Typography>
            <Button className='my-3 py-2' variant="contained" color="success">
              Registrar
            </Button>
          </Box>
          <Box>
            <img src={Heroimg} alt="Hero-img" />
          </Box>
        </Toolbar>
        <Box className='text-center mt-5'>
          <img src={Dot} alt="dot" />
        </Box>
      </Box>
    </>
  )
}

export default Herosec