import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { useStaticQuery } from 'gatsby';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';

import OssCategoryPage from '../oss-category';
import data from './fixtures/oss-category';

const source = createMemorySource('/');
const history = createHistory(source);
const pageContext = { fileRelativePath: 'src/pages/oss-category.js' };

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    allMdx: {
      nodes: [],
    },
    site: {
      siteMetadata: {
        title: 'New Relic Open Source',
        description:
          "New Relic <3's open source. We built this site to make it easy for you to explore the projects we're maintaining as well as our involvement in open standards.",
        author: '@newrelic',
      },
      layout: {
        maxWidth: '1236px',
      },
    },
  }));
});

describe('OSS Category Page', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <LocationProvider history={history}>
        <OssCategoryPage data={data} pageContext={pageContext} />
      </LocationProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
