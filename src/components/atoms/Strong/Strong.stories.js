import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Strong from './Strong';

export default {
  component: Strong,
  title: 'Atoms/Strong',
  decorators: [withKnobs]
};

export const normal = () => {
  const labelText = 'Strong content';
  const defaultValueText = 'This is sample strong';
  const groupIdText = 'GROUP-ID1';

  const valueText = text(labelText, defaultValueText, groupIdText);

  return <Strong>{valueText}</Strong>;
};
