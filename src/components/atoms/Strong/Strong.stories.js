import React from 'react';
import { text } from '@storybook/addon-knobs';
import Strong from './Strong';

export default {
  component: Strong,
  title: 'Atoms/Strong'
};

export const normal = () => {
  const label = 'Strong content';
  const defaultValue = 'This is sample strong';
  const groupId = 'Component';

  const value = text(label, defaultValue, groupId);

  return <Strong>{value}</Strong>;
};
