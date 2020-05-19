import React from 'react';
// import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeading from '../components/PageHeading';
import SimpleProjectModule from '../components/SimpleProjectModule';

import styles from './collection.module.scss';

const ExternalProjects = () => {
  const projects = [
    {
      id: '6d71f0c4-6882-5bfe-83d9-818ab17bf8b4',
      acceptsContributions: true,
      name: 'opensource-website',
      title: 'New Relic Open Source Website',
      fullName: 'newrelic/opensource-website',
      isParentProject: null,
      stats: null,
      githubUrl: 'https://github.com/newrelic/opensource-website',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description: 'Data, code, and automation for opensource.newrelic.com',
      ossCategory: {
        slug: 'community-project',
        title: 'Community Project',
        description:
          'This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink:
        'https://opensource.newrelic.com/projects/newrelic/opensource-website',
      primaryLanguage: 'JavaScript',
      shortDescription: 'Gatsby website catalog of New Relic Open Source',
      supportUrl: null,
      projectTags: [
        {
          title: 'Documentation',
          slug: 'docs'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/opensource-website",\n  "date": "2020-05-04",\n  "title": "New Relic Open Source Website"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("div", {\n    className: "responsive-video"\n  }, mdx("iframe", {\n    width: "560",\n    height: "315",\n    src: "https://www.youtube.com/embed/7wnav6Fu9T0",\n    frameBorder: "0",\n    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",\n    allowFullScreen: true\n  })), mdx("p", null, "Fork or contribute code to this website. Very ", mdx("em", {\n    parentName: "p"\n  }, "meta"), "."), mdx("h2", null, "Getting Started"), mdx("p", null, "Because this website is a ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://www.gatsbyjs.org/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "Gatsby"), " project, local development is as easy as:"), mdx("pre", null, mdx("code", _extends({\n    parentName: "pre"\n  }, {\n    "className": "language-bash"\n  }), "git clone https://github.com/newrelic/opensource-website.git\\nnpm install\\nnpm start\\n")), mdx("p", null, "Find the details instructions for getting started in the project ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/opensource-website",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), "."), mdx("h2", null, "Features"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, "Register new/update projects via a ", mdx("a", _extends({\n    parentName: "li"\n  }, {\n    "href": "https://github.com/newrelic/opensource-website#contributing-project-data",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "documented PR process")), mdx("li", {\n    parentName: "ul"\n  }, "Automatically refreshes ", mdx("a", _extends({\n    parentName: "li"\n  }, {\n    "href": "https://github.com/newrelic/opensource-website/tree/master/src/data/project-stats",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "projects statistics"), " via GitHub Action automation"), mdx("li", {\n    parentName: "ul"\n  }, "Leverages ", mdx("a", _extends({\n    parentName: "li"\n  }, {\n    "href": "https://mdxjs.com/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "MDX"), " for hybrid React/Markdown pages")));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    },
    {
      id: '8b760335-58f6-5aa8-8805-d986868d7aaf',
      acceptsContributions: true,
      name: 'newrelic-client-go',
      title: 'New Relic Go Client',
      fullName: 'newrelic/newrelic-client-go',
      isParentProject: null,
      stats: {
        contributors: 8,
        releases: 33,
        id: 'f2d6f6ef-7d4c-5b78-b464-9ccd45b3c025',
        pullRequests: {
          open: 0
        },
        searchCategory: 'good first issue',
        commits: 650,
        cachedIssues: [],
        cachedContributors: [
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/138513?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/bthemad',
            id: 138513,
            login: 'bthemad'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/3596655?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/jhunthrop',
            id: 3596655,
            login: 'jhunthrop'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/723533?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/monkeyherder',
            id: 723533,
            login: 'monkeyherder'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/25180681?v=4',
            contributions: 21,
            htmlUrl: 'https://github.com/renovate-bot',
            id: 25180681,
            login: 'renovate-bot'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/29264964?v=4',
            contributions: 23,
            htmlUrl: 'https://github.com/zlesnr',
            id: 29264964,
            login: 'zlesnr'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/455419?v=4',
            contributions: 134,
            htmlUrl: 'https://github.com/jthurman42',
            id: 455419,
            login: 'jthurman42'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/2590905?v=4',
            contributions: 144,
            htmlUrl: 'https://github.com/sanderblue',
            id: 2590905,
            login: 'sanderblue'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/413389?v=4',
            contributions: 184,
            htmlUrl: 'https://github.com/ctrombley',
            id: 413389,
            login: 'ctrombley'
          }
        ],
        issues: {
          open: 5
        },
        latestRelease: {
          date: '2020-05-13T22:02:56Z',
          name: 'v0.23.4'
        },
        license: {
          key: 'apache-2.0',
          name: 'Apache License 2.0',
          spdxId: 'Apache-2.0',
          url: 'http://choosealicense.com/licenses/apache-2.0/'
        },
        screenshots: []
      },
      githubUrl: 'https://github.com/newrelic/newrelic-client-go',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description: 'New Relic Client for the Go programming language',
      ossCategory: {
        slug: 'example-code',
        title: 'Example Code',
        description:
          'This code demonstrates an aspect of building on the New Relic One platform. Find the complete description of its usage and other relevant docs in the README. There is no long-term maintainer for this code nor is support provided, but the author(s) may address future updates / needs as platform features change.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink:
        'https://opensource.newrelic.com/projects/newrelic/newrelic-client-go',
      primaryLanguage: 'Go',
      shortDescription: 'Example code for Golong',
      supportUrl: null,
      projectTags: [
        {
          title: 'Tools',
          slug: 'tools'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/newrelic-client-go",\n  "date": "05/01/2020",\n  "title": "New Relic Go Client",\n  "projectConfig": "src/data/projects/newrelic-newrelic-client-go.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Getting Started"), mdx("p", null, "Go to the project\'s ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/newrelic-client-go",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), " for setup and usage details."));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    },
    {
      id: 'dd864d24-ac0b-54e1-bc13-331fe0638ea6',
      acceptsContributions: true,
      name: 'node-newrelic',
      title: 'New Relic Node Agent',
      fullName: 'newrelic/node-newrelic',
      isParentProject: null,
      stats: {
        contributors: 65,
        releases: 259,
        id: '7fc61104-b936-5aa3-be29-58fc748dada0',
        pullRequests: {
          open: 2
        },
        searchCategory: 'good first issue',
        commits: 5980,
        cachedIssues: [],
        cachedContributors: [
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/90898?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/wraithan',
            id: 90898,
            login: 'wraithan'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/188748?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/tregagnon',
            id: 188748,
            login: 'tregagnon'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/224334?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/taxilian',
            id: 224334,
            login: 'taxilian'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/265510?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/tamtamchik',
            id: 265510,
            login: 'tamtamchik'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/353768?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/sebastianhoitz',
            id: 353768,
            login: 'sebastianhoitz'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/991932?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/pasieronen',
            id: 991932,
            login: 'pasieronen'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/373545?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/papandreou',
            id: 373545,
            login: 'papandreou'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/3165635?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/oliviertassinari',
            id: 3165635,
            login: 'oliviertassinari'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/171515?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/nullvariable',
            id: 171515,
            login: 'nullvariable'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1264102?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/mcmahoniel',
            id: 1264102,
            login: 'mcmahoniel'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/18589982?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/mastfissh',
            id: 18589982,
            login: 'mastfissh'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/736932?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/lmarkus',
            id: 736932,
            login: 'lmarkus'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/50803?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/lightbody',
            id: 50803,
            login: 'lightbody'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/929018?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/kschat',
            id: 929018,
            login: 'kschat'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/17498?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/kolanos',
            id: 17498,
            login: 'kolanos'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1437394?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/kennethaasan',
            id: 1437394,
            login: 'kennethaasan'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/4969737?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/juanigallo',
            id: 4969737,
            login: 'juanigallo'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/6752382?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/jlegrone',
            id: 6752382,
            login: 'jlegrone'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/3799709?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/jakecraige',
            id: 3799709,
            login: 'jakecraige'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/101073?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/guilhermef',
            id: 101073,
            login: 'guilhermef'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1074881?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/dy-dx',
            id: 1074881,
            login: 'dy-dx'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/197140?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/devfreddy',
            id: 197140,
            login: 'devfreddy'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/274835?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/davebobak',
            id: 274835,
            login: 'davebobak'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/281961?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/daaray',
            id: 281961,
            login: 'daaray'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/20105?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/case',
            id: 20105,
            login: 'case'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/422180?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/bruun',
            id: 422180,
            login: 'bruun'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1672480?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/briandela',
            id: 1672480,
            login: 'briandela'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/20630?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/bjornstar',
            id: 20630,
            login: 'bjornstar'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/70015?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/atomantic',
            id: 70015,
            login: 'atomantic'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/1194048?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/asturur',
            id: 1194048,
            login: 'asturur'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/981007?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/asilvas',
            id: 981007,
            login: 'asilvas'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/4495536?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/andrewgoetz',
            id: 4495536,
            login: 'andrewgoetz'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1826366?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/Sinewyk',
            id: 1826366,
            login: 'Sinewyk'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/14006450?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/Rilsta',
            id: 14006450,
            login: 'Rilsta'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/2708180?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/Maubic',
            id: 2708180,
            login: 'Maubic'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/4923668?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/DullReferenceException',
            id: 4923668,
            login: 'DullReferenceException'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/2061434?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/AKPWebDesign',
            id: 2061434,
            login: 'AKPWebDesign'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/4408911?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/roymiloh',
            id: 4408911,
            login: 'roymiloh'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/474603?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/joaovieira',
            id: 474603,
            login: 'joaovieira'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/151172?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/jhollingworth',
            id: 151172,
            login: 'jhollingworth'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/538212?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/chrisahansen',
            id: 538212,
            login: 'chrisahansen'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1162380?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/bwolfe',
            id: 1162380,
            login: 'bwolfe'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1125900?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/StyleT',
            id: 1125900,
            login: 'StyleT'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/2033608?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/BrighTide',
            id: 2033608,
            login: 'BrighTide'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/621861?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/tkrajcar',
            id: 621861,
            login: 'tkrajcar'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/106903?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/mdlavin',
            id: 106903,
            login: 'mdlavin'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/25829?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/markstos',
            id: 25829,
            login: 'markstos'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/6374032?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/a-feld',
            id: 6374032,
            login: 'a-feld'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/3240137?v=4',
            contributions: 6,
            htmlUrl: 'https://github.com/aorinevo',
            id: 3240137,
            login: 'aorinevo'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/28942544?v=4',
            contributions: 9,
            htmlUrl: 'https://github.com/katiewest820',
            id: 28942544,
            login: 'katiewest820'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/585473?v=4',
            contributions: 9,
            htmlUrl: 'https://github.com/MattWhelan',
            id: 585473,
            login: 'MattWhelan'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/6933980?v=4',
            contributions: 12,
            htmlUrl: 'https://github.com/sethshober',
            id: 6933980,
            login: 'sethshober'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/538488?v=4',
            contributions: 12,
            htmlUrl: 'https://github.com/groundwater',
            id: 538488,
            login: 'groundwater'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/21225410?v=4',
            contributions: 13,
            htmlUrl: 'https://github.com/uturunku1',
            id: 21225410,
            login: 'uturunku1'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1627067?v=4',
            contributions: 37,
            htmlUrl: 'https://github.com/sdaubin',
            id: 1627067,
            login: 'sdaubin'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/816527?v=4',
            contributions: 82,
            htmlUrl: 'https://github.com/hayes',
            id: 816527,
            login: 'hayes'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/398399?v=4',
            contributions: 109,
            htmlUrl: 'https://github.com/nijotz',
            id: 398399,
            login: 'nijotz'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/54335840?v=4',
            contributions: 123,
            htmlUrl: 'https://github.com/carlonewrelic',
            id: 54335840,
            login: 'carlonewrelic'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/418097?v=4',
            contributions: 135,
            htmlUrl: 'https://github.com/othiym23',
            id: 418097,
            login: 'othiym23'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/4933147?v=4',
            contributions: 141,
            htmlUrl: 'https://github.com/martinkuba',
            id: 4933147,
            login: 'martinkuba'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/32520944?v=4',
            contributions: 234,
            htmlUrl: 'https://github.com/astormnewrelic',
            id: 32520944,
            login: 'astormnewrelic'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/11223178?v=4',
            contributions: 469,
            htmlUrl: 'https://github.com/michaelgoin',
            id: 11223178,
            login: 'michaelgoin'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1342804?v=4',
            contributions: 618,
            htmlUrl: 'https://github.com/lykkin',
            id: 1342804,
            login: 'lykkin'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/466761?v=4',
            contributions: 692,
            htmlUrl: 'https://github.com/NatalieWolfe',
            id: 466761,
            login: 'NatalieWolfe'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/7945073?v=4',
            contributions: 811,
            htmlUrl: 'https://github.com/psvet',
            id: 7945073,
            login: 'psvet'
          }
        ],
        issues: {
          open: 8
        },
        latestRelease: {
          date: null,
          name: 'v6.7.0'
        },
        license: {
          key: 'other',
          name: 'Other',
          spdxId: 'NOASSERTION',
          url: 'http://choosealicense.com/licenses/other/'
        },
        screenshots: []
      },
      githubUrl: 'https://github.com/newrelic/node-newrelic',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description: 'New Relic Node.js Agent',
      ossCategory: {
        slug: 'community-project',
        title: 'Community Project',
        description:
          'This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink:
        'https://opensource.newrelic.com/projects/newrelic/node-newrelic',
      primaryLanguage: 'JavaScript',
      shortDescription: 'Automated instrumentation for Node.js',
      supportUrl: null,
      projectTags: [
        {
          title: 'Agent',
          slug: 'agent'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/node-newrelic",\n  "date": "05/01/2020",\n  "title": "New Relic Node Agent",\n  "projectConfig": "src/data/projects/newrelic-node-newrelic.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Getting Started"), mdx("p", null, "Go to the project\'s ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/node-newrelic",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), " for setup and usage details."));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    },
    {
      id: '96cf60d4-2409-51e6-a100-2b04fd22a745',
      acceptsContributions: true,
      name: 'go-agent',
      title: 'New Relic Go Agent',
      fullName: 'newrelic/go-agent',
      isParentProject: null,
      stats: {
        contributors: 24,
        releases: 90,
        id: 'ad371ff2-b2ad-5a8c-bfcb-7d869e887748',
        pullRequests: {
          open: 0
        },
        searchCategory: 'good first issue',
        commits: 1836,
        cachedIssues: [],
        cachedContributors: [
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/21367523?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/victorNewRelic',
            id: 21367523,
            login: 'victorNewRelic'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/13732144?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/tkivisik',
            id: 13732144,
            login: 'tkivisik'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1462042?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/rvanderwal-newrelic',
            id: 1462042,
            login: 'rvanderwal-newrelic'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/270252?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/rogchap',
            id: 270252,
            login: 'rogchap'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/16337442?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/pyohannes',
            id: 16337442,
            login: 'pyohannes'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/431162?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/pseidemann',
            id: 431162,
            login: 'pseidemann'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/6844359?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/nrlhj',
            id: 6844359,
            login: 'nrlhj'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/4259729?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/nicolas-martin',
            id: 4259729,
            login: 'nicolas-martin'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/7244569?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/murphpdx',
            id: 7244569,
            login: 'murphpdx'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/5800970?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/lvxv',
            id: 5800970,
            login: 'lvxv'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/20638?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/kevburnsjr',
            id: 20638,
            login: 'kevburnsjr'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/1747562?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/jlordiales',
            id: 1747562,
            login: 'jlordiales'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/590773?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/flaviotruzzi',
            id: 590773,
            login: 'flaviotruzzi'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/704945?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/alfred-landrum',
            id: 704945,
            login: 'alfred-landrum'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/15604207?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/abeltay',
            id: 15604207,
            login: 'abeltay'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/6454794?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/AncientToaster',
            id: 6454794,
            login: 'AncientToaster'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/982820?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/benweint',
            id: 982820,
            login: 'benweint'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/32655740?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/vinhnewrelic',
            id: 32655740,
            login: 'vinhnewrelic'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/3723686?v=4',
            contributions: 12,
            htmlUrl: 'https://github.com/TylerConlee',
            id: 3723686,
            login: 'TylerConlee'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/32520944?v=4',
            contributions: 17,
            htmlUrl: 'https://github.com/astormnewrelic',
            id: 32520944,
            login: 'astormnewrelic'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/229984?v=4',
            contributions: 22,
            htmlUrl: 'https://github.com/LawnGnome',
            id: 229984,
            login: 'LawnGnome'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/52758187?v=4',
            contributions: 103,
            htmlUrl: 'https://github.com/newrelic-eheinlein',
            id: 52758187,
            login: 'newrelic-eheinlein'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/1383216?v=4',
            contributions: 412,
            htmlUrl: 'https://github.com/purple4reina',
            id: 1383216,
            login: 'purple4reina'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/20211355?v=4',
            contributions: 718,
            htmlUrl: 'https://github.com/willnewrelic',
            id: 20211355,
            login: 'willnewrelic'
          }
        ],
        issues: {
          open: 12
        },
        latestRelease: {
          date: '2020-03-23T19:37:05Z',
          name: 'v3.4.0'
        },
        license: {
          key: 'other',
          name: 'Other',
          spdxId: 'NOASSERTION',
          url: 'http://choosealicense.com/licenses/other/'
        },
        screenshots: []
      },
      githubUrl: 'https://github.com/newrelic/go-agent',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description: 'New Relic Go Agent',
      ossCategory: {
        slug: 'community-project',
        title: 'Community Project',
        description:
          'This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink: 'https://opensource.newrelic.com/projects/newrelic/go-agent',
      primaryLanguage: 'Go',
      shortDescription: 'New Relic Go Agent',
      supportUrl: null,
      projectTags: [
        {
          title: 'Agent',
          slug: 'agent'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/go-agent",\n  "date": "05/01/2020",\n  "title": "New Relic Go Agent",\n  "projectConfig": "src/data/projects/newrelic-go-agent.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Getting Started"), mdx("p", null, "Go to the project\'s ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/go-agent",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), " for setup and usage details."));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    },
    {
      id: '32e0ac3d-c1e3-56c2-81f7-2e8d93dabcce',
      acceptsContributions: true,
      name: 'newrelic-cli',
      title: 'New Relic CLI',
      fullName: 'newrelic/newrelic-cli',
      isParentProject: null,
      stats: {
        contributors: 6,
        releases: 18,
        id: '2d43ae93-8b2f-5d97-89eb-5d032999b11f',
        pullRequests: {
          open: 4
        },
        searchCategory: 'good first issue',
        commits: 479,
        cachedIssues: [],
        cachedContributors: [
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/929261?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/tangollama',
            id: 929261,
            login: 'tangollama'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/25180681?v=4',
            contributions: 19,
            htmlUrl: 'https://github.com/renovate-bot',
            id: 25180681,
            login: 'renovate-bot'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/2590905?v=4',
            contributions: 25,
            htmlUrl: 'https://github.com/sanderblue',
            id: 2590905,
            login: 'sanderblue'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/29264964?v=4',
            contributions: 49,
            htmlUrl: 'https://github.com/zlesnr',
            id: 29264964,
            login: 'zlesnr'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/413389?v=4',
            contributions: 78,
            htmlUrl: 'https://github.com/ctrombley',
            id: 413389,
            login: 'ctrombley'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/455419?v=4',
            contributions: 144,
            htmlUrl: 'https://github.com/jthurman42',
            id: 455419,
            login: 'jthurman42'
          }
        ],
        issues: {
          open: 19
        },
        latestRelease: {
          date: '2020-05-11T20:36:03Z',
          name: 'v0.8.4'
        },
        license: {
          key: 'apache-2.0',
          name: 'Apache License 2.0',
          spdxId: 'Apache-2.0',
          url: 'http://choosealicense.com/licenses/apache-2.0/'
        },
        screenshots: []
      },
      githubUrl: 'https://github.com/newrelic/newrelic-cli',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description: 'The New Relic Command Line Interface',
      ossCategory: {
        slug: 'community-project',
        title: 'Community Project',
        description:
          'This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink:
        'https://opensource.newrelic.com/projects/newrelic/newrelic-cli',
      primaryLanguage: 'Go',
      shortDescription: 'Automate workflows with New Relic',
      supportUrl:
        'https://discuss.newrelic.com/c/build-on-new-relic/developer-toolkit',
      projectTags: [
        {
          title: 'Command Line Utility',
          slug: 'cli'
        },
        {
          title: 'Tools',
          slug: 'tools'
        },
        {
          title: 'Developer Toolkit',
          slug: 'dev-toolkit'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/newrelic-cli",\n  "date": "05/01/2020",\n  "title": "New Relic CLI",\n  "projectConfig": "src/data/projects/newrelic-newrelic-cli.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("div", {\n    className: "responsive-video"\n  }, mdx("iframe", {\n    width: "560",\n    height: "315",\n    src: "https://www.youtube.com/embed/g00AeKlECZA",\n    frameBorder: "0",\n    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",\n    allowFullScreen: true\n  })), mdx("p", null, "The New Relic CLI is an officially supported command line interface for New Relic, released as part of the ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://newrelic.github.io/developer-toolkit/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "Developer Toolkit"), "\\tThe New Relic CLI is an officially supported command line interface for New Relic, released as part of the ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://newrelic.github.io/developer-toolkit/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "Developer Toolkit")), mdx("h2", null, "Getting Started"), mdx("p", null, "Find the usage, installation instructions, and examples linked from the project ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/newrelic-cli",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), "."));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    },
    {
      id: 'dcf9b79c-5d78-586b-bbfe-e7562a25507c',
      acceptsContributions: true,
      name: 'rpm',
      title: 'New Relic Ruby Agent',
      fullName: 'newrelic/rpm',
      isParentProject: null,
      stats: {
        contributors: 100,
        releases: 358,
        id: '4976d397-e9fd-5ea3-ab5a-aa96b878d788',
        pullRequests: {
          open: 4
        },
        searchCategory: 'good first issue',
        commits: 13588,
        cachedIssues: [],
        cachedContributors: [
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/254393?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/zog',
            id: 254393,
            login: 'zog'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/5356517?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/yui-knk',
            id: 5356517,
            login: 'yui-knk'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/178135?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/wpeterson',
            id: 178135,
            login: 'wpeterson'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/101691?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/vvondra',
            id: 101691,
            login: 'vvondra'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/6506296?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/v-kolesnikov',
            id: 6506296,
            login: 'v-kolesnikov'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/1024789?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/thaim',
            id: 1024789,
            login: 'thaim'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/157270?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/swrobel',
            id: 157270,
            login: 'swrobel'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1039403?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/rafavalerio',
            id: 1039403,
            login: 'rafavalerio'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/300471?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/rafaelpetry',
            id: 300471,
            login: 'rafaelpetry'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/497874?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/orien',
            id: 497874,
            login: 'orien'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/153388?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/ojab',
            id: 153388,
            login: 'ojab'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/1811616?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/ohbarye',
            id: 1811616,
            login: 'ohbarye'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1809170?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/nilsding',
            id: 1809170,
            login: 'nilsding'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/929022?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/mengqing',
            id: 929022,
            login: 'mengqing'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/209729?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/kevingriffin',
            id: 209729,
            login: 'kevingriffin'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/4415912?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/jrmhaig',
            id: 4415912,
            login: 'jrmhaig'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/283234?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/jacobbednarz',
            id: 283234,
            login: 'jacobbednarz'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1907408?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/glaucocustodio',
            id: 1907408,
            login: 'glaucocustodio'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/241633?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/dmeremyanin',
            id: 241633,
            login: 'dmeremyanin'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/5115928?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/danascheider',
            id: 5115928,
            login: 'danascheider'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/10076?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/claudiob',
            id: 10076,
            login: 'claudiob'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/337117?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/bpaquet',
            id: 337117,
            login: 'bpaquet'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/47330?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/andreacfm',
            id: 47330,
            login: 'andreacfm'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/2619388?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/Spharian',
            id: 2619388,
            login: 'Spharian'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/15195419?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/Sam-Killgallon',
            id: 15195419,
            login: 'Sam-Killgallon'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/22486?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/PatrickTulskie',
            id: 22486,
            login: 'PatrickTulskie'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/229984?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/LawnGnome',
            id: 229984,
            login: 'LawnGnome'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/7987724?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/Izzette',
            id: 7987724,
            login: 'Izzette'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/8122246?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/Edouard-chin',
            id: 8122246,
            login: 'Edouard-chin'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1396855?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/AlexRiedler',
            id: 1396855,
            login: 'AlexRiedler'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/436912?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/troex',
            id: 436912,
            login: 'troex'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/5795302?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/tonyta',
            id: 5795302,
            login: 'tonyta'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/2567?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/tmm1',
            id: 2567,
            login: 'tmm1'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/263409?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/soupmatt',
            id: 263409,
            login: 'soupmatt'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/35549?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/rykov',
            id: 35549,
            login: 'rykov'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/4725264?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/rdokov',
            id: 4725264,
            login: 'rdokov'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/186424?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/panthomakos',
            id: 186424,
            login: 'panthomakos'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/479496?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/nihonjinrxs',
            id: 479496,
            login: 'nihonjinrxs'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/2911?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/mperham',
            id: 2911,
            login: 'mperham'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/218237?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/morenocarullo',
            id: 218237,
            login: 'morenocarullo'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/51594?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/miyucy',
            id: 51594,
            login: 'miyucy'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/115?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/lawrencepit',
            id: 115,
            login: 'lawrencepit'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/2173?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/langalex',
            id: 2173,
            login: 'langalex'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/12275387?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/keels125',
            id: 12275387,
            login: 'keels125'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/2598096?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/jturkel',
            id: 2598096,
            login: 'jturkel'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/26342?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/jsuchal',
            id: 26342,
            login: 'jsuchal'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/737325?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/dharamgollapudi',
            id: 737325,
            login: 'dharamgollapudi'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/7851?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/dbussink',
            id: 7851,
            login: 'dbussink'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/504083?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/cwholt',
            id: 504083,
            login: 'cwholt'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/82603?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/brucek',
            id: 82603,
            login: 'brucek'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/386?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/brainopia',
            id: 386,
            login: 'brainopia'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/860?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/bkudria',
            id: 860,
            login: 'bkudria'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1048314?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/athurn',
            id: 1048314,
            login: 'athurn'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/100632?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/amasses',
            id: 100632,
            login: 'amasses'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/86065?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/YorickPeterse',
            id: 86065,
            login: 'YorickPeterse'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/570755?v=4',
            contributions: 2,
            htmlUrl: 'https://github.com/NielsKSchjoedt',
            id: 570755,
            login: 'NielsKSchjoedt'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/34120?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/strayhud',
            id: 34120,
            login: 'strayhud'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/12671?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/postmodern',
            id: 12671,
            login: 'postmodern'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/3507058?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/packrat386',
            id: 3507058,
            login: 'packrat386'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1020?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/justinweiss',
            id: 1020,
            login: 'justinweiss'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/2377?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/jdelStrother',
            id: 2377,
            login: 'jdelStrother'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/12839?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/fnordfish',
            id: 12839,
            login: 'fnordfish'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/542335?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/dblock',
            id: 542335,
            login: 'dblock'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/139940?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/david-j-peterson',
            id: 139940,
            login: 'david-j-peterson'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/75132?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/codegoalie',
            id: 75132,
            login: 'codegoalie'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/179065?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/charliesome',
            id: 179065,
            login: 'charliesome'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/232906?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/blaet',
            id: 232906,
            login: 'blaet'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/887?v=4',
            contributions: 5,
            htmlUrl: 'https://github.com/mislav',
            id: 887,
            login: 'mislav'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1930?v=4',
            contributions: 5,
            htmlUrl: 'https://github.com/kbrock',
            id: 1930,
            login: 'kbrock'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/199?v=4',
            contributions: 5,
            htmlUrl: 'https://github.com/jeremy',
            id: 199,
            login: 'jeremy'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/4481921?v=4',
            contributions: 5,
            htmlUrl: 'https://github.com/gabeobrien',
            id: 4481921,
            login: 'gabeobrien'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/112037?v=4',
            contributions: 5,
            htmlUrl: 'https://github.com/callumj',
            id: 112037,
            login: 'callumj'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/6454794?v=4',
            contributions: 5,
            htmlUrl: 'https://github.com/AncientToaster',
            id: 6454794,
            login: 'AncientToaster'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/22148?v=4',
            contributions: 7,
            htmlUrl: 'https://github.com/samg',
            id: 22148,
            login: 'samg'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/3467?v=4',
            contributions: 9,
            htmlUrl: 'https://github.com/kovyrin',
            id: 3467,
            login: 'kovyrin'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/9030?v=4',
            contributions: 12,
            htmlUrl: 'https://github.com/durran',
            id: 9030,
            login: 'durran'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/176691?v=4',
            contributions: 14,
            htmlUrl: 'https://github.com/jessedearing',
            id: 176691,
            login: 'jessedearing'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/97996?v=4',
            contributions: 16,
            htmlUrl: 'https://github.com/rkbodenner',
            id: 97996,
            login: 'rkbodenner'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/54611?v=4',
            contributions: 16,
            htmlUrl: 'https://github.com/aughr',
            id: 54611,
            login: 'aughr'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/86957?v=4',
            contributions: 18,
            htmlUrl: 'https://github.com/jpr5',
            id: 86957,
            login: 'jpr5'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/11799492?v=4',
            contributions: 31,
            htmlUrl: 'https://github.com/tannalynn',
            id: 11799492,
            login: 'tannalynn'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/1638076?v=4',
            contributions: 32,
            htmlUrl: 'https://github.com/darinrelic',
            id: 1638076,
            login: 'darinrelic'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/13501?v=4',
            contributions: 55,
            htmlUrl: 'https://github.com/ged',
            id: 13501,
            login: 'ged'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1627067?v=4',
            contributions: 90,
            htmlUrl: 'https://github.com/sdaubin',
            id: 1627067,
            login: 'sdaubin'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/621861?v=4',
            contributions: 92,
            htmlUrl: 'https://github.com/tkrajcar',
            id: 621861,
            login: 'tkrajcar'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/1577272?v=4',
            contributions: 144,
            htmlUrl: 'https://github.com/rsaul',
            id: 1577272,
            login: 'rsaul'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/18387?v=4',
            contributions: 160,
            htmlUrl: 'https://github.com/mwlang',
            id: 18387,
            login: 'mwlang'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/933055?v=4',
            contributions: 177,
            htmlUrl: 'https://github.com/kenichi',
            id: 933055,
            login: 'kenichi'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/4594088?v=4',
            contributions: 228,
            htmlUrl: 'https://github.com/chrispine',
            id: 4594088,
            login: 'chrispine'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/30514?v=4',
            contributions: 233,
            htmlUrl: 'https://github.com/cirne',
            id: 30514,
            login: 'cirne'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/3170392?v=4',
            contributions: 252,
            htmlUrl: 'https://github.com/justinfoote',
            id: 3170392,
            login: 'justinfoote'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/10822861?v=4',
            contributions: 263,
            htmlUrl: 'https://github.com/rachelleahklein',
            id: 10822861,
            login: 'rachelleahklein'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/40875?v=4',
            contributions: 369,
            htmlUrl: 'https://github.com/JimGochee',
            id: 40875,
            login: 'JimGochee'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/3559?v=4',
            contributions: 441,
            htmlUrl: 'https://github.com/jaggederest',
            id: 3559,
            login: 'jaggederest'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/270746?v=4',
            contributions: 476,
            htmlUrl: 'https://github.com/thejonanshow',
            id: 270746,
            login: 'thejonanshow'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/4865?v=4',
            contributions: 701,
            htmlUrl: 'https://github.com/gnarg',
            id: 4865,
            login: 'gnarg'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/2513372?v=4',
            contributions: 1241,
            htmlUrl: 'https://github.com/mwear',
            id: 2513372,
            login: 'mwear'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/982820?v=4',
            contributions: 1331,
            htmlUrl: 'https://github.com/benweint',
            id: 982820,
            login: 'benweint'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/27471?v=4',
            contributions: 1573,
            htmlUrl: 'https://github.com/bkayser',
            id: 27471,
            login: 'bkayser'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/130504?v=4',
            contributions: 1897,
            htmlUrl: 'https://github.com/jasonrclark',
            id: 130504,
            login: 'jasonrclark'
          }
        ],
        issues: {
          open: 4
        },
        latestRelease: {
          date: null,
          name: 'x2_1_7'
        },
        license: {
          key: 'other',
          name: 'Other',
          spdxId: 'NOASSERTION',
          url: 'http://choosealicense.com/licenses/other/'
        },
        screenshots: []
      },
      githubUrl: 'https://github.com/newrelic/rpm',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description: 'New Relic Ruby Agent',
      ossCategory: {
        slug: 'community-project',
        title: 'Community Project',
        description:
          'This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink: 'https://opensource.newrelic.com/projects/newrelic/rpm',
      primaryLanguage: 'Ruby',
      shortDescription: 'Automated instrumentation for Ruby',
      supportUrl: null,
      projectTags: [
        {
          title: 'Agent',
          slug: 'agent'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/rpm",\n  "date": "05/01/2020",\n  "title": "New Relic Ruby Agent",\n  "projectConfig": "src/data/projects/newrelic-rpm.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Getting Started"), mdx("p", null, "Go to the project\'s ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/rpm",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), " for setup and usage details."));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    },
    {
      id: 'b9f63ccf-acf1-55b6-af20-2aaeb93dbf51',
      acceptsContributions: true,
      name: 'newrelic-telemetry-sdk-dotnet',
      title: 'New Relic Telemetry SDK (.NET)',
      fullName: 'newrelic/newrelic-telemetry-sdk-dotnet',
      isParentProject: null,
      stats: {
        contributors: 6,
        releases: 1,
        id: 'a202bc28-92cf-5ab2-83a3-bb7b0879241f',
        pullRequests: {
          open: 1
        },
        searchCategory: 'good first issue',
        commits: 421,
        cachedIssues: [],
        cachedContributors: [
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/54156997?v=4',
            contributions: 3,
            htmlUrl: 'https://github.com/mgodse',
            id: 54156997,
            login: 'mgodse'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/9435570?v=4',
            contributions: 4,
            htmlUrl: 'https://github.com/zuluecho9',
            id: 9435570,
            login: 'zuluecho9'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/3676547?v=4',
            contributions: 26,
            htmlUrl: 'https://github.com/alanwest',
            id: 3676547,
            login: 'alanwest'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/20267975?v=4',
            contributions: 67,
            htmlUrl: 'https://github.com/lspangler584',
            id: 20267975,
            login: 'lspangler584'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/56414817?v=4',
            contributions: 74,
            htmlUrl: 'https://github.com/vuqtran88',
            id: 56414817,
            login: 'vuqtran88'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/3522458?v=4',
            contributions: 136,
            htmlUrl: 'https://github.com/jifeingo',
            id: 3522458,
            login: 'jifeingo'
          }
        ],
        issues: {
          open: 0
        },
        latestRelease: {
          date: '2019-12-11T22:37:05Z',
          name: 'v1.0.0-beta'
        },
        license: {
          key: 'apache-2.0',
          name: 'Apache License 2.0',
          spdxId: 'Apache-2.0',
          url: 'http://choosealicense.com/licenses/apache-2.0/'
        },
        screenshots: []
      },
      githubUrl: 'https://github.com/newrelic/newrelic-telemetry-sdk-dotnet',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description: 'New Relic Telemetry SDK and OpenTelemetry support for .NET',
      ossCategory: {
        slug: 'community-project',
        title: 'Community Project',
        description:
          'This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink:
        'https://opensource.newrelic.com/projects/newrelic/newrelic-telemetry-sdk-dotnet',
      primaryLanguage: 'C#',
      shortDescription: 'New Relic OpenTelemetry for .NET',
      supportUrl: null,
      projectTags: [
        {
          title: 'OpenTelemetry',
          slug: 'opentelemetry'
        },
        {
          title: 'Software Development Kit',
          slug: 'sdk'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/newrelic-telemetry-sdk-dotnet",\n  "date": "05/01/2020",\n  "title": "New Relic Telemetry SDK (.NET)",\n  "projectConfig": "src/data/projects/newrelic-newrelic-telemetry-sdk-dotnet.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "Getting Started"), mdx("p", null, "Go to the project\'s ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/newrelic-telemetry-sdk-dotnet",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "README"), " for setup and usage details."));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    },
    {
      id: '09b223fb-a9f1-56d6-ba80-2df0e7d17571',
      acceptsContributions: true,
      name: 'nr1-workload-geoops',
      title: 'New Relic One Workload Geoops',
      fullName: 'newrelic/nr1-workload-geoops',
      isParentProject: null,
      stats: {
        contributors: 6,
        releases: 9,
        id: '4fb1e3f1-e4d1-5dec-9c59-2a46434ff3f0',
        pullRequests: {
          open: 1
        },
        searchCategory: 'good first issue',
        commits: 358,
        cachedIssues: [
          {
            createdAt: '2020-03-18T15:11:56Z',
            id: 'MDU6SXNzdWU1ODM3OTk1MDY=',
            title:
              'refactor(MapItem): render single map tile instead of whole map',
            url: 'https://github.com/newrelic/nr1-workload-geoops/issues/40',
            comments: {
              totalCount: 0
            },
            number: 40
          },
          {
            createdAt: '2020-03-18T15:27:19Z',
            id: 'MDU6SXNzdWU1ODM4MTAzNDE=',
            title: 'feat(recent incidents): expand the incident user clicks on',
            url: 'https://github.com/newrelic/nr1-workload-geoops/issues/41',
            comments: {
              totalCount: 1
            },
            number: 41
          },
          {
            createdAt: '2020-04-15T14:07:18Z',
            id: 'MDU6SXNzdWU2MDAzMjU0MDA=',
            title:
              'JS Error when adding a Workload that contains Entities outside of the application scope',
            url: 'https://github.com/newrelic/nr1-workload-geoops/issues/59',
            comments: {
              totalCount: 0
            },
            number: 59
          }
        ],
        cachedContributors: [
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/58010132?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/mmfred',
            id: 58010132,
            login: 'mmfred'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/6722433?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/jbeveland27',
            id: 6722433,
            login: 'jbeveland27'
          },
          {
            avatarUrl: 'https://avatars3.githubusercontent.com/u/138513?v=4',
            contributions: 1,
            htmlUrl: 'https://github.com/bthemad',
            id: 138513,
            login: 'bthemad'
          },
          {
            avatarUrl: 'https://avatars0.githubusercontent.com/u/929261?v=4',
            contributions: 58,
            htmlUrl: 'https://github.com/tangollama',
            id: 929261,
            login: 'tangollama'
          },
          {
            avatarUrl: 'https://avatars1.githubusercontent.com/u/197140?v=4',
            contributions: 125,
            htmlUrl: 'https://github.com/devfreddy',
            id: 197140,
            login: 'devfreddy'
          },
          {
            avatarUrl: 'https://avatars2.githubusercontent.com/u/812989?v=4',
            contributions: 131,
            htmlUrl: 'https://github.com/danielgolden',
            id: 812989,
            login: 'danielgolden'
          }
        ],
        issues: {
          open: 18
        },
        latestRelease: {
          date: '2020-04-15T19:18:25Z',
          name: 'v1.1.1'
        },
        license: {
          key: 'apache-2.0',
          name: 'Apache License 2.0',
          spdxId: 'Apache-2.0',
          url: 'http://choosealicense.com/licenses/apache-2.0/'
        },
        screenshots: [
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_01.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_02.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_03.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_04.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/all-maps.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/create-a-map.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/define-locations.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/detail-panel-legend.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/docs-header.svg',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/file-upload.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/fresh-map-legend.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/launcher.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/locations-mapped.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/map-empty-state.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/marker-popover.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/no-locations-mapped.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/review-data.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/settings-popover.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/.gitkeep',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-1.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-2.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-3.png',
          'https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-4.png'
        ]
      },
      githubUrl: 'https://github.com/newrelic/nr1-workload-geoops',
      iconUrl:
        '/static/page-heading-icon-placeholder-4594b67007e7bbe3637744c736611caa.jpg',
      description:
        'New Relic One application for aligning Workload data (or other Entities) in a geographic management console. Think Point-of-Sale alignment of platform features.',
      ossCategory: {
        slug: 'new-relic-one-catalog-project',
        title: 'New Relic One Catalog',
        description:
          'This code is a part of the New Relic One Catalog. It meets the criteria for a Community Project; but it also contains UI workflows for configuration. Most Catalog projects seek to maintain a public roadmap, often expressed in a GitHub Project board and Issues within the repository.'
      },
      owner: {
        login: 'newrelic',
        type: 'Organization'
      },
      permalink:
        'https://opensource.newrelic.com/projects/newrelic/nr1-workload-geoops',
      primaryLanguage: 'JavaScript',
      shortDescription: 'Manage workloads across geographies',
      supportUrl:
        'https://discuss.newrelic.com/t/workload-geoops-nerdpack/99478',
      projectTags: [
        {
          title: 'New Relic One Application',
          slug: 'nr1-app'
        }
      ],
      team: null,
      mainContent: {
        mdx: {
          __typename: 'Mdx',
          compiledMdx:
            'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/newrelic/nr1-workload-geoops",\n  "date": "2020-04-21",\n  "title": "New Relic One Workload Geoops"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("div", {\n    className: "responsive-video"\n  }, mdx("iframe", {\n    width: "560",\n    height: "315",\n    src: "https://www.youtube.com/embed/fh0C553kA3c",\n    frameBorder: "0",\n    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",\n    allowFullScreen: true\n  })), mdx("p", null, "Workloads GeoOps provides a geographic exploration of ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://docs.newrelic.com/docs/new-relic-one/use-new-relic-one/core-concepts/new-relic-one-workloads-isolate-resolve-incidents-faster",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "Workload"), " data (collections of Entities) tied to geographic data, including location metadata. Find additional information in the project\'s ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://github.com/newrelic/nr1-workload-geoops/blob/master/docs/documentation.md",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "docs"), " directory."), mdx("h2", null, "Getting Started"), mdx(NR1AppGettingStartedContent, {\n    project: props.project,\n    mdxType: "NR1AppGettingStartedContent"\n  }), mdx("h2", null, "Features"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, "Align Workloads and Entities to geographic data"), mdx("li", {\n    parentName: "ul"\n  }, "Observe rollup alerting state across Entities tied to location"), mdx("li", {\n    parentName: "ul"\n  }, "Drive into Workload and Entity workflows in New Relic One"), mdx("li", {\n    parentName: "ul"\n  }, "Configure via the point-and-click or my uploading JSON configs"), mdx("li", {\n    parentName: "ul"\n  }, "Use the ", mdx("a", _extends({\n    parentName: "li"\n  }, {\n    "href": "/projects/newrelic/newrelic-cli",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "New Relic CLI"), " to ", mdx("a", _extends({\n    parentName: "li"\n  }, {\n    "href": "https://github.com/newrelic/nr1-workload-geoops/blob/master/docs/AUTOMATION.md",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "automate configuration"))));\n}\n;\nMDXContent.isMDXComponent = true;'
        }
      }
    }
  ];

  return (
    <Layout fullWidth className={styles.collectionPage}>
      <SEO title="Open source projects to which New Relic contributes" />
      <PageHeading
        title="New Relic Agents"
        subheader="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum."
      />
      <div className={styles.featuredVideoContainer}>
        <div className="responsive-video">
          <iframe
            width="578"
            height="328.125"
            src="https://www.youtube.com/embed/g00AeKlECZA?controls=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <section className={styles.primaryBodyCopy}>
        <h5 className={styles.primaryBodyCopyHeader}>
          Duis mollis, est non commodo luctus
        </h5>
        <p className={styles.primaryBodyCopyDescription}>
          Etiam porta sem malesuada magna mollis euismod. Praesent commodo
          cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper
          ult nulla non metus auctor fringilla. Duis mollis, est non commodo
          luctus, eu nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Lorem ipsum Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Integer
          posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu
          leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum
        </p>
      </section>
      <div className={styles.collectionListingContainer}>
        <header className={styles.collectionListingHeaderSection}>
          <h4 className={styles.collectionListingHeaderSectionHeading}>
            Our Agents
          </h4>
          <p className={styles.collectionListingHeaderSectionDescription}>
            Nulla quis tortor orci. Etiam at risus et justo dignissim.
          </p>
        </header>
        <div className={styles.collectionListing}>
          {projects.map(project => {
            return (
              <SimpleProjectModule
                key={project.id}
                data={project}
                className={styles.project}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ExternalProjects;
