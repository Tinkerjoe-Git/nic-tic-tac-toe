import React, { useState, getState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Reset({ onClick }) {
  return (
    <button classname="restart" onClick={onClick}>
      Reset the Board
    </button>
  );
}

function TicTacToe() {
  const [board, setBoard] = useState({
    a1: null,
    a2: null,
    a3: null,
    b1: null,
    b2: null,
    b3: null,
    c1: null,
    c2: null,
    c3: null,
  });

  const [player, setPlayer] = useState('X');

  const [gameOver, setGameOver] = useState(false);

  const [message, setMessage] = useState(null);

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard({
      a1: null,
      a2: null,
      a3: null,
      b1: null,
      b2: null,
      b3: null,
      c1: null,
      c2: null,
      c3: null,
    });
    setPlayer('X');
    setGameOver(false);
    setMessage(null);
    setWinner(null);
  };

  const handleClick = (square) => {
    if (gameOver) {
      return;
    }

    const { a1, a2, a3, b1, b2, b3, c1, c2, c3 } = board;

    if (!square || square.length !== 1) {
      return;
    }

    const squareValue = square.toUpperCase();

    if (squareValue === 'A1' && a1 === null) {
      setBoard({ a1: player });
      setPlayer('O');
    } else if (squareValue === 'A2' && a2 === null) {
      setBoard({ a2: player });
      setPlayer('O');
  const [ squares, setSquares ] = useState(Array(9).fill(null));
  const [ player, setPlayer ] = useState('X');
  const [ gameOver, setGameOver ] = useState(false);
  const [ winner, setWinner ] = useState(null);

  const handleClick = (square, event) => {
    if (gameOver) {
      return;
    }

    if (squares[square] === null) {
      setSquares(prevSquares => {
        const updatedSquares = prevSquares.slice();
        updatedSquares[square] = player;
        return updatedSquares;
      });
      setPlayer('X' === player ? 'O' : 'X');
    }
  };

  const handleGameOver = (winner) => {
    setGameOver(true);
    setWinner(winner);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setPlayer('X');
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      <App
        squares={squares}
        player={player}
        gameOver={gameOver}
        winner={winner}
        handleClick={handleClick}
        handleGameOver={handleGameOver}
        handleRestart={handleRestart}
      />
      {gameOver && <div className="winner">{winner}</div>}
      <Reset onClick={handleRestart} />
    </div>
  );
}

ReactDOM.render(<TicTacToe />, document.getElementById('root'));

function calculateScore(squares) {
  const score = {
    X: 0,
    O: 0,
  };

  for (let i = 0; i < 9; i++) {
    if (squares[i] === 'X') {
      score.X++;
    } else if (squares[i] === 'O') {
      score.O++;
    }
  }

  return score;
}