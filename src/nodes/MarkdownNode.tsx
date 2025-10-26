import { Handle, Position, type NodeProps } from 'reactflow';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { MarkdownData } from './types';

const MarkdownNode = ({ data }: NodeProps<MarkdownData>) => {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300 bg-white text-slate-800 shadow-sm w-[320px]">
      <div className="cursor-move border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium">
        {data.label}
      </div>
      <div className="nodrag p-3">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: (props) => <a {...props} target="_blank" rel="noreferrer" />,
          }}
        >
          {data.content}
        </ReactMarkdown>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default MarkdownNode;
