import React from 'react';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading'
};

export const small = () => <Heading small>Hello Button</Heading>;
export const normal = () => <Heading>Hello Button</Heading>;
export const large = () => <Heading large>Hello Button</Heading>;
