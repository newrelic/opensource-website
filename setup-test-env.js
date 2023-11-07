import React from 'react';
import { createSerializer } from '@emotion/jest';
import * as emotion from '@emotion/react';
import '@testing-library/jest-dom';
import { mockMediaQueryList } from 'use-media/lib/useMedia';

expect.addSnapshotSerializer(createSerializer(emotion));

global.matchMedia = jest.fn().mockImplementation((media) => ({
  ...mockMediaQueryList,
  media,
  match: false,
}));

// this mock runs after the test environment is set up,
// but before any tests run.
// any mocks need to be here, because if they're in a test file,
// the mocks aren't properly hoisted (because of ESM) and
// the module won't actually be mocked.
jest.unstable_mockModule('gatsby', () => ({
  __esModule: true,
  graphql: jest.fn(),
  Link: jest.fn(({ to, ...props }) => <a href={to} {...props} />),
  useStaticQuery: jest.fn(() => ({
    allMdx: {
      nodes: [],
    },
    allLocale: {
      nodes: [{ name: 'English', isDefault: true }],
    },
    newRelicThemeConfig: {
      forceTrailingSlashes: false,
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
  })),
}));
