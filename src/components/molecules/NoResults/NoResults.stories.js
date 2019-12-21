import React from 'react';
import { text } from '@storybook/addon-knobs';
import NoResults from './NoResults';

export default {
  component: NoResults,
  title: 'Molecules/NoResults'
};

export const normal = () => {
  const labelQuery = 'Search query';
  const defaultValueQuery = 'unlabelled country';
  const groupIdQuery = 'Component';

  const valueQuery = text(labelQuery, defaultValueQuery, groupIdQuery);

  return <NoResults searchQuery={valueQuery} />;
};
