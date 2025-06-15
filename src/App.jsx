import React from 'react';
import useLocalStorage from './useLocalStorage.js';

function App() {
  const [value, setValue] = useLocalStorage('app-test', '');

  return (
    <div>
      <input
        placeholder="test"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
