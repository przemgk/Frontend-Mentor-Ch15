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
  const labelDropdown = 'Data';
  const defaultValueDropdown = {
    label: 'Filter by Region',
    options: ['africa', 'america', 'asia', 'europe', 'oceania']
  };
  const groupIdDropdown = 'Component';

  const valueDropdown = object(labelDropdown, defaultValueDropdown, groupIdDropdown);

  const { label, options } = valueDropdown;

  return <Dropdown label={label} options={options} />;
};
