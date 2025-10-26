import type { ReactNode } from 'react';

export type MediaData = {
  label: string;
  src: string;
};

export type MarkdownData = {
  label: string;
  content: string;
};

export type ComponentData = {
  label: string;
  children?: ReactNode;
};
