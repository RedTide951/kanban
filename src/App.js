import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Board from './components/Board';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel } from '@radix-ui/themes';

function App() {
  return (
    <Theme>
      <Provider store={store}>
        <div className="App">
          <h1>Kanban Board</h1>
          <Board />
        </div>
      </Provider>
      <ThemePanel />
    </Theme>
  );
}

export default App;
