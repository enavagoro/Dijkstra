const gridSize = 10; // Tamaño de la cuadrícula
const gridContainer = document.getElementById('grid');
let squares = [];
let startSquare = null;
let endSquare = null;

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        square.dataset.row = i;
        square.dataset.col = j;
        
        square.textContent = `${i},${j}`; // Aquí se asignan los números de fila y columna
        
        square.addEventListener('click', handleSquareClick);
        
        gridContainer.appendChild(square);
        squares.push(square);
      }
    }

    console.log('squares:', squares);
}

function handleSquareClick(event) {
    const square = event.target;
  
    if (!startSquare) {
      startSquare = square;
      square.classList.add('start');
    } else if (!endSquare) {
      endSquare = square;
      square.classList.add('end');
    } else {
      if (square !== startSquare && square !== endSquare) {
        square.classList.toggle('blocked');
      }
    }
    console.log('square:', square);
}
  
function resetGrid() {
    squares.forEach(square => {
        square.classList.remove('start', 'end', 'blocked');
    });
    startSquare = null;
    endSquare = null;
    squares = [];
    gridContainer.innerHTML = '';
    createGrid();
}
  
document.getElementById('resetButton').addEventListener('click', resetGrid);

// // Algoritmo de Dijkstra (simplificado)
// function dijkstra() {
//     const start = { row: parseInt(startSquare.dataset.row), col: parseInt(startSquare.dataset.col) };
//     const end = { row: parseInt(endSquare.dataset.row), col: parseInt(endSquare.dataset.col) };
  
//     const visited = new Set();
//     const distances = {};
//     const previous = {};
    
//     squares.forEach(square => {
//       const row = parseInt(square.dataset.row);
//       const col = parseInt(square.dataset.col);
//       distances[`${row},${col}`] = Infinity;
//       previous[`${row},${col}`] = null;
//     });
  
//     distances[`${start.row},${start.col}`] = 0;
  
//     const queue = [start];
  
//     while (queue.length > 0) {
//       queue.sort((a, b) => distances[`${a.row},${a.col}`] - distances[`${b.row},${b.col}`]);
//       const current = queue.shift();
  
//       if (current.row === end.row && current.col === end.col) {
//         let path = [];
//         let currentSquare = current;
//         while (previous[`${currentSquare.row},${currentSquare.col}`]) {
//           path.push(currentSquare);
//           currentSquare = previous[`${currentSquare.row},${currentSquare.col}`];
//         }
//         return path.reverse();
//       }
  
//       const neighbors = getNeighbors(current);
//       neighbors.forEach(neighbor => {
//         if (!visited.has(`${neighbor.row},${neighbor.col}`)) {
//           const alt = distances[`${current.row},${current.col}`] + 1;
//           if (alt < distances[`${neighbor.row},${neighbor.col}`]) {
//             distances[`${neighbor.row},${neighbor.col}`] = alt;
//             previous[`${neighbor.row},${neighbor.col}`] = current;
//             queue.push(neighbor);
//           }
//         }
//       });
//       visited.add(`${current.row},${current.col}`);
//     }
//     return [];
//   }
  
//   function getNeighbors(square) {
//     const directions = [
//       { row: -1, col: 0 }, // arriba
//       { row: 1, col: 0 },  // abajo
//       { row: 0, col: -1 }, // izquierda
//       { row: 0, col: 1 }   // derecha
//     ];
  
//     const neighbors = [];
//     directions.forEach(dir => {
//       const newRow = square.row + dir.row;
//       const newCol = square.col + dir.col;
//       if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
//         const neighbor = squares.find(sq => parseInt(sq.dataset.row) === newRow && parseInt(sq.dataset.col) === newCol);
//         if (!neighbor.classList.contains('blocked')) {
//           neighbors.push({ row: newRow, col: newCol });
//         }
//       }
//     });
  
//     return neighbors;
//   }
  
//   function highlightPath(path) {
//     console.log('cpath:', path);
//     path.forEach(step => {
//       const square = squares.find(sq => sq.dataset.row == step.row && sq.dataset.col == step.col);
//       square.style.backgroundColor = 'blue';
//     });
//   }
  
//   document.getElementById('findPathButton').addEventListener('click', () => {
//     const path = dijkstra();
//     highlightPath(path);
//   });

createGrid();

console.log('hola')