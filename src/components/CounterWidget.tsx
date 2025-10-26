import { useState } from 'react';

export default function CounterWidget() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded bg-slate-200 px-2 py-1"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>
      <span className="w-10 text-center font-mono">{count}</span>
      <button
        className="rounded bg-slate-200 px-2 py-1"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
}
