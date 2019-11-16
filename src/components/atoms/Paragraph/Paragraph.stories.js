import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph',
  decorators: [withKnobs]
};

export const normal = () => {
  const textLabel = 'Paragraph content';
  const textDefaultValue =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae risus porta, faucibus purus sit amet, tristique risus. Sed eu nibh quam. Nullam eget pretium est. Etiam gravida, diam vel interdum aliquam, lectus erat gravida arcu, vitae varius tortor justo sed nibh. Pellentesque et purus in magna porta auctor sed sed arcu. Nulla sed egestas elit. Donec vitae odio a mauris sodales iaculis. Sed pretium augue in libero elementum lacinia. Vestibulum finibus viverra ex, a pharetra orci semper.';
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

  return <Paragraph pageType={selectValue}>{textValue}</Paragraph>;
};
