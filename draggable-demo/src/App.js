import React from 'react';
import Board from './components/Board.js';
import Card from './components/Card.js';
// import HTML5Backend from 'react-dnd-html5-backend'
// import { DndProvider } from 'react-dnd'

function App() {

    
  return (
    <div className="App">
      <main className="flexbox">
        <Board id='board-1' className='board'>
          <Card id='card-1' className='card' draggable='true'>
            <p>Card one</p>
          </Card>
        </Board>
        <Board id='board-2' className='board'>
          <Card id='card-2' className='card' draggable='true'>
            <p>Card two</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App
