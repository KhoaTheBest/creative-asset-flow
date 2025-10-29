import type { Edge } from 'reactflow';

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', label: 'alternate' },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-4', source: '3', target: '4' },

  // Media and custom nodes connections
  { id: 'eimg1-md1', source: 'img1', target: 'md1', type: 'smoothstep' },
  { id: 'emd1-vid1', source: 'md1', target: 'vid1', type: 'smoothstep' },
  { id: 'eimg1-vid1', source: 'img1', target: 'vid1', type: 'smoothstep' },
  { id: 'ecmp1-4', source: 'cmp1', target: '4', type: 'smoothstep' },
];
