import { Handle, Position, type NodeProps } from 'reactflow';
import type { MediaData } from './types';

const ImageNode = ({ data }: NodeProps<MediaData>) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-white text-slate-800 shadow-sm">
      <div className="cursor-move border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium">
        {data.label}
      </div>
      <img src={data.src} alt={data.label} className="block h-36 w-64 object-cover" />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default ImageNode;
