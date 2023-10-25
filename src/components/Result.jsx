import { Box, styled } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'

export default function 
() {
    const [src, setSrc] = useState('')
    const {htmlData, cssData, jsData} = useContext(DataContext);
    useEffect(() => {
      const timer = setTimeout(() => {
        setSrc(srcCode);
      }, 3000)

      return () => clearTimeout(timer)
    }, [htmlData, cssData, jsData])

    const srcCode = `
        <html>
        <head><style>${cssData}</style></head>
            <body>${htmlData}</body>
            <script>${jsData}</script>
        </html>
    `

  return (
    <Box className='output'>
        <iframe className='outputFrame' srcDoc={srcCode} title='Output' sandbox='allow-scripts' width='100%' height='100%' />
    </Box>
  )
}
