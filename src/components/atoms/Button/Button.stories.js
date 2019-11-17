import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import IconMoon from 'assets/icon-moon.svg';
import IconArrow from 'assets/icon-arrow.svg';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs]
};

export const normal = () => {
  const labelBoolean = 'Hide shadow';
  const defaultValueBoolean = false;
  const groupIdBoolean = 'GROUP-ID1';

  const valueBoolean = boolean(labelBoolean, defaultValueBoolean, groupIdBoolean);

  return <Button hideShadow={valueBoolean}>This is sample button</Button>;
};

export const small = () => <Button small>This is small Button</Button>;

export const withIcon = () => {
  const labelSelect = 'Select icon';
  const optionsSelect = {
    moon: IconMoon,
    arrow: IconArrow
  };
  const defaultValueSelect = IconMoon;
  const groupIdSelect = 'GROUP-ID1';

  const valueSelect = select(labelSelect, optionsSelect, defaultValueSelect, groupIdSelect);

  const labelBoolean = 'Hide shadow';
  const defaultValueBoolean = false;
  const groupIdBoolean = 'GROUP-ID1';

  const valueBoolean = boolean(labelBoolean, defaultValueBoolean, groupIdBoolean);

  return (
    <Button hideShadow={valueBoolean} icon={valueSelect}>
      This is icon button
    </Button>
  );
};
