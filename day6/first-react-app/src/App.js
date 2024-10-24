import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
// [20:56]
// HTML inside JS - JSX (Javascript-XML)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Prestation component / Smart component (Container)

  // use map to render the ProductItem
  return (
    <div className="App">
      {/* Conditional(isLoggedIn) rendering */}
      {isLoggedIn ? <TodoList setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}
// 21:00

export default App;

// VPS / nginx / Domain settings / Heroku (deploy react)

