import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { useStaticQuery } from 'gatsby';

import ExternalProjectsPage from '../external-projects';
import data from './fixtures/external-projects';

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'New Relic Open Source',
        description:
          "New Relic <3's open source. We built this site to make it easy for you to explore the projects we're maintaining as well as our involvement in open standards.",
        author: '@newrelic'
      }
    }
  }));
});

describe('External Projects Page', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <ExternalProjectsPage data={data} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
