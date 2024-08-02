import React, { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { DocumentIcon, FolderIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'

export function FileSystemWithDragAndDrop({ file }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDraggedOver, setIsDraggedOver] = useState(false)
  const [isBeingDragged, setIsBeingDragged] = useState(false)
  const [isDropped, setIsDropped] = useState(false)

  const onDragEnd = (e) => {
    e.stopPropagation()
    setIsBeingDragged(false)
  }

  const onDragStart = (e) => {
    e.stopPropagation()
    setIsBeingDragged(true)
  }

  const onDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggedOver(true)
  }

  const onDragLeave = (e) => {
    e.stopPropagation()
    setIsDraggedOver(false)
  }

  const onDrop = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsDropped(true)
    setIsDraggedOver(false)
    setTimeout(() => setIsDropped(false), 2000)
  }

  const shouldChangeBackgroundColor =
    isDraggedOver && !isBeingDragged && file.files

  const shouldChangeDroppedBackgroundColor = isDropped && file.files

  return (
    <li
      key={file.name}
      draggable
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDrop={onDrop}
    >
      <span
        className={`flex items-center gap-1.5 py-1 pr-4 w-fit ${shouldChangeBackgroundColor ? 'bg-green-100' : ''}`}
        style={{
          backgroundColor: shouldChangeDroppedBackgroundColor
            ? 'lightblue'
            : '',
        }}
      >
        {file.files && file.files.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="flex"
            >
              <ChevronRightIcon className="size-4 text-gray-500" />
            </motion.span>
          </button>
        )}

        {file.files ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${
              file.files.length === 0 ? 'ml-[22px]' : ''
            }`}
          />
        ) : (
          <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
        )}
        {file.name}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="pl-6 overflow-hidden flex flex-col justify-end"
          >
            {file.files?.map((file) => (
              <FileSystemWithDragAndDrop file={file} key={file.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  )
}
