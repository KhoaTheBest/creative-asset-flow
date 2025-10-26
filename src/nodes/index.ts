import type { NodeTypes } from 'reactflow';

import ImageNode from './ImageNode';
import VideoNode from './VideoNode';
import MarkdownNode from './MarkdownNode';
import ComponentNode from './ComponentNode';

export const nodeTypes: NodeTypes = {
  mediaImage: ImageNode,
  mediaVideo: VideoNode,
  markdown: MarkdownNode,
  component: ComponentNode,
};

export default nodeTypes;
