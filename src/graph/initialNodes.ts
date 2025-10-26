import type { Node } from 'reactflow';
import { createElement } from 'react';
import CounterWidget from '../components/CounterWidget';

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
    type: 'output',
  },

  // Media nodes
  {
    id: 'img1',
    position: { x: 200, y: 320 },
    type: 'mediaImage',
    data: {
      label: 'Sample Image',
      src: 'https://picsum.photos/400/225',
    },
  },
  {
    id: 'vid1',
    position: { x: 520, y: 320 },
    type: 'mediaVideo',
    data: {
      label: 'Sample Video',
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    },
  },

  // Markdown node
  {
    id: 'md1',
    position: { x: 360, y: 500 },
    type: 'markdown',
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
    position: { x: 720, y: 500 },
    type: 'component',
    data: { label: 'Counter', children: createElement(CounterWidget) },
  },
];
