import React from 'react'
import LoadingStatus from './LoadingStatus'
import { JSROOTVersion } from '@ndmspc/react-jsroot'

function Footer() {
  const footstyle = {
    position: 'fixed',
    width: '100%',
    height: 'auto',
    bottom: '0',
    margin: '0',
    padding: '0'
    // backgroundColor: '#003366'
  }
  return (
    <div id='footer'>
      <footer style={footstyle}>
        <LoadingStatus />
        <JSROOTVersion />
      </footer>
    </div>
  )
}

export default Footer
