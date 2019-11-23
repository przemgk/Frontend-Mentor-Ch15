import React from 'react';
import { withKnobs, text as knobsText, object } from '@storybook/addon-knobs';
import DataSet from './DataSet';

export default {
  component: DataSet,
  title: 'Molecules/DataSet',
  decorators: [withKnobs]
};

export const text = () => {
  const labelLabel = 'Label';
  const defaultValueLabel = 'Languages';
  const groupIdLabel = 'GROUP-ID1';

  const valueLabel = knobsText(labelLabel, defaultValueLabel, groupIdLabel);

  const labelDesc = 'Description';
  const defaultValueDesc = 'Dutch, French, German';
  const groupIdDesc = 'GROUP-ID1';

  const valueDesc = knobsText(labelDesc, defaultValueDesc, groupIdDesc);

  return <DataSet pageType="home" type="text" label={valueLabel} description={valueDesc} />;
};

export const buttons = () => {
  const labelLabel = 'Label';
  const defaultValueLabel = 'Border countries';
  const groupIdLabel = 'GROUP-ID1';

  const valueLabel = knobsText(labelLabel, defaultValueLabel, groupIdLabel);

  const labelDesc = 'Description';
  const defaultValueDesc = [
    { name: 'France', url: 'fr' },
    { name: 'Germany', url: 'ger' },
    { name: 'Netherlands', url: 'nth' }
  ];
  const groupIdDesc = 'GROUP-ID1';

  const valueDesc = object(labelDesc, defaultValueDesc, groupIdDesc);

  return <DataSet pageType="home" type="buttons" label={valueLabel} description={valueDesc} />;
};
