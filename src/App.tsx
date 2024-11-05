import React from 'react';
import SudokuGrid from './components/SudokuGrid';
import Controls from './components/Controls';
import { generatePuzzle } from './utils/sudokuGenerator';
import { solveSudoku } from './utils/sudokuSolver';
import './index.css';

const App = () => {
  const handleGeneratePuzzle = (difficulty: 'easy' | 'medium' | 'hard') => {
    const newPuzzle = generatePuzzle(difficulty);
    console.log(newPuzzle); 
  };

  const handleSolvePuzzle = () => {
    console.log('Solve Puzzle!'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Sudoku Game</h1>
      <SudokuGrid />
      <Controls onSolve={handleSolvePuzzle} onGeneratePuzzle={handleGeneratePuzzle} />
    </div>
  );
};

export default App;
