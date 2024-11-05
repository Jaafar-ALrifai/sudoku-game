import React, { FC } from 'react';

interface CellProps {
  row: number;
  col: number;
  value: number | null;
  onChange: (row: number, col: number, value: number | null) => void;
}

const Cell: FC<CellProps> = ({ row, col, value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value ? parseInt(e.target.value) : null;
    if (newValue === null || (newValue >= 1 && newValue <= 9)) {
      onChange(row, col, newValue);
    }
  };

  return (
    <input
      type="text"
      value={value || ''}
      onChange={handleInputChange}
      maxLength={1}
      style={{
        width: '40px',
        height: '40px',
        textAlign: 'center',
        fontSize: '1.5rem',
        border: '1px solid #333',
      }}
    />
  );
};

export default Cell;
