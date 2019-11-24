import React from 'react';
import styled from 'styled-components';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import Card from './Card';

const StyledCardWrapper = styled.div`
  width: 320px;
  height: 420px;
`;

export default {
  component: Card,
  title: 'Molecules/Card',
  decorators: [withKnobs]
};

export const normal = () => {
  const labelTitle = 'Title';
  const defaultValueTitle = 'Germany';
  const groupIdTitle = 'GROUP-ID1';

  const valueTitle = text(labelTitle, defaultValueTitle, groupIdTitle);

  const labelFlagUrl = 'Flag Url';
  const defaultValueFlagUrl = 'https://restcountries.eu/data/deu.svg';
  const groupIdFlagUrl = 'GROUP-ID1';

  const valueFlagUrl = text(labelFlagUrl, defaultValueFlagUrl, groupIdFlagUrl);

  const labelDesc = 'Description';
  const defaultValueDesc = [
    { label: 'Population', value: '81,770,900' },
    { label: 'Region', value: 'Europe' },
    { label: 'Capital', value: 'Berlin' }
  ];
  const groupIdDesc = 'GROUP-ID1';

  const valueDesc = object(labelDesc, defaultValueDesc, groupIdDesc);

  return (
    <StyledCardWrapper>
      <Card title={valueTitle} desc={valueDesc} flagUrl={valueFlagUrl} />
    </StyledCardWrapper>
  );
};
