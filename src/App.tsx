import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  type Connection,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import nodeTypes from './nodes';
import { initialNodes, initialEdges } from './graph';

function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((currentEdges) => addEdge(connection, currentEdges)),
    [setEdges]
  );

  return (
    <div className="flex h-screen flex-col">
      <header className="border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold text-slate-800">
          React Flow Playground
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Drag nodes around or connect them to explore the basics of React Flow.
        </p>
      </header>
      <main className="min-h-0 flex-1">
        <div className="h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
            className="h-full bg-slate-100"
          >
            <MiniMap pannable zoomable />
            <Controls />
            <Background gap={24} size={2} />
          </ReactFlow>
        </div>
      </main>
    </div>
  );
}

export default App;
