import React from 'react'
import Editor from './Editor'

export default function Code() {
  return (
    <div className='editor'>
        <Editor language='xml'></Editor>
        <Editor language='css'></Editor>
        <Editor language='javascript'></Editor>
    </div>
  )
}
