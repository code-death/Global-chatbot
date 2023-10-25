import React from 'react'
import RingLoader from 'react-spinners/RingLoader'

export default function Loader() {
  return (
    <div className='wrapper'>
    <RingLoader className='loader' color='#36d7b7' size={150} />
    </div>
    
  )
}
