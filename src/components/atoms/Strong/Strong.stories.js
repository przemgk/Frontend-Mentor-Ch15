import React from 'react';
import { text } from '@storybook/addon-knobs';
import Strong from './Strong';

export default {
  component: Strong,
  title: 'Atoms/Strong'
};

export const normal = () => {
  const labelText = 'Strong content';
  const defaultValueText = 'This is sample strong';
  const groupIdText = 'Component';

  const valueText = text(labelText, defaultValueText, groupIdText);

  return <Strong>{valueText}</Strong>;
};
