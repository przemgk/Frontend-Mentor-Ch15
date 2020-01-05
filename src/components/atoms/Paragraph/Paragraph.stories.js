import React from 'react';
import { text } from '@storybook/addon-knobs';
import Paragraph from './Paragraph';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph'
};

export const normal = () => {
  const label = 'Paragraph content';
  const defaultValue =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae risus porta, faucibus purus sit amet, tristique risus. Sed eu nibh quam. Nullam eget pretium est. Etiam gravida, diam vel interdum aliquam, lectus erat gravida arcu, vitae varius tortor justo sed nibh. Pellentesque et purus in magna porta auctor sed sed arcu. Nulla sed egestas elit. Donec vitae odio a mauris sodales iaculis. Sed pretium augue in libero elementum lacinia. Vestibulum finibus viverra ex, a pharetra orci semper.';
  const groupId = 'Component';

  const value = text(label, defaultValue, groupId);

  return <Paragraph>{value}</Paragraph>;
};
