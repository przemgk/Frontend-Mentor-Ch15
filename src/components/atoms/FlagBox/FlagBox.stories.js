import React from 'react';
import styled from 'styled-components';
import { withKnobs, text } from '@storybook/addon-knobs';
import FlagBox from './FlagBox';

const StyledFlagWrapper = styled.div`
  width: 320px;
  height: 200px;
`;

export default {
  component: FlagBox,
  title: 'Atoms/FlagBox',
  decorators: [withKnobs]
};

export const normal = () => {
  const label = 'Flag image URL';
  const defaultValue = 'https://restcountries.eu/data/col.svg';
  const groupId = 'GROUP-ID1';

  const value = text(label, defaultValue, groupId);

  return (
    <StyledFlagWrapper>
      <FlagBox url={value} />
    </StyledFlagWrapper>
  );
};
