import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
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

  const labelPageType = 'Page type';
  const optionsPageType = {
    home: 'home',
    details: 'details'
  };
  const defaultValuePageType = 'home';
  const groupIdPageType = 'GROUP-ID1';

  const valuePageType = select(
    labelPageType,
    optionsPageType,
    defaultValuePageType,
    groupIdPageType
  );

  return <Strong pageType={valuePageType}>{valueText}</Strong>;
};
