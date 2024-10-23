import React, { useState,useEffect } from 'react';

export default function AllHooks(){
  const [count, setCount] = useState(0);

  
  
    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setCount(data));
    }, []); // Empty array means this effect runs once on mount


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
