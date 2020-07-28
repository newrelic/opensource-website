import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import { css } from '@emotion/core';

import styles from './HomepageCollection.module.scss';
import SimpleProjectModule from './SimpleProjectModule';

const Footer = () => {
  const [projectsHovered, setProjectsHovered] = useState(false);
  const projects = [
    {
      "id": "46e4eeb4-ffdb-56c5-a86f-3400c9414721",
      "acceptsContributions": true,
      "name": "developer-website",
      "title": "New Relic Developer Website",
      "fullName": "newrelic/developer-website",
      "slug": "newrelic-developer-website",
      "isParentProject": null,
      "stats": {
        "contributors": 24,
        "releases": 11,
        "id": "8ec8d061-ca93-5be7-a924-2c05bb4bff05",
        "pullRequests": {
          "open": 6
        },
        "searchCategory": "good first issue",
        "commits": 1876,
        "lastSixMonthsCommitTotal": 1876,
        "cachedIssues": [
          {
            "createdAt": "2020-06-18T10:38:52Z",
            "id": "MDU6SXNzdWU2NDExMDA5ODA=",
            "title": "Animated GIFs are not supported",
            "url": "https://github.com/newrelic/developer-website/issues/179",
            "comments": {
              "totalCount": 1
            },
            "number": 179
          },
          {
            "createdAt": "2020-06-23T00:42:21Z",
            "id": "MDU6SXNzdWU2NDM0NDU2NzI=",
            "title": "Add space between final step and general text.",
            "url": "https://github.com/newrelic/developer-website/issues/219",
            "comments": {
              "totalCount": 0
            },
            "number": 219
          },
          {
            "createdAt": "2020-06-23T19:11:44Z",
            "id": "MDU6SXNzdWU2NDQwODAzNjI=",
            "title": "Automatic code formatting is a bit too aggressive",
            "url": "https://github.com/newrelic/developer-website/issues/222",
            "comments": {
              "totalCount": 0
            },
            "number": 222
          }
        ],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/6426523?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/veextee",
            "id": 6426523,
            "login": "veextee"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1187068?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/tariqahmed",
            "id": 1187068,
            "login": "tariqahmed"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/929261?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/tangollama",
            "id": 929261,
            "login": "tangollama"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2952843?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/roadlittledawn",
            "id": 2952843,
            "login": "roadlittledawn"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/3792897?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/honeyd",
            "id": 3792897,
            "login": "honeyd"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/67129743?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/dbarnesbrownNR",
            "id": 67129743,
            "login": "dbarnesbrownNR"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/39946?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/binaryseed",
            "id": 39946,
            "login": "binaryseed"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/46462340?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/abuchanan-nr",
            "id": 46462340,
            "login": "abuchanan-nr"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/413389?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/ctrombley",
            "id": 413389,
            "login": "ctrombley"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/7992384?v=4",
            "contributions": 4,
            "htmlUrl": "https://github.com/paperclypse",
            "id": 7992384,
            "login": "paperclypse"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/3023056?v=4",
            "contributions": 11,
            "htmlUrl": "https://github.com/timglaser",
            "id": 3023056,
            "login": "timglaser"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/66321197?v=4",
            "contributions": 11,
            "htmlUrl": "https://github.com/nr-opensource-bot",
            "id": 66321197,
            "login": "nr-opensource-bot"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/19733683?v=4",
            "contributions": 13,
            "htmlUrl": "https://github.com/snyk-bot",
            "id": 19733683,
            "login": "snyk-bot"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/55004296?v=4",
            "contributions": 14,
            "htmlUrl": "https://github.com/davidhou17",
            "id": 55004296,
            "login": "davidhou17"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/522116?v=4",
            "contributions": 15,
            "htmlUrl": "https://github.com/markweitzel",
            "id": 522116,
            "login": "markweitzel"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/186715?v=4",
            "contributions": 26,
            "htmlUrl": "https://github.com/djsauble",
            "id": 186715,
            "login": "djsauble"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/1773616?v=4",
            "contributions": 44,
            "htmlUrl": "https://github.com/theletterf",
            "id": 1773616,
            "login": "theletterf"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/18040274?v=4",
            "contributions": 48,
            "htmlUrl": "https://github.com/rhetoric101",
            "id": 18040274,
            "login": "rhetoric101"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/1395158?v=4",
            "contributions": 70,
            "htmlUrl": "https://github.com/jpvajda",
            "id": 1395158,
            "login": "jpvajda"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/58010132?v=4",
            "contributions": 84,
            "htmlUrl": "https://github.com/mmfred",
            "id": 58010132,
            "login": "mmfred"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/38332422?v=4",
            "contributions": 101,
            "htmlUrl": "https://github.com/caylahamann",
            "id": 38332422,
            "login": "caylahamann"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/39655074?v=4",
            "contributions": 152,
            "htmlUrl": "https://github.com/LizBaker",
            "id": 39655074,
            "login": "LizBaker"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/1946433?v=4",
            "contributions": 246,
            "htmlUrl": "https://github.com/zstix",
            "id": 1946433,
            "login": "zstix"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/565661?v=4",
            "contributions": 505,
            "htmlUrl": "https://github.com/jerelmiller",
            "id": 565661,
            "login": "jerelmiller"
          }
        ],
        "issues": {
          "open": 49
        },
        "latestRelease": {
          "date": "2020-07-22T21:30:10Z",
          "name": "v1.6.0"
        },
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdxId": "Apache-2.0",
          "url": "http://choosealicense.com/licenses/apache-2.0/"
        },
        "screenshots": []
      },
      "githubUrl": "https://github.com/newrelic/developer-website",
      "defaultBranch": null,
      "contributingGuideUrl": null,
      "iconUrl": null,
      "description": "Data, code, and automation for developer.newrelic.com",
      "ossCategory": {
        "slug": "community-project",
        "title": "Community Project",
        "description": "This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/developer-website",
      "primaryLanguage": "JavaScript",
      "shortDescription": "Gatsby website of New Relic Developers",
      "supportUrl": null,
      "projectTags": [
        {
          "title": "Documentation",
          "slug": "docs"
        }
      ],
      "team": null,
      "website": {
        "url": "https://developer.newrelic.com"
      },
      "mainContent": {
        "mdx": {
          "__typename": "Mdx",
          "compiledMdx": "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"path\": \"/projects/newrelic/developer-website\",\n  \"date\": \"2020-06-29\",\n  \"title\": \"New Relic Developer Website\"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component '\" + name + \"' was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"h2\", null, \"Getting Started\"), mdx(\"p\", null, \"Because this website is a \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://www.gatsbyjs.org/\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"Gatsby\"), \" project, local development is as easy as:\"), mdx(\"pre\", null, mdx(\"code\", _extends({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-bash\"\n  }), \"git clone https://github.com/newrelic/developer-website.git\\nnpm install\\nnpm start\\n\")), mdx(\"p\", null, \"Find the detailed instructions for getting started in the project \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://github.com/newrelic/developer-website\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"README\"), \".\"));\n}\n;\nMDXContent.isMDXComponent = true;"
        }
      }
    },
    {
      "id": "6d71f0c4-6882-5bfe-83d9-818ab17bf8b4",
      "acceptsContributions": true,
      "name": "opensource-website",
      "title": "New Relic Open Source Website",
      "fullName": "newrelic/opensource-website",
      "slug": "newrelic-opensource-website",
      "isParentProject": null,
      "stats": {
        "contributors": 39,
        "releases": 42,
        "id": "e8a1bb93-c1a0-520c-be83-dec4c65f8b24",
        "pullRequests": {
          "open": 0
        },
        "searchCategory": "good first issue",
        "commits": 1234,
        "lastSixMonthsCommitTotal": 1234,
        "cachedIssues": [
          {
            "createdAt": "2020-05-12T15:47:51Z",
            "id": "MDU6SXNzdWU2MTY3NjQ3MTM=",
            "title": "Add \"swooshes\" from mockups into the site",
            "url": "https://github.com/newrelic/opensource-website/issues/368",
            "comments": {
              "totalCount": 0
            },
            "number": 368
          },
          {
            "createdAt": "2020-06-02T03:50:05Z",
            "id": "MDU6SXNzdWU2Mjg4Nzg4ODA=",
            "title": "Provide a one-click starring experience",
            "url": "https://github.com/newrelic/opensource-website/issues/415",
            "comments": {
              "totalCount": 0
            },
            "number": 415
          },
          {
            "createdAt": "2020-07-22T19:14:34Z",
            "id": "MDU6SXNzdWU2NjM5ODk4NzI=",
            "title": "On mobile, the global nav (top 40ish pixels) experience is different from developer.newrelic.com",
            "url": "https://github.com/newrelic/opensource-website/issues/556",
            "comments": {
              "totalCount": 0
            },
            "number": 556
          }
        ],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/7401258?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/tbradellis",
            "id": 7401258,
            "login": "tbradellis"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/4672940?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/shahramk",
            "id": 4672940,
            "login": "shahramk"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2952843?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/roadlittledawn",
            "id": 2952843,
            "login": "roadlittledawn"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/19716792?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/njvrzm",
            "id": 19716792,
            "login": "njvrzm"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/52758187?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/newrelic-eheinlein",
            "id": 52758187,
            "login": "newrelic-eheinlein"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/58010132?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/mmfred",
            "id": 58010132,
            "login": "mmfred"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/64921278?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/lchockalingam",
            "id": 64921278,
            "login": "lchockalingam"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/55132258?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jsbnr",
            "id": 55132258,
            "login": "jsbnr"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/1395158?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jpvajda",
            "id": 1395158,
            "login": "jpvajda"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/283858?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jonathanpdx",
            "id": 283858,
            "login": "jonathanpdx"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/130504?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jasonrclark",
            "id": 130504,
            "login": "jasonrclark"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/16843267?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/ericboucher",
            "id": 16843267,
            "login": "ericboucher"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/4761745?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/elucus",
            "id": 4761745,
            "login": "elucus"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/159076?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/douglascamata",
            "id": 159076,
            "login": "douglascamata"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/413389?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/ctrombley",
            "id": 413389,
            "login": "ctrombley"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/44571906?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/crshanks",
            "id": 44571906,
            "login": "crshanks"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/32520944?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/astormnewrelic",
            "id": 32520944,
            "login": "astormnewrelic"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/5543599?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/MrAlias",
            "id": 5543599,
            "login": "MrAlias"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/18387?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/mwlang",
            "id": 18387,
            "login": "mwlang"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/43244625?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/melissaklein24",
            "id": 43244625,
            "login": "melissaklein24"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/81539?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/kittylyst",
            "id": 81539,
            "login": "kittylyst"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/3170392?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/justinfoote",
            "id": 3170392,
            "login": "justinfoote"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/6098021?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/jaffinito",
            "id": 6098021,
            "login": "jaffinito"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/6130000?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/asllop",
            "id": 6130000,
            "login": "asllop"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/5297542?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/alejandrodnm",
            "id": 5297542,
            "login": "alejandrodnm"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/57272374?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/thtmnisamnstr",
            "id": 57272374,
            "login": "thtmnisamnstr"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/2590905?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/sanderblue",
            "id": 2590905,
            "login": "sanderblue"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/37779995?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/ryanv94",
            "id": 37779995,
            "login": "ryanv94"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/57361211?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/nr-ahemsath",
            "id": 57361211,
            "login": "nr-ahemsath"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/455419?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/jthurman42",
            "id": 455419,
            "login": "jthurman42"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/8813505?v=4",
            "contributions": 9,
            "htmlUrl": "https://github.com/adwetzelnr",
            "id": 8813505,
            "login": "adwetzelnr"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/11223178?v=4",
            "contributions": 10,
            "htmlUrl": "https://github.com/michaelgoin",
            "id": 11223178,
            "login": "michaelgoin"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/565661?v=4",
            "contributions": 20,
            "htmlUrl": "https://github.com/jerelmiller",
            "id": 565661,
            "login": "jerelmiller"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/32174276?v=4",
            "contributions": 28,
            "htmlUrl": "https://github.com/semantic-release-bot",
            "id": 32174276,
            "login": "semantic-release-bot"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/6722433?v=4",
            "contributions": 84,
            "htmlUrl": "https://github.com/jbeveland27",
            "id": 6722433,
            "login": "jbeveland27"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/197140?v=4",
            "contributions": 138,
            "htmlUrl": "https://github.com/devfreddy",
            "id": 197140,
            "login": "devfreddy"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/812989?v=4",
            "contributions": 171,
            "htmlUrl": "https://github.com/danielgolden",
            "id": 812989,
            "login": "danielgolden"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/66321197?v=4",
            "contributions": 268,
            "htmlUrl": "https://github.com/nr-opensource-bot",
            "id": 66321197,
            "login": "nr-opensource-bot"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/929261?v=4",
            "contributions": 298,
            "htmlUrl": "https://github.com/tangollama",
            "id": 929261,
            "login": "tangollama"
          }
        ],
        "issues": {
          "open": 22
        },
        "latestRelease": {
          "date": "2020-07-22T16:48:16Z",
          "name": "v1.5.1"
        },
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdxId": "Apache-2.0",
          "url": "http://choosealicense.com/licenses/apache-2.0/"
        },
        "screenshots": []
      },
      "githubUrl": "https://github.com/newrelic/opensource-website",
      "defaultBranch": null,
      "contributingGuideUrl": null,
      "iconUrl": null,
      "description": "Data, code, and automation for opensource.newrelic.com",
      "ossCategory": {
        "slug": "community-project",
        "title": "Community Project",
        "description": "This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/opensource-website",
      "primaryLanguage": "JavaScript",
      "shortDescription": "Gatsby website catalog of New Relic Open Source",
      "supportUrl": "https://discuss.newrelic.com/t/opensource-newrelic-com/104943",
      "projectTags": [
        {
          "title": "Documentation",
          "slug": "docs"
        }
      ],
      "team": null,
      "website": {
        "url": "https://github.com/newrelic/opensource-website"
      },
      "mainContent": {
        "mdx": {
          "__typename": "Mdx",
          "compiledMdx": "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"path\": \"/projects/newrelic/opensource-website\",\n  \"date\": \"2020-06-15\",\n  \"title\": \"New Relic Open Source Website\"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component '\" + name + \"' was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"p\", null, \"Fork or contribute code to this website. Very \", mdx(\"em\", {\n    parentName: \"p\"\n  }, \"meta\"), \".\"), mdx(\"h2\", null, \"Getting Started\"), mdx(\"p\", null, \"Because this website is a \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://www.gatsbyjs.org/\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"Gatsby\"), \" project, local development is as easy as:\"), mdx(\"pre\", null, mdx(\"code\", _extends({\n    parentName: \"pre\"\n  }, {\n    \"className\": \"language-bash\"\n  }), \"git clone https://github.com/newrelic/opensource-website.git\\nnpm install\\nnpm start\\n\")), mdx(\"p\", null, \"Find the details instructions for getting started in the project \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://github.com/newrelic/opensource-website\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"README\"), \".\"), mdx(\"h2\", null, \"Features\"), mdx(\"ul\", null, mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Register new/update projects via a \", mdx(\"a\", _extends({\n    parentName: \"li\"\n  }, {\n    \"href\": \"https://github.com/newrelic/opensource-website#contributing-project-data\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"documented PR process\")), mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Automatically refreshes \", mdx(\"a\", _extends({\n    parentName: \"li\"\n  }, {\n    \"href\": \"https://github.com/newrelic/opensource-website/tree/master/src/data/project-stats\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"projects statistics\"), \" via GitHub Action automation\"), mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Leverages \", mdx(\"a\", _extends({\n    parentName: \"li\"\n  }, {\n    \"href\": \"https://mdxjs.com/\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"MDX\"), \" for hybrid React/Markdown pages\")));\n}\n;\nMDXContent.isMDXComponent = true;"
        }
      }
    },
    {
      "id": "dd864d24-ac0b-54e1-bc13-331fe0638ea6",
      "acceptsContributions": true,
      "name": "node-newrelic",
      "title": "New Relic Node Agent",
      "fullName": "newrelic/node-newrelic",
      "slug": "newrelic-node-newrelic",
      "isParentProject": null,
      "stats": {
        "contributors": 69,
        "releases": 264,
        "id": "7fc61104-b936-5aa3-be29-58fc748dada0",
        "pullRequests": {
          "open": 3
        },
        "searchCategory": "good first issue",
        "commits": 6232,
        "lastSixMonthsCommitTotal": 734,
        "cachedIssues": [],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/90898?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/wraithan",
            "id": 90898,
            "login": "wraithan"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/188748?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/tregagnon",
            "id": 188748,
            "login": "tregagnon"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/224334?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/taxilian",
            "id": 224334,
            "login": "taxilian"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/265510?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/tamtamchik",
            "id": 265510,
            "login": "tamtamchik"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/353768?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/sebastianhoitz",
            "id": 353768,
            "login": "sebastianhoitz"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/8731013?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/prototypicalpro",
            "id": 8731013,
            "login": "prototypicalpro"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/991932?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/pasieronen",
            "id": 991932,
            "login": "pasieronen"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/373545?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/papandreou",
            "id": 373545,
            "login": "papandreou"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/3165635?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/oliviertassinari",
            "id": 3165635,
            "login": "oliviertassinari"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/171515?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/nullvariable",
            "id": 171515,
            "login": "nullvariable"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/58010132?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/mmfred",
            "id": 58010132,
            "login": "mmfred"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1264102?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/mcmahoniel",
            "id": 1264102,
            "login": "mcmahoniel"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/18589982?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/mastfissh",
            "id": 18589982,
            "login": "mastfissh"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/50803?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/lightbody",
            "id": 50803,
            "login": "lightbody"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/929018?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/kschat",
            "id": 929018,
            "login": "kschat"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1437394?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/kennethaasan",
            "id": 1437394,
            "login": "kennethaasan"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/4969737?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/juanigallo",
            "id": 4969737,
            "login": "juanigallo"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/6752382?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jlegrone",
            "id": 6752382,
            "login": "jlegrone"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/3799709?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jakecraige",
            "id": 3799709,
            "login": "jakecraige"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/101073?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/guilhermef",
            "id": 101073,
            "login": "guilhermef"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1074881?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/dy-dx",
            "id": 1074881,
            "login": "dy-dx"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/197140?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/devfreddy",
            "id": 197140,
            "login": "devfreddy"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/274835?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/davebobak",
            "id": 274835,
            "login": "davebobak"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/281961?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/daaray",
            "id": 281961,
            "login": "daaray"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/20105?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/case",
            "id": 20105,
            "login": "case"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/422180?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/bruun",
            "id": 422180,
            "login": "bruun"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1672480?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/briandela",
            "id": 1672480,
            "login": "briandela"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/20630?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/bjornstar",
            "id": 20630,
            "login": "bjornstar"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/70015?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/atomantic",
            "id": 70015,
            "login": "atomantic"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/1194048?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/asturur",
            "id": 1194048,
            "login": "asturur"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/981007?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/asilvas",
            "id": 981007,
            "login": "asilvas"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/4495536?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/andrewgoetz",
            "id": 4495536,
            "login": "andrewgoetz"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1826366?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Sinewyk",
            "id": 1826366,
            "login": "Sinewyk"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/14006450?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Rilsta",
            "id": 14006450,
            "login": "Rilsta"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2708180?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Maubic",
            "id": 2708180,
            "login": "Maubic"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/4923668?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/DullReferenceException",
            "id": 4923668,
            "login": "DullReferenceException"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/3366767?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Crow-EH",
            "id": 3366767,
            "login": "Crow-EH"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2061434?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/AKPWebDesign",
            "id": 2061434,
            "login": "AKPWebDesign"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/10441551?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/rr0214",
            "id": 10441551,
            "login": "rr0214"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/4408911?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/roymiloh",
            "id": 4408911,
            "login": "roymiloh"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/17498?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/kolanos",
            "id": 17498,
            "login": "kolanos"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/474603?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/joaovieira",
            "id": 474603,
            "login": "joaovieira"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/151172?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/jhollingworth",
            "id": 151172,
            "login": "jhollingworth"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/538212?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/cxhansen",
            "id": 538212,
            "login": "cxhansen"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1162380?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/bwolfe",
            "id": 1162380,
            "login": "bwolfe"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1125900?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/StyleT",
            "id": 1125900,
            "login": "StyleT"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2033608?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/BrighTide",
            "id": 2033608,
            "login": "BrighTide"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/621861?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/tkrajcar",
            "id": 621861,
            "login": "tkrajcar"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/106903?v=4",
            "contributions": 4,
            "htmlUrl": "https://github.com/mdlavin",
            "id": 106903,
            "login": "mdlavin"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/25829?v=4",
            "contributions": 4,
            "htmlUrl": "https://github.com/markstos",
            "id": 25829,
            "login": "markstos"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/6374032?v=4",
            "contributions": 4,
            "htmlUrl": "https://github.com/a-feld",
            "id": 6374032,
            "login": "a-feld"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/3240137?v=4",
            "contributions": 6,
            "htmlUrl": "https://github.com/aorinevo",
            "id": 3240137,
            "login": "aorinevo"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/19733683?v=4",
            "contributions": 8,
            "htmlUrl": "https://github.com/snyk-bot",
            "id": 19733683,
            "login": "snyk-bot"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/28942544?v=4",
            "contributions": 9,
            "htmlUrl": "https://github.com/katiewest820",
            "id": 28942544,
            "login": "katiewest820"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/585473?v=4",
            "contributions": 9,
            "htmlUrl": "https://github.com/MattWhelan",
            "id": 585473,
            "login": "MattWhelan"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/6933980?v=4",
            "contributions": 12,
            "htmlUrl": "https://github.com/sethshober",
            "id": 6933980,
            "login": "sethshober"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/538488?v=4",
            "contributions": 12,
            "htmlUrl": "https://github.com/groundwater",
            "id": 538488,
            "login": "groundwater"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/21225410?v=4",
            "contributions": 13,
            "htmlUrl": "https://github.com/uturunku1",
            "id": 21225410,
            "login": "uturunku1"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1627067?v=4",
            "contributions": 37,
            "htmlUrl": "https://github.com/sdaubin",
            "id": 1627067,
            "login": "sdaubin"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/816527?v=4",
            "contributions": 82,
            "htmlUrl": "https://github.com/hayes",
            "id": 816527,
            "login": "hayes"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/418097?v=4",
            "contributions": 135,
            "htmlUrl": "https://github.com/othiym23",
            "id": 418097,
            "login": "othiym23"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/398399?v=4",
            "contributions": 139,
            "htmlUrl": "https://github.com/nijotz",
            "id": 398399,
            "login": "nijotz"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/4933147?v=4",
            "contributions": 141,
            "htmlUrl": "https://github.com/martinkuba",
            "id": 4933147,
            "login": "martinkuba"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/54335840?v=4",
            "contributions": 167,
            "htmlUrl": "https://github.com/carlonewrelic",
            "id": 54335840,
            "login": "carlonewrelic"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/32520944?v=4",
            "contributions": 260,
            "htmlUrl": "https://github.com/astormnewrelic",
            "id": 32520944,
            "login": "astormnewrelic"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/11223178?v=4",
            "contributions": 527,
            "htmlUrl": "https://github.com/michaelgoin",
            "id": 11223178,
            "login": "michaelgoin"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1342804?v=4",
            "contributions": 618,
            "htmlUrl": "https://github.com/lykkin",
            "id": 1342804,
            "login": "lykkin"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/466761?v=4",
            "contributions": 692,
            "htmlUrl": "https://github.com/NatalieWolfe",
            "id": 466761,
            "login": "NatalieWolfe"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/7945073?v=4",
            "contributions": 811,
            "htmlUrl": "https://github.com/psvet",
            "id": 7945073,
            "login": "psvet"
          }
        ],
        "issues": {
          "open": 16
        },
        "latestRelease": {
          "date": null,
          "name": "v6.11.0"
        },
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdxId": "Apache-2.0",
          "url": "http://choosealicense.com/licenses/apache-2.0/"
        },
        "screenshots": []
      },
      "githubUrl": "https://github.com/newrelic/node-newrelic",
      "defaultBranch": "main",
      "contributingGuideUrl": null,
      "iconUrl": null,
      "description": "New Relic Node.js Agent",
      "ossCategory": {
        "slug": "community-project",
        "title": "Community Project",
        "description": "This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/node-newrelic",
      "primaryLanguage": "JavaScript",
      "shortDescription": "Automated instrumentation for Node.js",
      "supportUrl": "https://discuss.newrelic.com/c/support-products-agents/node-js-agent/",
      "projectTags": [
        {
          "title": "Agent",
          "slug": "agent"
        }
      ],
      "team": null,
      "website": {
        "url": "https://github.com/newrelic/node-newrelic"
      },
      "mainContent": {
        "mdx": {
          "__typename": "Mdx",
          "compiledMdx": "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"path\": \"/projects/newrelic/node-newrelic\",\n  \"date\": \"05/01/2020\",\n  \"title\": \"New Relic Node Agent\",\n  \"projectConfig\": \"src/data/projects/newrelic-node-newrelic.json\"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component '\" + name + \"' was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"h2\", null, \"Getting Started\"), mdx(\"p\", null, \"Go to the project's \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://github.com/newrelic/node-newrelic\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"README\"), \" for setup and usage details.\"));\n}\n;\nMDXContent.isMDXComponent = true;"
        }
      }
    },
    {
      "id": "32e0ac3d-c1e3-56c2-81f7-2e8d93dabcce",
      "acceptsContributions": true,
      "name": "newrelic-cli",
      "title": "New Relic CLI",
      "fullName": "newrelic/newrelic-cli",
      "slug": "newrelic-newrelic-cli",
      "isParentProject": null,
      "stats": {
        "contributors": 9,
        "releases": 24,
        "id": "2d43ae93-8b2f-5d97-89eb-5d032999b11f",
        "pullRequests": {
          "open": 3
        },
        "searchCategory": "good first issue",
        "commits": 639,
        "lastSixMonthsCommitTotal": 630,
        "cachedIssues": [],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/929261?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/tangollama",
            "id": 929261,
            "login": "tangollama"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/19716792?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/njvrzm",
            "id": 19716792,
            "login": "njvrzm"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/62031461?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/nr-developer-toolkit",
            "id": 62031461,
            "login": "nr-developer-toolkit"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/7197435?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/SowmyaJujjuri",
            "id": 7197435,
            "login": "SowmyaJujjuri"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/2590905?v=4",
            "contributions": 41,
            "htmlUrl": "https://github.com/sanderblue",
            "id": 2590905,
            "login": "sanderblue"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/25180681?v=4",
            "contributions": 48,
            "htmlUrl": "https://github.com/renovate-bot",
            "id": 25180681,
            "login": "renovate-bot"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/29264964?v=4",
            "contributions": 49,
            "htmlUrl": "https://github.com/zlesnr",
            "id": 29264964,
            "login": "zlesnr"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/413389?v=4",
            "contributions": 94,
            "htmlUrl": "https://github.com/ctrombley",
            "id": 413389,
            "login": "ctrombley"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/455419?v=4",
            "contributions": 174,
            "htmlUrl": "https://github.com/jthurman42",
            "id": 455419,
            "login": "jthurman42"
          }
        ],
        "issues": {
          "open": 12
        },
        "latestRelease": {
          "date": "2020-07-24T22:16:07Z",
          "name": "v0.12.0"
        },
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdxId": "Apache-2.0",
          "url": "http://choosealicense.com/licenses/apache-2.0/"
        },
        "screenshots": []
      },
      "githubUrl": "https://github.com/newrelic/newrelic-cli",
      "defaultBranch": null,
      "contributingGuideUrl": null,
      "iconUrl": "https://raw.githubusercontent.com/newrelic/developer-toolkit/master/icon.png",
      "description": "The New Relic CLI is an officially supported command line interface for New Relic, released as part of the Developer Toolkit",
      "ossCategory": {
        "slug": "community-project",
        "title": "Community Project",
        "description": "This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/newrelic-cli",
      "primaryLanguage": "Go",
      "shortDescription": "Automate workflows with New Relic",
      "supportUrl": "https://discuss.newrelic.com/c/build-on-new-relic/developer-toolkit",
      "projectTags": [
        {
          "title": "Command Line Utility",
          "slug": "cli"
        },
        {
          "title": "Tools",
          "slug": "tools"
        },
        {
          "title": "Developer Toolkit",
          "slug": "dev-toolkit"
        }
      ],
      "team": null,
      "website": {
        "url": "https://newrelic.github.io/developer-toolkit/"
      },
      "mainContent": {
        "mdx": {
          "__typename": "Mdx",
          "compiledMdx": "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"path\": \"/projects/newrelic/newrelic-cli\",\n  \"date\": \"05/01/2020\",\n  \"title\": \"New Relic CLI\",\n  \"projectConfig\": \"src/data/projects/newrelic-newrelic-cli.json\"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component '\" + name + \"' was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"div\", {\n    className: \"responsive-video\"\n  }, mdx(\"iframe\", {\n    width: \"560\",\n    height: \"315\",\n    src: \"https://www.youtube.com/embed/g00AeKlECZA\",\n    frameBorder: \"0\",\n    allow: \"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",\n    allowFullScreen: true\n  })), mdx(\"p\", null, \"The New Relic CLI is an officially supported command line interface for New Relic, released as part of the \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://newrelic.github.io/developer-toolkit/\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"Developer Toolkit\")), mdx(\"h2\", null, \"Getting Started\"), mdx(\"p\", null, \"Find the usage, installation instructions, and examples linked from the project \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://github.com/newrelic/newrelic-cli\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"README\"), \".\"));\n}\n;\nMDXContent.isMDXComponent = true;"
        }
      }
    },
    {
      "id": "8b760335-58f6-5aa8-8805-d986868d7aaf",
      "acceptsContributions": true,
      "name": "newrelic-client-go",
      "title": "New Relic Go Client",
      "fullName": "newrelic/newrelic-client-go",
      "slug": "newrelic-newrelic-client-go",
      "isParentProject": null,
      "stats": {
        "contributors": 11,
        "releases": 56,
        "id": "f2d6f6ef-7d4c-5b78-b464-9ccd45b3c025",
        "pullRequests": {
          "open": 1
        },
        "searchCategory": "good first issue",
        "commits": 874,
        "lastSixMonthsCommitTotal": 606,
        "cachedIssues": [],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/12853539?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jhutchings1",
            "id": 12853539,
            "login": "jhutchings1"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/138513?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/bthemad",
            "id": 138513,
            "login": "bthemad"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/3596655?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/jhunthrop",
            "id": 3596655,
            "login": "jhunthrop"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/245435?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/caarlos0",
            "id": 245435,
            "login": "caarlos0"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/723533?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/monkeyherder",
            "id": 723533,
            "login": "monkeyherder"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/7197435?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/SowmyaJujjuri",
            "id": 7197435,
            "login": "SowmyaJujjuri"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/25180681?v=4",
            "contributions": 37,
            "htmlUrl": "https://github.com/renovate-bot",
            "id": 25180681,
            "login": "renovate-bot"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/29264964?v=4",
            "contributions": 42,
            "htmlUrl": "https://github.com/zlesnr",
            "id": 29264964,
            "login": "zlesnr"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/2590905?v=4",
            "contributions": 164,
            "htmlUrl": "https://github.com/sanderblue",
            "id": 2590905,
            "login": "sanderblue"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/455419?v=4",
            "contributions": 170,
            "htmlUrl": "https://github.com/jthurman42",
            "id": 455419,
            "login": "jthurman42"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/413389?v=4",
            "contributions": 217,
            "htmlUrl": "https://github.com/ctrombley",
            "id": 413389,
            "login": "ctrombley"
          }
        ],
        "issues": {
          "open": 6
        },
        "latestRelease": {
          "date": "2020-07-27T23:04:56Z",
          "name": "v0.33.2"
        },
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdxId": "Apache-2.0",
          "url": "http://choosealicense.com/licenses/apache-2.0/"
        },
        "screenshots": []
      },
      "githubUrl": "https://github.com/newrelic/newrelic-client-go",
      "defaultBranch": null,
      "contributingGuideUrl": null,
      "iconUrl": "https://raw.githubusercontent.com/newrelic/developer-toolkit/master/icon.png",
      "description": "Provides the building blocks for tools in the Developer Toolkit, enabling access to the suite of New Relic APIs. As a library, it can also be leveraged within your own custom applications.",
      "ossCategory": {
        "slug": "community-project",
        "title": "Community Project",
        "description": "This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/newrelic-client-go",
      "primaryLanguage": "Go",
      "shortDescription": "New Relic Client for the Go programming language",
      "supportUrl": "https://discuss.newrelic.com/c/build-on-new-relic/developer-toolkit",
      "projectTags": [
        {
          "title": "Developer Toolkit",
          "slug": "dev-toolkit"
        },
        {
          "title": "Tools",
          "slug": "tools"
        }
      ],
      "team": null,
      "website": {
        "url": "https://github.com/newrelic/newrelic-client-go"
      },
      "mainContent": {
        "mdx": {
          "__typename": "Mdx",
          "compiledMdx": "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"path\": \"/projects/newrelic/newrelic-client-go\",\n  \"date\": \"2020-05-22\",\n  \"title\": \"New Relic Client Go\"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component '\" + name + \"' was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"p\", null, \"The New Relic Client provides the building blocks for tools in the \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://newrelic.github.io/developer-toolkit/\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"Developer Toolkit\"), \",\\nenabling quick access to the suite of New Relic APIs. As a library, it can also be leveraged within your own custom applications.\"), mdx(\"h2\", null, \"Getting Started\"), mdx(\"p\", null, \"Find the usage, installation instructions, and examples linked from the project README.\"), mdx(Link, {\n    to: \"https://github.com/newrelic/newrelic-client-go\",\n    mdxType: \"Link\"\n  }, \"README\"));\n}\n;\nMDXContent.isMDXComponent = true;"
        }
      }
    },
    {
      "id": "26c3fb04-5081-5971-894c-18963a4783d5",
      "acceptsContributions": true,
      "name": "newrelic-ruby-agent",
      "title": "Ruby Agent",
      "fullName": "newrelic/newrelic-ruby-agent",
      "slug": "newrelic-ruby-agent",
      "isParentProject": null,
      "stats": {
        "contributors": 100,
        "releases": 360,
        "id": "6c60b460-8440-52e2-9d20-6baa91f1afe9",
        "pullRequests": {
          "open": 3
        },
        "searchCategory": "good first issue",
        "commits": 13920,
        "lastSixMonthsCommitTotal": 516,
        "cachedIssues": [],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/254393?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/zog",
            "id": 254393,
            "login": "zog"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/5356517?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/yui-knk",
            "id": 5356517,
            "login": "yui-knk"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/178135?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/wpeterson",
            "id": 178135,
            "login": "wpeterson"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/101691?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/vvondra",
            "id": 101691,
            "login": "vvondra"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/6506296?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/v-kolesnikov",
            "id": 6506296,
            "login": "v-kolesnikov"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/1024789?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/thaim",
            "id": 1024789,
            "login": "thaim"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1039403?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/rafavalerio",
            "id": 1039403,
            "login": "rafavalerio"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/300471?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/rafaelpetry",
            "id": 300471,
            "login": "rafaelpetry"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/497874?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/orien",
            "id": 497874,
            "login": "orien"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/153388?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/ojab",
            "id": 153388,
            "login": "ojab"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/1811616?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/ohbarye",
            "id": 1811616,
            "login": "ohbarye"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1809170?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/nilsding",
            "id": 1809170,
            "login": "nilsding"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/929022?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/mengqing",
            "id": 929022,
            "login": "mengqing"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/209729?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/kevingriffin",
            "id": 209729,
            "login": "kevingriffin"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/4415912?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jrmhaig",
            "id": 4415912,
            "login": "jrmhaig"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/283234?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jacobbednarz",
            "id": 283234,
            "login": "jacobbednarz"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/241633?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/dmeremyanin",
            "id": 241633,
            "login": "dmeremyanin"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/5115928?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/danascheider",
            "id": 5115928,
            "login": "danascheider"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/10076?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/claudiob",
            "id": 10076,
            "login": "claudiob"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/337117?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/bpaquet",
            "id": 337117,
            "login": "bpaquet"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/47330?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/andreacfm",
            "id": 47330,
            "login": "andreacfm"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/2619388?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Spharian",
            "id": 2619388,
            "login": "Spharian"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/15195419?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Sam-Killgallon",
            "id": 15195419,
            "login": "Sam-Killgallon"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/22486?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/PatrickTulskie",
            "id": 22486,
            "login": "PatrickTulskie"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/229984?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/LawnGnome",
            "id": 229984,
            "login": "LawnGnome"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/7987724?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Izzette",
            "id": 7987724,
            "login": "Izzette"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/8122246?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/Edouard-chin",
            "id": 8122246,
            "login": "Edouard-chin"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1396855?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/AlexRiedler",
            "id": 1396855,
            "login": "AlexRiedler"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/436912?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/troex",
            "id": 436912,
            "login": "troex"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/5795302?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/tonyta",
            "id": 5795302,
            "login": "tonyta"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/2567?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/tmm1",
            "id": 2567,
            "login": "tmm1"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/263409?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/soupmatt",
            "id": 263409,
            "login": "soupmatt"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/35549?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/rykov",
            "id": 35549,
            "login": "rykov"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/4725264?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/rdokov",
            "id": 4725264,
            "login": "rdokov"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/186424?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/panthomakos",
            "id": 186424,
            "login": "panthomakos"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/479496?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/nihonjinrxs",
            "id": 479496,
            "login": "nihonjinrxs"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/2911?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/mperham",
            "id": 2911,
            "login": "mperham"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/218237?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/morenocarullo",
            "id": 218237,
            "login": "morenocarullo"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/51594?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/miyucy",
            "id": 51594,
            "login": "miyucy"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/115?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/lawrencepit",
            "id": 115,
            "login": "lawrencepit"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/2173?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/langalex",
            "id": 2173,
            "login": "langalex"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/12275387?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/keels125",
            "id": 12275387,
            "login": "keels125"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/2598096?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/jturkel",
            "id": 2598096,
            "login": "jturkel"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/26342?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/jsuchal",
            "id": 26342,
            "login": "jsuchal"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/737325?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/dharamgollapudi",
            "id": 737325,
            "login": "dharamgollapudi"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/7851?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/dbussink",
            "id": 7851,
            "login": "dbussink"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/504083?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/cwholt",
            "id": 504083,
            "login": "cwholt"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/82603?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/brucek",
            "id": 82603,
            "login": "brucek"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/386?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/brainopia",
            "id": 386,
            "login": "brainopia"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/860?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/bkudria",
            "id": 860,
            "login": "bkudria"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1048314?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/athurn",
            "id": 1048314,
            "login": "athurn"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/100632?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/amasses",
            "id": 100632,
            "login": "amasses"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/86065?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/YorickPeterse",
            "id": 86065,
            "login": "YorickPeterse"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/570755?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/NielsKSchjoedt",
            "id": 570755,
            "login": "NielsKSchjoedt"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/34120?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/strayhud",
            "id": 34120,
            "login": "strayhud"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/12671?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/postmodern",
            "id": 12671,
            "login": "postmodern"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/3507058?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/packrat386",
            "id": 3507058,
            "login": "packrat386"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1020?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/justinweiss",
            "id": 1020,
            "login": "justinweiss"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/2377?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/jdelStrother",
            "id": 2377,
            "login": "jdelStrother"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/12839?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/fnordfish",
            "id": 12839,
            "login": "fnordfish"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/4761745?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/elucus",
            "id": 4761745,
            "login": "elucus"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/542335?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/dblock",
            "id": 542335,
            "login": "dblock"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/139940?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/david-j-peterson",
            "id": 139940,
            "login": "david-j-peterson"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/75132?v=4",
            "contributions": 4,
            "htmlUrl": "https://github.com/codegoalie",
            "id": 75132,
            "login": "codegoalie"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/179065?v=4",
            "contributions": 4,
            "htmlUrl": "https://github.com/charliesome",
            "id": 179065,
            "login": "charliesome"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/232906?v=4",
            "contributions": 4,
            "htmlUrl": "https://github.com/blaet",
            "id": 232906,
            "login": "blaet"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/887?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/mislav",
            "id": 887,
            "login": "mislav"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1930?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/kbrock",
            "id": 1930,
            "login": "kbrock"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/199?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/jeremy",
            "id": 199,
            "login": "jeremy"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/4481921?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/gabeobrien",
            "id": 4481921,
            "login": "gabeobrien"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/112037?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/callumj",
            "id": 112037,
            "login": "callumj"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/6454794?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/AncientToaster",
            "id": 6454794,
            "login": "AncientToaster"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/22148?v=4",
            "contributions": 7,
            "htmlUrl": "https://github.com/samg",
            "id": 22148,
            "login": "samg"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/172702?v=4",
            "contributions": 7,
            "htmlUrl": "https://github.com/andreaseger",
            "id": 172702,
            "login": "andreaseger"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/3467?v=4",
            "contributions": 9,
            "htmlUrl": "https://github.com/kovyrin",
            "id": 3467,
            "login": "kovyrin"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/9030?v=4",
            "contributions": 12,
            "htmlUrl": "https://github.com/durran",
            "id": 9030,
            "login": "durran"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/176691?v=4",
            "contributions": 14,
            "htmlUrl": "https://github.com/jessedearing",
            "id": 176691,
            "login": "jessedearing"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/97996?v=4",
            "contributions": 16,
            "htmlUrl": "https://github.com/rkbodenner",
            "id": 97996,
            "login": "rkbodenner"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/54611?v=4",
            "contributions": 16,
            "htmlUrl": "https://github.com/aughr",
            "id": 54611,
            "login": "aughr"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/86957?v=4",
            "contributions": 18,
            "htmlUrl": "https://github.com/jpr5",
            "id": 86957,
            "login": "jpr5"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1638076?v=4",
            "contributions": 32,
            "htmlUrl": "https://github.com/darinrelic",
            "id": 1638076,
            "login": "darinrelic"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/13501?v=4",
            "contributions": 55,
            "htmlUrl": "https://github.com/ged",
            "id": 13501,
            "login": "ged"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1627067?v=4",
            "contributions": 90,
            "htmlUrl": "https://github.com/sdaubin",
            "id": 1627067,
            "login": "sdaubin"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/621861?v=4",
            "contributions": 92,
            "htmlUrl": "https://github.com/tkrajcar",
            "id": 621861,
            "login": "tkrajcar"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/11799492?v=4",
            "contributions": 106,
            "htmlUrl": "https://github.com/tannalynn",
            "id": 11799492,
            "login": "tannalynn"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/1577272?v=4",
            "contributions": 144,
            "htmlUrl": "https://github.com/rsaul",
            "id": 1577272,
            "login": "rsaul"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/933055?v=4",
            "contributions": 177,
            "htmlUrl": "https://github.com/kenichi",
            "id": 933055,
            "login": "kenichi"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/4594088?v=4",
            "contributions": 228,
            "htmlUrl": "https://github.com/chrispine",
            "id": 4594088,
            "login": "chrispine"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/30514?v=4",
            "contributions": 233,
            "htmlUrl": "https://github.com/cirne",
            "id": 30514,
            "login": "cirne"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/3170392?v=4",
            "contributions": 252,
            "htmlUrl": "https://github.com/justinfoote",
            "id": 3170392,
            "login": "justinfoote"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/18387?v=4",
            "contributions": 262,
            "htmlUrl": "https://github.com/mwlang",
            "id": 18387,
            "login": "mwlang"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/10822861?v=4",
            "contributions": 339,
            "htmlUrl": "https://github.com/rachelleahklein",
            "id": 10822861,
            "login": "rachelleahklein"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/40875?v=4",
            "contributions": 369,
            "htmlUrl": "https://github.com/JimGochee",
            "id": 40875,
            "login": "JimGochee"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/3559?v=4",
            "contributions": 441,
            "htmlUrl": "https://github.com/jaggederest",
            "id": 3559,
            "login": "jaggederest"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/270746?v=4",
            "contributions": 476,
            "htmlUrl": "https://github.com/thejonanshow",
            "id": 270746,
            "login": "thejonanshow"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/4865?v=4",
            "contributions": 701,
            "htmlUrl": "https://github.com/gnarg",
            "id": 4865,
            "login": "gnarg"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2513372?v=4",
            "contributions": 1241,
            "htmlUrl": "https://github.com/mwear",
            "id": 2513372,
            "login": "mwear"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/982820?v=4",
            "contributions": 1331,
            "htmlUrl": "https://github.com/benweint",
            "id": 982820,
            "login": "benweint"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/27471?v=4",
            "contributions": 1573,
            "htmlUrl": "https://github.com/bkayser",
            "id": 27471,
            "login": "bkayser"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/130504?v=4",
            "contributions": 1897,
            "htmlUrl": "https://github.com/jasonrclark",
            "id": 130504,
            "login": "jasonrclark"
          }
        ],
        "issues": {
          "open": 11
        },
        "latestRelease": {
          "date": "2020-07-14T14:42:56Z",
          "name": "6.12.0.367"
        },
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdxId": "Apache-2.0",
          "url": "http://choosealicense.com/licenses/apache-2.0/"
        },
        "screenshots": []
      },
      "githubUrl": "https://github.com/newrelic/newrelic-ruby-agent",
      "defaultBranch": null,
      "contributingGuideUrl": null,
      "iconUrl": null,
      "description": "The New Relic Ruby agent monitors your applications to help you identify and solve performance issues. You can also extend the agent's performance monitoring to collect and analyze business data to help you improve the customer experience and make data-driven business decisions.",
      "ossCategory": {
        "slug": "community-project",
        "title": "Community Project",
        "description": "This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/newrelic-ruby-agent",
      "primaryLanguage": "Ruby",
      "shortDescription": "New Relic's Ruby Agent",
      "supportUrl": "https://discuss.newrelic.com/c/support-products-agents/ruby-agent",
      "projectTags": [
        {
          "title": "Agent",
          "slug": "agent"
        }
      ],
      "team": null,
      "website": {
        "url": "https://github.com/newrelic/newrelic-ruby-agent"
      },
      "mainContent": null
    },
    {
      "id": "09b223fb-a9f1-56d6-ba80-2df0e7d17571",
      "acceptsContributions": true,
      "name": "nr1-workload-geoops",
      "title": "New Relic One Workload Geoops",
      "fullName": "newrelic/nr1-workload-geoops",
      "slug": "newrelic-nr1-workload-geoops",
      "isParentProject": null,
      "stats": {
        "contributors": 11,
        "releases": 22,
        "id": "4fb1e3f1-e4d1-5dec-9c59-2a46434ff3f0",
        "pullRequests": {
          "open": 2
        },
        "searchCategory": "good first issue",
        "commits": 469,
        "lastSixMonthsCommitTotal": 432,
        "cachedIssues": [
          {
            "createdAt": "2020-01-04T03:45:03Z",
            "id": "MDU6SXNzdWU1NDUyMzYzMjQ=",
            "title": "Branded markers on the map",
            "url": "https://github.com/newrelic/nr1-workload-geoops/issues/19",
            "comments": {
              "totalCount": 0
            },
            "number": 19
          },
          {
            "createdAt": "2020-02-06T17:46:02Z",
            "id": "MDU6SXNzdWU1NjExNjk0MTk=",
            "title": "Mutating Tags with Mapping Data",
            "url": "https://github.com/newrelic/nr1-workload-geoops/issues/30",
            "comments": {
              "totalCount": 1
            },
            "number": 30
          },
          {
            "createdAt": "2020-03-16T19:56:26Z",
            "id": "MDU6SXNzdWU1ODI1NjQzNjc=",
            "title": "Create documentation on data formats",
            "url": "https://github.com/newrelic/nr1-workload-geoops/issues/39",
            "comments": {
              "totalCount": 0
            },
            "number": 39
          }
        ],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/58010132?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/mmfred",
            "id": 58010132,
            "login": "mmfred"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/138513?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/bthemad",
            "id": 138513,
            "login": "bthemad"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/19733683?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/snyk-bot",
            "id": 19733683,
            "login": "snyk-bot"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/6722433?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/jbeveland27",
            "id": 6722433,
            "login": "jbeveland27"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/32174276?v=4",
            "contributions": 10,
            "htmlUrl": "https://github.com/semantic-release-bot",
            "id": 32174276,
            "login": "semantic-release-bot"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/24775098?v=4",
            "contributions": 15,
            "htmlUrl": "https://github.com/madecki",
            "id": 24775098,
            "login": "madecki"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/5214156?v=4",
            "contributions": 18,
            "htmlUrl": "https://github.com/norbertsuski",
            "id": 5214156,
            "login": "norbertsuski"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/66321197?v=4",
            "contributions": 26,
            "htmlUrl": "https://github.com/nr-opensource-bot",
            "id": 66321197,
            "login": "nr-opensource-bot"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/929261?v=4",
            "contributions": 64,
            "htmlUrl": "https://github.com/tangollama",
            "id": 929261,
            "login": "tangollama"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/197140?v=4",
            "contributions": 127,
            "htmlUrl": "https://github.com/devfreddy",
            "id": 197140,
            "login": "devfreddy"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/812989?v=4",
            "contributions": 133,
            "htmlUrl": "https://github.com/danielgolden",
            "id": 812989,
            "login": "danielgolden"
          }
        ],
        "issues": {
          "open": 11
        },
        "latestRelease": {
          "date": "2020-07-24T03:02:57Z",
          "name": "v1.4.3"
        },
        "license": {
          "key": "apache-2.0",
          "name": "Apache License 2.0",
          "spdxId": "Apache-2.0",
          "url": "http://choosealicense.com/licenses/apache-2.0/"
        },
        "screenshots": [
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_01.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_02.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_03.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/screenshots/screenshot_04.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/all-maps.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/create-a-map.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/define-locations.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/detail-panel-legend.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/docs-header.svg",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/file-upload.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/fresh-map-legend.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/launcher.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/locations-mapped.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/map-empty-state.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/marker-popover.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/no-locations-mapped.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/review-data.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/assets/documentation-images/settings-popover.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/.gitkeep",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-1.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-2.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-3.png",
          "https://raw.githubusercontent.com/newrelic/nr1-workload-geoops/master/catalog/screenshots/nr1-workload-geoops-4.png"
        ]
      },
      "githubUrl": "https://github.com/newrelic/nr1-workload-geoops",
      "defaultBranch": null,
      "contributingGuideUrl": null,
      "iconUrl": "https://github.com/newrelic/nr1-workload-geoops/blob/master/icon.png?raw=true",
      "description": "New Relic One application for aligning Workload data (or other Entities) in a geographic management console. Think Point-of-Sale alignment of platform features.",
      "ossCategory": {
        "slug": "new-relic-one-catalog-project",
        "title": "New Relic One Catalog",
        "description": "This code is a part of the New Relic One Catalog. It meets the criteria for a Community Project; but it also contains UI workflows for configuration. Most Catalog projects seek to maintain a public roadmap, often expressed in a GitHub Project board and Issues within the repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/nr1-workload-geoops",
      "primaryLanguage": "JavaScript",
      "shortDescription": "Manage workloads across geographies",
      "supportUrl": "https://discuss.newrelic.com/t/workload-geoops-nerdpack/99478",
      "projectTags": [
        {
          "title": "New Relic One Application",
          "slug": "nr1-app"
        }
      ],
      "team": null,
      "website": {
        "url": "https://github.com/newrelic/nr1-workload-geoops"
      },
      "mainContent": {
        "mdx": {
          "__typename": "Mdx",
          "compiledMdx": "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"path\": \"/projects/newrelic/nr1-workload-geoops\",\n  \"date\": \"2020-04-21\",\n  \"title\": \"New Relic One Workload Geoops\"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component '\" + name + \"' was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"div\", {\n    className: \"responsive-video\"\n  }, mdx(\"iframe\", {\n    width: \"560\",\n    height: \"315\",\n    src: \"https://www.youtube.com/embed/fh0C553kA3c\",\n    frameBorder: \"0\",\n    allow: \"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\",\n    allowFullScreen: true\n  })), mdx(\"p\", null, \"Workloads GeoOps provides a geographic exploration of \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://docs.newrelic.com/docs/new-relic-one/use-new-relic-one/core-concepts/new-relic-one-workloads-isolate-resolve-incidents-faster\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"Workload\"), \" data (collections of Entities) tied to geographic data, including location metadata. Find additional information in the project's \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://github.com/newrelic/nr1-workload-geoops/blob/master/docs/documentation.md\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"docs\"), \" directory.\"), mdx(\"h2\", null, \"Getting Started\"), mdx(NR1AppGettingStartedContent, {\n    project: props.project,\n    mdxType: \"NR1AppGettingStartedContent\"\n  }), mdx(\"h2\", null, \"Features\"), mdx(\"ul\", null, mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Align Workloads and Entities to geographic data\"), mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Observe rollup alerting state across Entities tied to location\"), mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Drive into Workload and Entity workflows in New Relic One\"), mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Configure via the point-and-click or my uploading JSON configs\"), mdx(\"li\", {\n    parentName: \"ul\"\n  }, \"Use the \", mdx(\"a\", _extends({\n    parentName: \"li\"\n  }, {\n    \"href\": \"/projects/newrelic/newrelic-cli\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"New Relic CLI\"), \" to \", mdx(\"a\", _extends({\n    parentName: \"li\"\n  }, {\n    \"href\": \"https://github.com/newrelic/nr1-workload-geoops/blob/master/docs/AUTOMATION.md\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"automate configuration\"))));\n}\n;\nMDXContent.isMDXComponent = true;"
        }
      }
    },
    {
      "id": "df685626-7cf2-59fb-8816-0002c4d92ca7",
      "acceptsContributions": true,
      "name": "terraform-provider-newrelic",
      "title": "New Relic Terraform Provider",
      "fullName": "newrelic/terraform-provider-newrelic",
      "slug": "newrelic-terraform-provider-newrelic",
      "isParentProject": null,
      "stats": {
        "contributors": 50,
        "releases": 40,
        "id": "3d51b161-d1b8-528d-aa4e-868dd81ea91d",
        "pullRequests": {
          "open": 4
        },
        "searchCategory": "good first issue",
        "commits": 988,
        "lastSixMonthsCommitTotal": 423,
        "cachedIssues": [
          {
            "createdAt": "2020-02-26T00:44:08Z",
            "id": "MDU6SXNzdWU1NzA5NjQ1NDg=",
            "title": "Provide more helpful error messages for ID parsing during imports",
            "url": "https://github.com/newrelic/terraform-provider-newrelic/issues/419",
            "comments": {
              "totalCount": 0
            },
            "number": 419
          },
          {
            "createdAt": "2020-03-02T19:25:08Z",
            "id": "MDU6SXNzdWU1NzQxOTI4OTg=",
            "title": "Create a module for encapsulating alert channels within a policy",
            "url": "https://github.com/newrelic/terraform-provider-newrelic/issues/434",
            "comments": {
              "totalCount": 1
            },
            "number": 434
          },
          {
            "createdAt": "2020-07-03T06:05:37Z",
            "id": "MDU6SXNzdWU2NTAzNjUzMTU=",
            "title": "2.x Migration Guide",
            "url": "https://github.com/newrelic/terraform-provider-newrelic/issues/751",
            "comments": {
              "totalCount": 0
            },
            "number": 751
          }
        ],
        "cachedContributors": [
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/5388077?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/vincentclee",
            "id": 5388077,
            "login": "vincentclee"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/666005?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/tombuildsstuff",
            "id": 666005,
            "login": "tombuildsstuff"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/34693931?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/timonwalkley",
            "id": 34693931,
            "login": "timonwalkley"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/27262268?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/t0astbandit",
            "id": 27262268,
            "login": "t0astbandit"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/4398863?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/stephendavidmarsh",
            "id": 4398863,
            "login": "stephendavidmarsh"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/25083338?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/sanchezpaco",
            "id": 25083338,
            "login": "sanchezpaco"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/7178043?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/pickgr",
            "id": 7178043,
            "login": "pickgr"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/2796222?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/oba11",
            "id": 2796222,
            "login": "oba11"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/3933557?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/nejoyer",
            "id": 3933557,
            "login": "nejoyer"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/58098?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/kwoods",
            "id": 58098,
            "login": "kwoods"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1994?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/kavu",
            "id": 1994,
            "login": "kavu"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/548524?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/jen20",
            "id": 548524,
            "login": "jen20"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/1609418?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/janboll",
            "id": 1609418,
            "login": "janboll"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/7656560?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/gechr",
            "id": 7656560,
            "login": "gechr"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/24275263?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/fredrbl",
            "id": 24275263,
            "login": "fredrbl"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/1782129?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/ebh",
            "id": 1782129,
            "login": "ebh"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/408980?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/dstokes",
            "id": 408980,
            "login": "dstokes"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/249234?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/donaldducky",
            "id": 249234,
            "login": "donaldducky"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/18334612?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/chendisheng",
            "id": 18334612,
            "login": "chendisheng"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2439306?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/burck1",
            "id": 2439306,
            "login": "burck1"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/18661073?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/brbbs",
            "id": 18661073,
            "login": "brbbs"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/36832285?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/appilon",
            "id": 36832285,
            "login": "appilon"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/14220781?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/NicoleYson",
            "id": 14220781,
            "login": "NicoleYson"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/6686679?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/DarthVanger",
            "id": 6686679,
            "login": "DarthVanger"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/6998565?v=4",
            "contributions": 1,
            "htmlUrl": "https://github.com/3h4x",
            "id": 6998565,
            "login": "3h4x"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/753159?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/paul91",
            "id": 753159,
            "login": "paul91"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/34520049?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/link-publisher",
            "id": 34520049,
            "login": "link-publisher"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/2308368?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/kyeah",
            "id": 2308368,
            "login": "kyeah"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/45372424?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/imo-tfs",
            "id": 45372424,
            "login": "imo-tfs"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/328689?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/eheydrick",
            "id": 328689,
            "login": "eheydrick"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/13855668?v=4",
            "contributions": 2,
            "htmlUrl": "https://github.com/burdzwastaken",
            "id": 13855668,
            "login": "burdzwastaken"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/227823?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/stack72",
            "id": 227823,
            "login": "stack72"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/6051117?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/sgsiebers",
            "id": 6051117,
            "login": "sgsiebers"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/1706?v=4",
            "contributions": 3,
            "htmlUrl": "https://github.com/meqif",
            "id": 1706,
            "login": "meqif"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/2581608?v=4",
            "contributions": 5,
            "htmlUrl": "https://github.com/harrykimpel",
            "id": 2581608,
            "login": "harrykimpel"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/5468933?v=4",
            "contributions": 7,
            "htmlUrl": "https://github.com/ianrayns",
            "id": 5468933,
            "login": "ianrayns"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/506296?v=4",
            "contributions": 8,
            "htmlUrl": "https://github.com/mikery",
            "id": 506296,
            "login": "mikery"
          },
          {
            "avatarUrl": "https://avatars3.githubusercontent.com/u/7072575?v=4",
            "contributions": 8,
            "htmlUrl": "https://github.com/acondrat",
            "id": 7072575,
            "login": "acondrat"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/7197435?v=4",
            "contributions": 10,
            "htmlUrl": "https://github.com/SowmyaJujjuri",
            "id": 7197435,
            "login": "SowmyaJujjuri"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/287584?v=4",
            "contributions": 12,
            "htmlUrl": "https://github.com/radeksimko",
            "id": 287584,
            "login": "radeksimko"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/27153?v=4",
            "contributions": 13,
            "htmlUrl": "https://github.com/smithclay",
            "id": 27153,
            "login": "smithclay"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/3082319?v=4",
            "contributions": 17,
            "htmlUrl": "https://github.com/grubernaut",
            "id": 3082319,
            "login": "grubernaut"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/6820331?v=4",
            "contributions": 20,
            "htmlUrl": "https://github.com/bridgetlane",
            "id": 6820331,
            "login": "bridgetlane"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/4684194?v=4",
            "contributions": 27,
            "htmlUrl": "https://github.com/jamesgoodhouse",
            "id": 4684194,
            "login": "jamesgoodhouse"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/422474?v=4",
            "contributions": 31,
            "htmlUrl": "https://github.com/paultyng",
            "id": 422474,
            "login": "paultyng"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/455419?v=4",
            "contributions": 49,
            "htmlUrl": "https://github.com/jthurman42",
            "id": 455419,
            "login": "jthurman42"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/25180681?v=4",
            "contributions": 52,
            "htmlUrl": "https://github.com/renovate-bot",
            "id": 25180681,
            "login": "renovate-bot"
          },
          {
            "avatarUrl": "https://avatars1.githubusercontent.com/u/29264964?v=4",
            "contributions": 66,
            "htmlUrl": "https://github.com/zlesnr",
            "id": 29264964,
            "login": "zlesnr"
          },
          {
            "avatarUrl": "https://avatars2.githubusercontent.com/u/2590905?v=4",
            "contributions": 116,
            "htmlUrl": "https://github.com/sanderblue",
            "id": 2590905,
            "login": "sanderblue"
          },
          {
            "avatarUrl": "https://avatars0.githubusercontent.com/u/413389?v=4",
            "contributions": 160,
            "htmlUrl": "https://github.com/ctrombley",
            "id": 413389,
            "login": "ctrombley"
          }
        ],
        "issues": {
          "open": 38
        },
        "latestRelease": {
          "date": "2020-07-27T23:58:46Z",
          "name": "v1.20.1"
        },
        "license": {
          "key": "mpl-2.0",
          "name": "Mozilla Public License 2.0",
          "spdxId": "MPL-2.0",
          "url": "http://choosealicense.com/licenses/mpl-2.0/"
        },
        "screenshots": []
      },
      "githubUrl": "https://github.com/newrelic/terraform-provider-newrelic",
      "defaultBranch": null,
      "contributingGuideUrl": null,
      "iconUrl": "https://raw.githubusercontent.com/newrelic/developer-toolkit/master/icon.png",
      "description": "Observability as Code: Provision and manage your New Relic resources via Terraform's powerful configuration language.",
      "ossCategory": {
        "slug": "community-project",
        "title": "Community Project",
        "description": "This code is developed in the open with input from the community through issues and PRs. There is an active maintainer team within New Relic, troubleshooting support in the New Relic Explorers Hub, and the documentation is available in the project repository."
      },
      "owner": {
        "login": "newrelic",
        "type": "Organization"
      },
      "permalink": "https://opensource.newrelic.com/projects/newrelic/terraform-provider-newrelic",
      "primaryLanguage": "Go",
      "shortDescription": "Automate provisioning of New Relic resources",
      "supportUrl": "https://discuss.newrelic.com/tags/c/build-on-new-relic/developer-toolkit/terraform",
      "projectTags": [
        {
          "title": "Tools",
          "slug": "tools"
        },
        {
          "title": "Developer Toolkit",
          "slug": "dev-toolkit"
        },
        {
          "title": "Terraform",
          "slug": "terraform"
        }
      ],
      "team": null,
      "website": {
        "url": "https://github.com/newrelic/terraform-provider-newrelic"
      },
      "mainContent": {
        "mdx": {
          "__typename": "Mdx",
          "compiledMdx": "function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"path\": \"/projects/newrelic/terraform-provider-newrelic\",\n  \"date\": \"2020-06-30\",\n  \"title\": \"New Relic Terraform Provider\"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component '\" + name + \"' was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"p\", null, \"The New Relic Terraform Provider integrates with core Terraform to streamline the provisioning and management of resources in your New Relic account.\"), mdx(\"p\", null, \"Codify your New Relic resources using HashiCorp's configuration language (HCL), manage your resources within your CI/CD pipelines, and create an ecosystem of observability best practices.\"), mdx(\"p\", null, \"The New Relic Terraform Provider is one of many tools provided by the \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://newrelic.github.io/developer-toolkit/\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"Developer Toolkit\"), \".\"), mdx(\"h2\", null, \"Getting Started\"), mdx(\"p\", null, \"For more information on how to use the provider to configure your alerts, notifications, monitors, and many other New Relic resources, please view the \", mdx(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://registry.terraform.io/providers/newrelic/newrelic/latest/docs\",\n    \"target\": \"__blank\",\n    \"rel\": \"noopener noreferrer\"\n  }), \"documentation\"), \".\"));\n}\n;\nMDXContent.isMDXComponent = true;"
        }
      }
    }
  ];

  return (
    <div className={styles.homepageCollection}>
      <h4 className={styles.title}>Instrumentation projects</h4>
      <p className={styles.description}>
        Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. <a href="#">Other highlighted projects</a>
      </p>

      <div className={`${styles.projectsContainer} ${projectsHovered && styles.projectsHovered}`} onMouseOver={() => {setProjectsHovered(true)}} onMouseOut={() => {setProjectsHovered(false)}}>
        <Button
          className={styles.ctaButton}
          as="a"
          variant={Button.VARIANT.PRIMARY}
          href="/instrumentation"
          target="__blank"
          css={css`
            .dark-mode & {
              border-color: transparent;
            }

            &&&:after {
              display: none;
            }
          `}
        >
          
          <span className={styles.subProjectCallToActionLabel}>
            View all
          </span>
        </Button>
        
        {projects.map(project => {
          const link = project.permalink.replace(
            'https://opensource.newrelic.com',
            ''
          );
          return (
            <SimpleProjectModule className={styles.project} data={project} key={project.slug} projectLink={link} />
          );
        })}
      </div>
    </div>
  );
};

Footer.propTypes = {
  editLink: PropTypes.string
};

export default Footer;
