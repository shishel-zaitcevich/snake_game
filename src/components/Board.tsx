import * as React from 'react'
import '../styles/Board.scss'

interface BoardProps {
  width: number
  height: number
  children: React.ReactNode
}

export default function Board({ width, height, children }: BoardProps) {
  return <div className="board">{children}</div>
}
