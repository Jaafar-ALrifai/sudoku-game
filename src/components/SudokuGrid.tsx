import React, { useState } from 'react';
import Cell from './Cell';
import './SudokuGrid.css';

const SudokuGrid = () => {
  const [grid, setGrid] = useState<(number | null)[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(null))
  );

  const handleCellChange = (row: number, col: number, value: number | null) => {
    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            row={rowIndex}
            col={colIndex}
            value={cell}
            onChange={handleCellChange}
          />
        ))
      )}
    </div>
  );
};

export default SudokuGrid;
