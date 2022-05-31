import { Button } from '@mui/material'
import React from 'react'

export default function RoundedButton({ label }) {
  return (
    <Button
      variant="contained"
      size="large"
      style={{
        borderRadius: '50%',
        padding: '1.5em 1.5em',
        fontSize: '1.5em'
      }}
    >
      {label}
    </Button>
  )
}
