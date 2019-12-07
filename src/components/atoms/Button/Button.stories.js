import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
// import MoonIcon from 'assets/icon-moon.svg';
// import ArrowIcon from 'assets/icon-arrow.svg';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
  decorators: [withKnobs]
};

export const normal = () => {
  const labelShadow = 'Hide shadow';
  const defaultValueShadow = false;
  const groupIdShadow = 'GROUP-ID1';

  const valueShadow = boolean(labelShadow, defaultValueShadow, groupIdShadow);

  return <Button hideShadow={valueShadow}>This is sample button</Button>;
};

export const small = () => <Button small>This is small Button</Button>;

// export const withIcon = () => {
//   const labelIcon = 'Select icon';
//   const optionsIcon = {
//     moon: MoonIcon,
//     arrow: ArrowIcon
//   };
//   const defaultValueIcon = MoonIcon;
//   const groupIdIcon = 'GROUP-ID1';

//   const valueIcon = select(labelIcon, optionsIcon, defaultValueIcon, groupIdIcon);

//   const labelShadow = 'Hide shadow';
//   const defaultValueShadow = false;
//   const groupIdShadow = 'GROUP-ID1';

//   const valueShadow = boolean(labelShadow, defaultValueShadow, groupIdShadow);

//   return (
//     <Button hideShadow={valueShadow} icon={valueIcon}>
//       This is icon button
//     </Button>
//   );
// };
