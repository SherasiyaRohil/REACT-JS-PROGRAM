// Display a heading and paragraph using custom colors and font weights. (A)

import React from 'react'
import { Typography } from '@mui/material'

function Pro2() {
  return (
    <>
      <Typography variant="h1" color='primary' fontWeight={700}>Custom Heading</Typography>
      <Typography variant="body1" color='secondary' fontWeight={500}>This is a custom paragraph with a different font weight and color.</Typography>
    </>
  )
}

export default Pro2
