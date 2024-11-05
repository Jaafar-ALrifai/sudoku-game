import React from 'react';

interface ControlsProps {
  onSolve: () => void;
  onGeneratePuzzle: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

const Controls: React.FC<ControlsProps> = ({ onSolve, onGeneratePuzzle }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={() => onGeneratePuzzle('easy')}>Generate Easy Puzzle</button>
      <button onClick={() => onGeneratePuzzle('medium')}>Generate Medium Puzzle</button>
      <button onClick={() => onGeneratePuzzle('hard')}>Generate Hard Puzzle</button>
      <button onClick={onSolve}>Solve Puzzle</button>
    </div>
  );
};

export default Controls;
