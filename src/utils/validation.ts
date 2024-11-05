export const isValidSudoku = (grid: (number | null)[][]): boolean => {
    const isValidSet = (nums: (number | null)[]) =>
      nums.filter(Boolean).length === new Set(nums.filter(Boolean)).size;
  
    for (let i = 0; i < 9; i++) {
      if (!isValidSet(grid[i])) return false;
      if (!isValidSet(grid.map((row) => row[i]))) return false;
  
      const subgrid = [];
      for (let j = 0; j < 9; j++) {
        const row = 3 * Math.floor(i / 3) + Math.floor(j / 3);
        const col = 3 * (i % 3) + (j % 3);
        subgrid.push(grid[row][col]);
      }
      if (!isValidSet(subgrid)) return false;
    }
  
    return true;
  };
  