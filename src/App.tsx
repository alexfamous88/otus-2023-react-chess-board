import { useState, useEffect } from 'react'
import ChessBoard from './components/ChessBoard'
import './App.scss'

function validMoves(position: number): number[] {
  const row = position >> 3;
  const col = position % 8;
  const rowColtoIndex = (r: number, c: number): number => {
    if (r > 7 || r < 0 || c > 7 || c < 0) {
      return -1
    }
    return r * 8 + c
  }
  return [
    rowColtoIndex(row+1, col-2),  
    rowColtoIndex(row-1, col-2),  
    rowColtoIndex(row+1, col+2),  
    rowColtoIndex(row-1, col+2),  
    rowColtoIndex(row+2, col-1),  
    rowColtoIndex(row-2, col-1),  
    rowColtoIndex(row+2, col+1),  
    rowColtoIndex(row-2, col+1),  
  ].filter(x => x >= 0)
}
const initial = 36
function App() {
  const [position, setPosition] = useState<number>(initial)
  const [moves, setMoves] = useState<number[]>(validMoves(initial))
  useEffect(() => {
    setMoves(validMoves(position))
  }, [position])
  return (
    <ChessBoard position={position} moves={moves}onClick={(p) => setPosition(p)}/>
  )
}

export default App
