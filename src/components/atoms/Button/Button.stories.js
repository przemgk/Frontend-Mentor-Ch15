import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import PropTypes from 'prop-types';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button'
};

export const normal = () => {
  const labelShadow = 'Hide shadow';
  const defaultValueShadow = false;
  const groupIdShadow = 'Component';

  const valueShadow = boolean(labelShadow, defaultValueShadow, groupIdShadow);

  return <Button hideShadow={valueShadow}>This is sample button</Button>;
};

export const small = () => <Button small>This is small Button</Button>;

export const withIcon = ({ icons }) => {
  const labelIcon = 'Select icon';
  const optionsIcon = {
    moon: icons.moon,
    arrow: icons.arrow
  };
  const defaultValueIcon = icons.moon;
  const groupIdIcon = 'Component';

  const valueIcon = select(labelIcon, optionsIcon, defaultValueIcon, groupIdIcon);

  const labelShadow = 'Hide shadow';
  const defaultValueShadow = false;
  const groupIdShadow = 'Component';

  const valueShadow = boolean(labelShadow, defaultValueShadow, groupIdShadow);

  return (
    <Button hideShadow={valueShadow} icon={valueIcon}>
      This is icon button
    </Button>
  );
};

withIcon.propTypes = {
  icons: PropTypes.objectOf(PropTypes.string).isRequired
};
