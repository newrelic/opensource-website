import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';

import Header from '../Header';

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
        maxWidth: '1180px'
      }
    }
  }));
});

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
