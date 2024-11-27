import logo from './logo.svg';
import './App.css';
import React from 'react';
import FirstPage from './components/firstPage.js';
import SecondPage from './components/secondPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameStateContext from './store/gameState-context.js';

function App() {
  const gameStateCtx = React.useContext(GameStateContext);
  let currentPage;
  switch (gameStateCtx.gameState) {
    case 'FirstPage':
      currentPage = <FirstPage />;
      break;
    case 'SecondPage':
      currentPage = <SecondPage />;
      break;
    default:
      currentPage = <FirstPage />;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {currentPage}
      </header>
    </div>
  );
}

export default App;
