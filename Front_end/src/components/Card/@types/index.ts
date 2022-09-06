import React from 'react';

export type CardProps = {
  children: React.ReactElement;
  width?: string;
  height?: string;
  borderRadius: string;
  blur?: boolean;
  backgroundColor?: string;
};

export type CardComponentProps = {
  blur?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
};
