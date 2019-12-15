import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Atoms/Heading'
};

export const small = () => <Heading small>This is small heading</Heading>;
export const normal = () => <Heading>This is normal heading</Heading>;
export const large = () => <Heading large>This is large heading</Heading>;
