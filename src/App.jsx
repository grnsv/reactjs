import React from 'react';

// styles
import './App.scss';

// components
import Message from './Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Message
          message="message"
        />
      </header>
    </div>
  );
}

export default App;
