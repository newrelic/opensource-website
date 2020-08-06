import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { useStaticQuery } from 'gatsby';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';

import HomePage from '../index';
import HomePageHighlights from '../../components/HomePageHighlights';
import HomePageInternalProjects from '../../components/HomePageInternalProjects';

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

describe('HomePage', () => {
  it('Renders correctly', () => {
    const tree = TestRenderer.create(
      <LocationProvider history={history}>
        <HomePage />
      </LocationProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('HomePage Hero Header', () => {
  it('Displays the correct title', () => {
    const { getByTestId } = render(
      <LocationProvider history={history}>
        <HomePage />
      </LocationProvider>
    );
    const expectation = getByTestId('homepageHeroHeading');
    expect(expectation).toHaveTextContent(
      'Open standards. Open instrumentation. Open collaboration.'
    );
  });
});

describe('HomePage Projects We Support', () => {
  it('Renders correctly', () => {
    const testRenderer = TestRenderer.create(
      <LocationProvider history={history}>
        <HomePage />
      </LocationProvider>
    );
    const testInstance = testRenderer.root;
    const props = testInstance.findByType(HomePageHighlights).props;

    expect(Array.isArray(props.data)).toBe(true);
  });
});

describe('HomePage Explore Projects', () => {
  it('renders correctly', () => {
    const testRenderer = TestRenderer.create(
      <LocationProvider history={history}>
        <HomePage />
      </LocationProvider>
    );
    const testInstance = testRenderer.root;

    const props = testInstance.findByType(HomePageInternalProjects).props;

    expect(Array.isArray(props.data)).toBe(true);
  });
});
