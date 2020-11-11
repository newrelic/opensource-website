import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html

import ExploreProjectsPage from '../explore-projects';
import data from './fixtures/explore-projects';

describe('Explore Projects Page', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <ExploreProjectsPage
        data={data}
        pageContext={{ fileRelativePath: 'src/pages/explore-projects.js' }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
