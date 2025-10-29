import { Handle, Position, type NodeProps } from 'reactflow';
import { NodeResizer } from 'reactflow';

type GroupData = { label: string };

// A "container" node that can contain other nodes as children.
// Child nodes should set parentNode: this node's id and extent: 'parent'.
const GroupNode = ({ data, selected }: NodeProps<GroupData>) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-white text-slate-800 shadow-sm flex flex-col h-full">
      <NodeResizer isVisible={selected} minWidth={200} minHeight={150} />
      <div className="cursor-move border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium">
        {data.label}
      </div>
      <div className="flex-1 bg-slate-50/50" />
      {/* Optional handles to connect the group as a whole */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default GroupNode;
