import React from 'react'
import Markdown from "markdown-to-jsx";
import raw from "raw.macro";

function Home() {
  const readme = raw("./README.md")
  const footstyle = {
    // width: '100%',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%'
    // backgroundColor: '#003366'
  }


  return (
    <div style={footstyle}>
      <Markdown>{readme}</Markdown>
    </div>
  )
}

export default Home
