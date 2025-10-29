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

  // Allow edges only when both endpoints share the same parent (including both having no parent).
  const isValidConnection = useCallback(
    (connection: Connection) => {
      const src = nodes.find((n) => n.id === connection.source);
      const tgt = nodes.find((n) => n.id === connection.target);
      if (!src || !tgt) return false;

      const srcParent = (src as any).parentNode ?? null;
      const tgtParent = (tgt as any).parentNode ?? null;

      // Valid if both are outside any group (null === null) OR both inside the same group
      return srcParent === tgtParent;
    },
    [nodes]
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      if (!isValidConnection(connection)) {
        console.warn(
          '[React Flow] Blocked connection: edges are only allowed within the same container or both outside of containers.'
        );
        return;
      }
      setEdges((currentEdges) => addEdge(connection, currentEdges));
    },
    [setEdges, isValidConnection]
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
            // edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            isValidConnection={isValidConnection}
            nodeTypes={nodeTypes}
            nodesDraggable={true}
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
