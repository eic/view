import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const navstyle = {
    width: '100%',
    height: 'auto'
  }

  const ulstyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#003366'
  }

  const ilstyle = {
    float: 'left',
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none'
  }
  return (
    <div id='navigation'>
      <nav style={navstyle}>
        <ul style={ulstyle}>
          <Link to='/home'>
            <li style={ilstyle}>Home</li>
          </Link>
          <Link to='/example'>
            <li style={ilstyle}>Example</li>
          </Link>
          <Link to='/browser'>
            <li style={ilstyle}>Browser</li>
          </Link>
          <Link to='/projections'>
            <li style={ilstyle}>Projections</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
