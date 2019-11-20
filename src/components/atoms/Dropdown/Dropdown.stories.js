import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'Atoms/Dropdown',
  decorators: [withKnobs]
};

export const normal = () => {
  const objectLabel = 'Data';
  const objectDefaultValue = {
    label: 'Filter by Region',
    options: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  };
  const objectGroupId = 'GROUP-ID1';

  const value = object(objectLabel, objectDefaultValue, objectGroupId);

  const { label, options } = value;

  return <Dropdown label={label} options={options} />;
};
