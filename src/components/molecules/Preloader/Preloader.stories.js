import React from 'react';
import { text } from '@storybook/addon-knobs';
import Preloader from './Preloader';

export default {
  component: Preloader,
  title: 'Molecules/Preloader'
};

export const normal = () => {
  const label = 'Message';
  const defaultValue = 'Wait for data download...';
  const groupId = 'Component';

  const value = text(label, defaultValue, groupId);

  return <Preloader message={value} />;
};
