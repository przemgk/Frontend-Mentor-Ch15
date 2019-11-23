import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'Atoms/Dropdown',
  decorators: [withKnobs]
};

export const normal = () => {
  const labelDropdown = 'Data';
  const defaultValueDropdown = {
    label: 'Filter by Region',
    options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  };
  const groupIdDropdown = 'GROUP-ID1';

  const valueDropdown = object(labelDropdown, defaultValueDropdown, groupIdDropdown);

  const { label, options } = valueDropdown;

  return <Dropdown label={label} options={options} />;
};
