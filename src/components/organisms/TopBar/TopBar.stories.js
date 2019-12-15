import React from 'react';
import StoryRouter from 'storybook-react-router';
import TopBar from './TopBar';

export default {
  component: TopBar,
  title: 'Organisms/TopBar',
  decorators: [StoryRouter()]
};

export const normal = () => <TopBar />;
