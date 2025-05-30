'use client'

import React, { ReactNode } from 'react'

interface DialogueProps {
  children: ReactNode
  withQuotesBegin?: boolean
  withQuotesEnd?: boolean
}

export const Dialogue: React.FC<DialogueProps> = ({ 
  children, 
  withQuotesBegin = true, 
  withQuotesEnd = true 
}) => {
  return (
    <div className="leading-8 my-6">
      <span className="ml-6" />
      {withQuotesBegin && <GlyphLeft />}
      <span className="italic">{children}</span>
      {withQuotesEnd && <GlyphRight />}
      {withQuotesEnd && <div className="mb-6" />}
    </div>
  )
}

interface FigureLabelProps {
  children: ReactNode
}

export const FigureLabel: React.FC<FigureLabelProps> = ({ children }) => {
  return (
    <div className="w-full text-center mb-8 mt-2 px-16 text-balance">
      <em className="text-gray-600 text-sm leading-relaxed">{children}</em>
    </div>
  )
}

interface PonyProps {
  children: ReactNode
  fontSize?: string
}

export const Pony: React.FC<PonyProps> = ({ children, fontSize = "1.4rem" }) => {
  return (
    <div 
      className="pb-6 px-12 font-serif"
      style={{ 
        fontFamily: "Irish Grover, serif", 
        fontSize: fontSize 
      }}
    >
      {children}
    </div>
  )
}

interface IndentedProps {
  children: ReactNode
}

export const Indented: React.FC<IndentedProps> = ({ children }) => {
  return (
    <div className="w-full px-8 my-8 leading-relaxed">
      <em>{children}</em>
    </div>
  )
}

interface FormulaProps {
  children: ReactNode
}

export const Formula: React.FC<FormulaProps> = ({ children }) => {
  return (
    <div className="w-full text-3xl py-6 text-center font-mono">
      {children}
    </div>
  )
}

interface MarginBottomProps {
  size: string
}

export const MarginBottom: React.FC<MarginBottomProps> = ({ size }) => {
  return <div style={{ marginBottom: size }} />
}

export const NewLine = () => {
  return <p className="mb-0" />
}

export const Break = () => {
  return <p className="mb-4" />
}

// Quote glyphs as simple components
export const GlyphLeft = () => (
  <span className="text-blue-600 mx-1 text-lg">"</span>
)

export const GlyphRight = () => (
  <span className="text-blue-600 mx-1 text-lg">"</span>
) 