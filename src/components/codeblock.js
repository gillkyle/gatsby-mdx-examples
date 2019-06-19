// src/components/CodeBlock.js
import React from 'react'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'

export default ({children, live}) => {
  if (live) {
    return (
        <LiveProvider code={children}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
    )
  }
  return (
    <code>
      {children}
    </code>
  )
}