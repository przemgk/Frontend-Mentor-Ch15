import React from 'react';
import { withKnobs, text as knobsText, object } from '@storybook/addon-knobs';
import DataSet from './DataSet';

export default {
  component: DataSet,
  title: 'Molecules/DataSet',
  decorators: [withKnobs]
};

export const text = () => {
  const labelOfLabel = 'Label';
  const defaultValueLabel = 'Languages';
  const groupIdLabel = 'GROUP-ID1';

  const valueLabel = knobsText(labelOfLabel, defaultValueLabel, groupIdLabel);

  const labelValue = 'Value';
  const defaultValueOfValue = 'Dutch, French, German';
  const groupIdValue = 'GROUP-ID1';

  const valueOfValue = knobsText(labelValue, defaultValueOfValue, groupIdValue);

  return <DataSet pageType="home" type="text" label={valueLabel} value={valueOfValue} />;
};

export const buttons = () => {
  const labelOfLabel = 'Label';
  const defaultValueLabel = 'Border countries';
  const groupIdLabel = 'GROUP-ID1';

  const valueLabel = knobsText(labelOfLabel, defaultValueLabel, groupIdLabel);

  const labelValue = 'Value';
  const defaultValueOfValue = [
    { name: 'France', url: 'fr' },
    { name: 'Germany', url: 'ger' },
    { name: 'Netherlands', url: 'nth' }
  ];
  const groupIdValue = 'GROUP-ID1';

  const valueOfValue = object(labelValue, defaultValueOfValue, groupIdValue);

  return <DataSet pageType="home" type="buttons" label={valueLabel} value={valueOfValue} />;
};
