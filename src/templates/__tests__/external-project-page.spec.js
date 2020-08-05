import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { useStaticQuery } from 'gatsby';

import ExternalProjectPage from '../external-project-page';
import data from './fixtures/external-project-page';

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'New Relic Open Source',
        description:
          "New Relic <3's open source. We built this site to make it easy for you to explore the projects we're maintaining as well as our involvement in open standards.",
        author: '@newrelic',
      },
    },
  }));
});

describe('Open Telemetry Page', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <ExternalProjectPage data={data['projects/open-telemetry']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('W3C Distributed Tracing Working Group', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <ExternalProjectPage data={data['projects/w3c-distributed-tracing-wg']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Adopt OpenJDK', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <ExternalProjectPage data={data['projects/adopt-open-jdk']} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
