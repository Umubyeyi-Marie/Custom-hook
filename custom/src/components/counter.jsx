import React, { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Counter() {
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);

  useDocumentTitle(title);

  return (
    <div className= "bg-white-200 flex flex-col items-center justify-center h-screen">
    <div className="flex flex-col items-center justify-center bg-purple-500 p-4 m-4 rounded-xl">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter document title"
        className="border p-2 mb-4"
      />
      <p className="text-4xl  text-red-600 underline ">{title || ' Counter'}</p>

      <h2 className="text-white mt-4 text-4xl">Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white px-3 py-1 m-3  text-3xl rounded-xl">Increment</button>
      <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white px-3 py-1 m-3 text-3xl rounded-xl">Decrement</button>
      <button onClick={() => setCount(0)} className="bg-gray-500 text-white px-3 py-1 m-3 text-3xl rounded-xl">Reset</button>
    </div>
    </div>
  );
}
