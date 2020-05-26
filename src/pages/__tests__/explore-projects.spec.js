import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
// import { useStaticQuery } from 'gatsby';

import ExploreProjectsPage from '../explore-projects';
import data from './fixtures/explore-projects';

describe('Explore Projects Page', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <ExploreProjectsPage data={data} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
