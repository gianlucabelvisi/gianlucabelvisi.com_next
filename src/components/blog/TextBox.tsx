'use client'

import React, { ReactNode, useState } from 'react'

interface TextBoxProps {
  children: ReactNode
  title?: string
  closeable?: boolean
  closeButtonCaption?: string
}

const TextBox: React.FC<TextBoxProps> = ({ 
  children, 
  title = "", 
  closeable = false, 
  closeButtonCaption = "" 
}) => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible && closeable) {
    return null
  }

  return (
    <div className="bg-gray-100 border-l-4 border-blue-600 p-4 my-8 rounded-r-lg shadow-sm">
      {title && (
        <div className="uppercase font-bold text-sm text-gray-700 pb-4 tracking-wide">
          {title}
        </div>
      )}
      
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
      
      {closeButtonCaption && closeable && (
        <button
          onClick={() => setIsVisible(false)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg 
                     transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:ring-offset-2"
        >
          {closeButtonCaption}
        </button>
      )}
    </div>
  )
}

export default TextBox 