import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';

import Header from '../Header';

const source = createMemorySource('/');
const history = createHistory(source);

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'New Relic Open Source',
        description:
          "New Relic <3's open source. We built this site to make it easy for you to explore the projects we're maintaining as well as our involvement in open standards.",
        author: '@newrelic',
      },
      layout: {
        maxWidth: '1180px',
      },
    },
  }));
});

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LocationProvider history={history}>
          <Header />
        </LocationProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
