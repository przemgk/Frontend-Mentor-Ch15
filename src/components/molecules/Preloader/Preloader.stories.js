import React from 'react';
import { text } from '@storybook/addon-knobs';
import Preloader from './Preloader';

export default {
  component: Preloader,
  title: 'Molecules/Preloader'
};

export const normal = () => {
  const labelText = 'Message';
  const defaultValueText = 'Wait for data download...';
  const groupIdText = 'Component';

  const valueText = text(labelText, defaultValueText, groupIdText);

  return <Preloader message={valueText} />;
};
