export default {
  topProjects: {
    edges: [
      {
        node: {
          id: '23b3ee20-c14c-5951-a959-6e5bb64322dc',
          acceptsContributions: null,
          name: 'best-practices-for-measuring-your-code-pipeline',
          title: 'Code Pipeline Webinar Demo App',
          fullName: 'newrelic/best-practices-for-measuring-your-code-pipeline',
          isParentProject: null,
          stats: {
            contributors: 1,
            releases: 0,
            id: '818688c6-9179-5e4d-9931-72b71decd3d8',
            pullRequests: {
              open: 3,
            },
            searchCategory: 'good first issue',
            commits: 1,
            lastSixMonthsCommitTotal: 0,
            cachedIssues: [],
            cachedContributors: [
              {
                avatarUrl:
                  'https://avatars3.githubusercontent.com/u/1082112?v=4',
                contributions: 1,
                htmlUrl: 'https://github.com/ericmittelhammer',
                id: 1082112,
                login: 'ericmittelhammer',
              },
            ],
            issues: {
              open: 0,
            },
            latestRelease: null,
            license: null,
            screenshots: [],
          },
          githubUrl:
            'https://github.com/newrelic/best-practices-for-measuring-your-code-pipeline',
          iconUrl:
            'https://github.com/newrelic/best-practices-for-measuring-your-code-pipeline/blob/master/icon.png?raw=true',
          description:
            'Best Practices for Measuring Your Code Pipeline Webinar',
          ossCategory: {
            slug: 'example-code',
            title: 'Example Code',
            description:
              'This code demonstrates an aspect of building on the New Relic One platform. Find the complete description of its usage and other relevant docs in the README. There is no long-term maintainer for this code nor is support provided, but the author(s) may address future updates / needs as platform features change.',
          },
          owner: {
            login: 'newrelic',
            type: 'Organization',
          },
          permalink:
            'https://opensource.newrelic.com/projects/newrelic/best-practices-for-measuring-your-code-pipeline',
          primaryLanguage: 'JavaScript',
          shortDescription: 'Example code measuring your code pipeline',
          supportUrl: null,
          projectTags: [],
          team: null,
          mainContent: {
            mdx: {
              compiledMdx:
                'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/best-practices-for-measuring-your-code-pipeline",\n  "date": "05/01/2020",\n  "title": "Code Pipeline Webinar Demo App",\n  "projectConfig": "src/data/projects/newrelic-best-practices-for-measuring-your-code-pipeline.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Getting Started"), mdx("p", null, "Go to the project\'s ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/best-practices-for-measuring-your-code-pipeline",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), " for setup and usage details."));\n}\n;\nMDXContent.isMDXComponent = true;',
            },
          },
        },
      },
    ],
  },
};
