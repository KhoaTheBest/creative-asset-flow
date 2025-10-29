import { Handle, Position, type NodeProps } from 'reactflow';
import type { MediaData } from './types';

const VideoNode = ({ data }: NodeProps<MediaData>) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-white text-slate-800 shadow-sm">
      <div className="cursor-move border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium">
        {data.label}
      </div>
      {/* nodrag allows interacting with the video controls without dragging the node */}
      <video
        src={data.src}
        className="block h-36 w-64 object-cover"
        controls
        playsInline
      />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default VideoNode;
