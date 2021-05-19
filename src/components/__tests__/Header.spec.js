import React from 'react';
import renderer from 'react-test-renderer';
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

import Header from '../Header';

const source = createMemorySource('/');
const history = createHistory(source);

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
        maxWidth: '1180px',
      },
    },
  }));
});

describe('Header', () => {
  it('renders correctly', () => {
    initI18n();

    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <LocaleProvider i18n={i18n}>
            <QueryClientProvider client={queryClient}>
              <LocationProvider history={history}>
                <Header />
              </LocationProvider>
            </QueryClientProvider>
          </LocaleProvider>
        </I18nextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
