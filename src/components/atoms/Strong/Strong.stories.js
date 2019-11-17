import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Strong from './Strong';

export default {
  component: Strong,
  title: 'Atoms/Strong',
  decorators: [withKnobs]
};

export const normal = () => {
  const textLabel = 'Strong content';
  const textDefaultValue = 'This is sample strong';
  const textGroupId = 'GROUP-ID1';

  const textValue = text(textLabel, textDefaultValue, textGroupId);

  const selectLabel = 'Page type';
  const selectOptions = {
    home: 'home',
    details: 'details'
  };
  const selectDefaultValue = 'home';
  const selectGroupId = 'GROUP-ID1';

  const selectValue = select(selectLabel, selectOptions, selectDefaultValue, selectGroupId);

  return <Strong pageType={selectValue}>{textValue}</Strong>;
};
