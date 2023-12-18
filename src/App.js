import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Board from './components/Board';
import '@radix-ui/themes/styles.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Kanban Board</h1>
        <Board />
      </div>
    </Provider>
  );
}

export default App;
