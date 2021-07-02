import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';

import PillList from '../../src/PillList';
import Pill from '../../src/Pill';

/* Basic Pill */
it('should render a basic pill', () => {
  const wrapper = shallow(<Pill label="label" />);
  expect(wrapper).toMatchSnapshot();
});

/* Removable Pill */
it('should render a removable pill', () => {
  const wrapper = shallow(<Pill label="label" onRemove={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

/* Theme Context */
it('correctly applies the theme context className', () => {
  const wrapper = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <PillList ariaLabel="pill list label">
        <Pill label="pill label" />
      </PillList>
    </ThemeContextProvider>,
  );
  expect(wrapper).toMatchSnapshot();
});
