import React from 'react';

// Lazy-load the PencilAdPlayer to avoid pulling editor code into the initial chunk
export  const LazyPencilAdPlayer = React.lazy(() =>
  import('./AdPlayer').then((m) => ({ default: m.PencilAdPlayer }))
);