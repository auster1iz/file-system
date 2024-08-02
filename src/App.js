import React from 'react'
import { FILES } from './constants/files'
import { FileSystemWithDragAndDrop } from './components/FileSystemWithDragAndDrop'

function App() {
  return (
    <div className="pl-10 pt-10">
      <ul>
        {FILES.map((file) => (
          <FileSystemWithDragAndDrop file={file} key={file.name} />
        ))}
      </ul>
    </div>
  )
}

export default App
