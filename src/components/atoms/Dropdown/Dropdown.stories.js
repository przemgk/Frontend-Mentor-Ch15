import React from 'react';
import { object } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'Atoms/Dropdown',
  decorators: [StoryRouter()]
};

export const normal = () => {
  const label = 'Data';
  const defaultValue = {
    label: 'Filter by Region',
    options: ['africa', 'america', 'asia', 'europe', 'oceania']
  };
  const groupId = 'Component';

  const value = object(label, defaultValue, groupId);

  return <Dropdown label={value.label} options={value.options} />;
};
