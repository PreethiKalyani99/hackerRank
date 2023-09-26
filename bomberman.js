function bomberMan(n, grid) {
    let rowLength = grid.length;
    let colLength = grid[0].length
    let bombIndex = [];
  
    grid = grid.map(row => row.split(''));
  
    for (let seconds = 1; seconds <= n; seconds++) {
      if (seconds > 1) {
        if (seconds % 2 !== 0) {
            for (let i = 0; i < bombIndex.length; i++) {
                let row = bombIndex[i][0];
                let column = bombIndex[i][1];
                grid[row][column] = '.';
              
                if (row + 1 < rowLength) grid[row + 1][column] = '.';
                if (row - 1 >= 0) grid[row - 1][column] = '.';
                if (column + 1 < colLength) grid[row][column + 1] = '.';
                if (column - 1 >= 0) grid[row][column - 1] = '.';
              }
              
              bombIndex = [];
        } else {
          for (let row = 0; row < rowLength; row++) {
            for (let column = 0; column < colLength; column++) {
              if (grid[row][column] === 'O') bombIndex.push([row, column]);
              if (grid[row][column] === '.') grid[row][column] = 'O';
            }
          }
        }
      }
    }
  
    grid = grid.map(row => row.join(''));

    for(let row of grid){
        console.log(row)
    }
  
  }
  
const grid = [
    '.......',
    '...O...',
    '....O..',
    '.......',
    'OO.....',
    'OO.....'
];
  
const n = 3;
bomberMan(n, grid);
  