import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';

const numRows = 50;
const numCols = 50;

//i for row index; k for column index

const App: React.FC = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef();
  runningRef.current = running 

  const runSimulation = useCallback(() => {
    //Want to simulate and see if we're currently running, if not return
    if (!runningRef.current) {
      return;
    }
    for (let i = 0; i < )
    setTimeout(runSimulation, 1000);
  }, [])

  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
        }}>
        {running ? "stop" : "start"}
      </button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}>
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1; //flip back and forth between dead and alive 
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "green" : undefined,
                border: "solid 1px black"
              }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default App;
