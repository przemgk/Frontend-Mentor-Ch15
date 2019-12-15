import React from 'react';
import StoryRouter from 'storybook-react-router';
import FilterBar from './FilterBar';

export default {
  components: FilterBar,
  title: 'Organisms/FilterBar',
  decorators: [StoryRouter()]
};

export const normal = () => <FilterBar />;
