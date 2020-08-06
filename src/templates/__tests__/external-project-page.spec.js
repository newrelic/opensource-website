import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { useStaticQuery } from 'gatsby';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';

import ExternalProjectPage from '../external-project-page';
import data from './fixtures/external-project-page';

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
        maxWidth: '1236px',
      },
    },
  }));
});

describe('Open Telemetry Page', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <LocationProvider history={history}>
        <ExternalProjectPage data={data['projects/open-telemetry']} />
      </LocationProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('W3C Distributed Tracing Working Group', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <LocationProvider history={history}>
        <ExternalProjectPage
          data={data['projects/w3c-distributed-tracing-wg']}
        />
      </LocationProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Adopt OpenJDK', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <LocationProvider history={history}>
        <ExternalProjectPage data={data['projects/adopt-open-jdk']} />
      </LocationProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
