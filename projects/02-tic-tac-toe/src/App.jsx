import { Children, useState } from "react";
import confetti from "canvas-confetti";
import Square from "./componets/Square.jsx";
import { TURNS } from "./constants.js"
import { checkWinner, checkEndGame} from "./logic/board.js";
import { WinnerModal} from "./componets/WinnerModal.jsx"


function App() {
  
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage 
      ? JSON.parse(boardFromStorage) : Array(9).fill(null) 
  } 
  );
  const [turn, setTurn] = useState( () => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ??  TURNS.X
  }
   );
  const [winner, setWinner] = useState( null ); // NULL no hay ganador, false hay empate.
    

  const updateBoard = (index) => {
    // si tiene algo o hay winner deja de actualizar el render
    if(board[index] || winner) return
    // Actualizamos el board reemplazando la lista anterior del Board
    const newBoard = [ ...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Actualizamos de quien es el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
    // Guardar aqui la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // Checkeamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) // Tenemos un empate
    }
  }
  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('item')
    window.localStorage.removeItem('board')
  }


  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset the Game</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
                {board[index]}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal
      winner= {winner} 
      resetGame={resetGame}
      />
      

      
            

    </main>

  )
}

export default App
