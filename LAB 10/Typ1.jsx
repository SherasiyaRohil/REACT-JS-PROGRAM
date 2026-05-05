// Create a page showing all typography variants (h1–h6, body1, body2, subtitle1,subtitle2, caption). (A)

import React from 'react'
import { Typography } from '@mui/material'
const Typ1 = () => {
  return (
    <>
      <Typography variant="h1" color='primary'>Hello World</Typography>
      <Typography variant="h2" color='secondary'>Hello World</Typography>
      <Typography variant="h3" color='success'>Hello World</Typography>
      <Typography variant="h4" color='warning'>Hello World</Typography>
      <Typography variant="h5" color='primary'>Hello World</Typography>
      <Typography variant="h6" color='info'>Hello World</Typography>

        <Typography variant="body1" color='textPrimary' paddingTop={5}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
        <Typography variant="body2" color='textSecondary'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
        <Typography variant="subtitle1" color='error'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
        <Typography variant="subtitle2" color='textSecondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
        <Typography variant="caption" color='textSecondary'>overline text</Typography>
    </>
    
  )
}

export default Typ1
