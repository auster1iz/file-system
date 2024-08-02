import React from 'react'
import { FileSystemComponent } from './components/FileSystemComponent'
import { FILES } from './constants/files'

function App() {
  return (
    <div className="pl-10 pt-10">
      <ul>
        {FILES.map((node) => (
          <FileSystemComponent node={node} key={node.name} />
        ))}
      </ul>
    </div>
  )
}

export default App
