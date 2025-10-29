import type { Node } from 'reactflow';
import { createElement } from 'react';
import { PencilAdPlayer } from '../components/AdPlayer';

export const initialNodes: Node[] = [
  {
    id: '1',
    position: { x: 0, y: 40 },
    data: { label: 'Start' },
    type: 'input',
  },
  { id: '2', position: { x: 200, y: 0 }, data: { label: 'Process' } },
  { id: '3', position: { x: 200, y: 160 }, data: { label: 'Decision' } },
  {
    id: '4',
    position: { x: 620, y: 80 },
    data: { label: 'End' },
    parentId: 'g1',
    extent: 'parent',
    type: 'output',
  },

  // Group container node
  {
    id: 'g1',
    position: { x: 140, y: 380 },
    style: {
      width: '1000px',
      height: '1000px',
      zIndex: 5,
    },
    type: 'group',
    data: { label: 'Media Group' },
  },

  // Media nodes
  {
    id: 'img1',
    position: { x: 16, y: 56 },
    parentNode: 'g1',
    extent: 'parent',
    type: 'mediaImage',
    style: { zIndex: 10 },
    data: {
      label: 'Sample Image',
      src: 'https://picsum.photos/400/225',
    },
  },
  {
    id: 'vid1',
    position: { x: 320, y: 56 },
    parentNode: 'g1',
    extent: 'parent',
    type: 'mediaVideo',
    style: { zIndex: 10 },
    data: {
      label: 'Sample Video',
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    },
  },

  // Markdown node
  {
    id: 'md1',
    position: { x: 16, y: 180 },
    parentNode: 'g1',
    extent: 'parent',
    type: 'markdown',
    style: { zIndex: 10 },
    data: {
      label: 'Markdown',
      content: `# Hello Markdown

  - [x] Task 1 done
  - [ ] Task 2 pending

  | A | B |
  |---|---|
  | 1 | 2 |

  **Bold**, _italic_, and \`inline code\`.
  [Link](https://example.com)`,
    },
  },

  // React component node
  {
    id: 'cmp1',
    position: { x: 520, y: 500 },
    type: 'component',
    style: { zIndex: 5 },
    parentNode: 'g1',
    extent: 'parent',
    data: { label: 'Ad Player', children: createElement(PencilAdPlayer) },
  },
];
