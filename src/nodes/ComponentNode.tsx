import { Handle, Position, type NodeProps } from 'reactflow';
import type { ComponentData } from './types';

const ComponentNode = ({ data }: NodeProps<ComponentData>) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-white text-slate-800 shadow-sm">
      <div className="cursor-move border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium">
        {data.label}
      </div>
      <div className="nodrag p-3">{data.children}</div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default ComponentNode;
