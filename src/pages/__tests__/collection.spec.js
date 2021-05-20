import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import { useStaticQuery } from 'gatsby';
import {
  LocationProvider,
  createHistory,
  createMemorySource,
} from '@reach/router';
import LocaleProvider from '@newrelic/gatsby-theme-newrelic/src/components/LocaleProvider';
import themeTranslations from '@newrelic/gatsby-theme-newrelic/src/i18n/translations/en.json';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

import CollectionPage from '../collection';
import data from './fixtures/collection';

const source = createMemorySource('/');
const history = createHistory(source);
const pageContext = { fileRelativePath: 'src/pages/collection.js' };

const THEME_NAMESPACE = 'gatsby-theme-newrelic';

const queryClient = new QueryClient();

const initI18n = () => {
  i18n.init({
    lng: 'en',
    resources: {
      en: {
        [THEME_NAMESPACE]: themeTranslations,
      },
    },
    defaultNS: 'translation',
    initImmediate: false,
    fallbackLng: 'en',
    ns: [THEME_NAMESPACE, 'translation'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
};

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
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
  }));
});

describe('Data Collection Agents Page', () => {
  it('Renders correctly', () => {
    initI18n();

    const tree = TestRenderer.create(
      <I18nextProvider i18n={i18n}>
        <LocaleProvider i18n={i18n}>
          <QueryClientProvider client={queryClient}>
            <LocationProvider history={history}>
              <CollectionPage data={data} pageContext={pageContext} />
            </LocationProvider>
          </QueryClientProvider>
        </LocaleProvider>
      </I18nextProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
