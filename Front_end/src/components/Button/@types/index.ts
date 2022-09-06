import React from 'react';

export type ButtonProps = {
  children: React.ReactElement | string;
  hiddenArrow?: boolean;
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  typeButton?: 'default' | 'input';
  buttonNextBackground?: string | undefined;
  color?: string | undefined;
  onClick?: () => void;
};

export type ButtonComponentProps = {
  width?: string;
  backgroundColor?: string;
  height?: string;
  borderRadius?: string;
  typeButton?: 'default' | 'input';
  color?: string | undefined;
};

export type ButtonNextProps = {
  typeButton?: 'default' | 'input';
  buttonNextBackground?: string | undefined;
};
