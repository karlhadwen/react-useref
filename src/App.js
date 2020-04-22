import React, { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const inputFocusRef = useRef();
  const counterRef = useRef(0);

  function incrementCounterRef() {
    counterRef.current += 1;
  }

  useEffect(() => {
    const { current } = inputFocusRef;

    function focusInput() {
      console.log('Focused on the input with DOM value: ', inputFocusRef);
      console.log('Current value is: ', current);
    }

    current.addEventListener('focus', focusInput);

    return () => {
      current.removeEventListener('focus', focusInput);
    };
  });

  return (
    <main>
      <p>State count: {count}</p>
      <input
        type="text"
        ref={inputFocusRef}
        defaultValue="Click inside...I dare you"
      />
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <p className="mt">Ref Count: {counterRef.current}</p>
      <button type="button" onClick={incrementCounterRef}>
        Increment Ref Count
      </button>
    </main>
  );
}

export default App;
