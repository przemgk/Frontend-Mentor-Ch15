import React from 'react';
import { text } from '@storybook/addon-knobs';
import NoResults from './NoResults';

export default {
  component: NoResults,
  title: 'Molecules/NoResults'
};

export const normal = () => {
  const label = 'Search ';
  const defaultValue = 'unlabelled country';
  const groupId = 'Component';

  const value = text(label, defaultValue, groupId);

  return <NoResults searchQuery={value} />;
};
