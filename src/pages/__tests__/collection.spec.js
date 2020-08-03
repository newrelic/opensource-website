import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { useStaticQuery } from 'gatsby';

import CollectionPage from '../collection';
import data from './fixtures/collection';

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'New Relic Open Source',
        description:
          "New Relic <3's open source. We built this site to make it easy for you to explore the projects we're maintaining as well as our involvement in open standards.",
        author: '@newrelic'
      },
      layout: {
        maxWidth: '1236px'
      }
    }
  }));
});

describe('Data Collection Agents Page', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(<CollectionPage data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
