export default {
  otherProjects: {
    edges: [
      {
        node: {
          id: '841503d0-cfdb-5afd-91f8-49c40605cd64',
          acceptsContributions: false,
          name: 'adopt-open-jdk',
          title: 'Adopt OpenJDK',
          fullName: 'adopt-open-jdk',
          slug: 'adopt-open-jdk',
          isParentProject: true,
          stats: null,
          githubUrl: 'https://github.com/AdoptOpenJDK',
          iconUrl: '../images/adopt-open-jdk-icon.jpg',
          description:
            'The Community and code behind the Build Farm which produces high quality, FREE OpenJDK (Java) binaries.',
          ossCategory: null,
          owner: {
            login: 'AdoptOpenJDK',
            type: 'Organization',
          },
          permalink: 'https://opensource.newrelic.com/projects/adopt-open-jdk',
          primaryLanguage: null,
          shortDescription: 'Open Java binaries',
          supportUrl: null,
          projectTags: [
            {
              title: 'Tools',
              slug: 'tools',
            },
          ],
          team: [
            {
              name: 'Ben Evans',
              avatarUrl:
                'https://avatars0.githubusercontent.com/u/81539?s=88&u=ec037a0a4945011f224bf734faf54fd99fd1c8d8&v=4',
              githubUrl: 'https://github.com/kittylyst',
              role: '',
            },
            {
              name: 'Jason Plumb',
              avatarUrl:
                'https://avatars1.githubusercontent.com/u/54085190?s=460&u=b8812ef576c38434643500d5c57e79164cc4ee7d&v=4',
              githubUrl: 'https://github.com/breedx-nr',
              role: '',
            },
            {
              name: 'Jason Clark',
              avatarUrl:
                'https://avatars0.githubusercontent.com/u/130504?s=460&v=4',
              githubUrl: 'https://github.com/jasonrclark',
              role: '',
            },
            {
              name: 'Tony Mancill',
              avatarUrl:
                'https://avatars2.githubusercontent.com/u/1195611?s=460&v=4',
              githubUrl: 'https://github.com/tmancill',
              role: '',
            },
            {
              name: 'Cameron Hotchkies',
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/1108009?s=460&u=83cf85d93292fb59d04aeebb7b58a784930172a7&v=4',
              githubUrl: 'https://github.com/cameronhotchkies',
              role: '',
            },
            {
              name: 'Rich Vanderwal',
              avatarUrl:
                'https://avatars1.githubusercontent.com/u/1462042?s=460&u=91b3cd118aad9ce2be981483e9fc033e3c094077&v=4',
              githubUrl: 'https://github.com/rvanderwal-newrelic',
              role: '',
            },
          ],
          mainContent: {
            mdx: {
              compiledMdx:
                'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/adopt-open-jdk",\n  "date": "05/01/2020",\n  "title": "Adopt OpenJDK",\n  "projectConfig": "src/data/projects/adopt-open-jdk.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "How New Relic is Involved"), mdx("p", null, "New Relic is a sponsor of ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://adoptopenjdk.net",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "AdoptOpenJDK"), " and participates in technical work related to the project, including:"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, "Performance Regression testing"), mdx("li", {\n    parentName: "ul"\n  }, "Java Flight Recorder (JFR) and Java Mission Control (JMC)"), mdx("li", {\n    parentName: "ul"\n  }, "Beta testing"), mdx("li", {\n    parentName: "ul"\n  }, "Build tooling")), mdx("p", null, "We also use Adopt\'s binaries extensively in our own JVM-based services and recommend them as the preferred upgrade path from Oracle\'s binaries."));\n}\n;\nMDXContent.isMDXComponent = true;',
            },
          },
        },
      },
      {
        node: {
          id: '257bba96-f187-5c14-925b-24a2456e0c39',
          acceptsContributions: false,
          name: 'open-telemetry',
          title: 'OpenTelemetry',
          fullName: 'open-telemetry',
          slug: 'open-telemetry',
          isParentProject: true,
          stats: null,
          githubUrl: 'https://github.com/open-telemetry',
          iconUrl: '../images/open-telemetry-icon.jpg',
          description:
            'OpenTelemetry makes robust, portable telemetry a built-in feature of cloud-native software.',
          ossCategory: null,
          owner: {
            login: 'open-telemetry',
            type: 'Organization',
          },
          permalink: 'https://opensource.newrelic.com/projects/open-telemetry',
          primaryLanguage: null,
          shortDescription:
            'OpenTelemetry makes robust, portable telemetry a built-in feature of cloud-native software.',
          supportUrl: null,
          projectTags: [
            {
              title: 'OpenTelemetry',
              slug: 'opentelemetry',
            },
          ],
          team: [
            {
              name: 'Victor Soares',
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/21367523?s=460&u=3583c3abb055f9c127101ba2cc4589e17aefb847&v=4',
              githubUrl: 'https://github.com/victorNewRelic',
              role: '',
            },
            {
              name: 'John Watson',
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/858731?s=460&v=4',
              githubUrl: 'https://github.com/jkwatson',
              role: 'Java Maintainer',
            },
            {
              name: 'Tyler Yahn',
              avatarUrl:
                'https://avatars1.githubusercontent.com/u/5543599?s=460&u=f34eb596f4aeb4bff9eb2d57975df03f724a7968&v=4',
              githubUrl: 'https://github.com/MrAlias',
              role: 'Go Maintainer',
            },
            {
              name: 'Alan West',
              avatarUrl:
                'https://avatars0.githubusercontent.com/u/3676547?s=460&u=e51a590905c98e54c0ce86cb024f14f0836d0792&v=4',
              githubUrl: 'https://github.com/alanwest',
              role: '.NET',
            },
            {
              name: 'Erik Lucus',
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/4761745?s=460&v=4',
              githubUrl: 'https://github.com/elucus',
              role: '.NET',
            },
            {
              name: 'Bryan Clement',
              avatarUrl:
                'https://avatars0.githubusercontent.com/u/1342804?s=460&v=4',
              githubUrl: 'https://github.com/lykkin',
              role: 'C++',
            },
            {
              name: 'Johannes Tax',
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/16337442?s=460&u=a85de161008fedf3539c622c2163090036e02e69&v=4',
              githubUrl: 'https://github.com/pyohannes',
              role: 'C++',
            },
            {
              name: 'Michael Lang',
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/18387?s=460&v=4',
              githubUrl: 'https://github.com/mwlang',
              role: 'Ruby',
            },
            {
              name: 'Jason Plumb',
              avatarUrl:
                'https://avatars1.githubusercontent.com/u/54085190?s=460&u=b8812ef576c38434643500d5c57e79164cc4ee7d&v=4',
              githubUrl: 'https://github.com/breedx-nr',
              role: 'Java',
            },
            {
              name: 'Abhi Arora',
              avatarUrl:
                'https://avatars0.githubusercontent.com/u/779638?s=460&u=84c03a03b1c5ccdf6d28e0e74f670679a92c87df&v=4',
              githubUrl: 'https://github.com/abhihub',
              role: 'Java',
            },
          ],
          mainContent: {
            mdx: {
              compiledMdx:
                'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/open-telemetry",\n  "date": "05/01/2020",\n  "title": "OpenTelemetry",\n  "projectConfig": "src/data/projects/open-telemetry.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "How New Relic is Involved"), mdx("p", null, "Details to follow."));\n}\n;\nMDXContent.isMDXComponent = true;',
            },
          },
        },
      },
      {
        node: {
          id: '68e7bd85-21a3-51ba-85fd-1abb3ab9f205',
          acceptsContributions: false,
          name: 'distributed-tracing-wg',
          title: 'W3C Distributed Tracing Working Group',
          fullName: 'w3c-distributed-tracing-wg',
          slug: 'w3c-distributed-tracing-wg',
          isParentProject: true,
          stats: null,
          githubUrl: 'https://github.com/w3c/distributed-tracing-wg/',
          iconUrl: '../images/w3c-icon.jpg',
          description:
            'Defining common standards for propagating traces and context between tracing tools.',
          ossCategory: null,
          owner: {
            login: 'w3c',
            type: 'Organization',
          },
          permalink:
            'https://opensource.newrelic.com/projects/w3c-distributed-tracing-wg',
          primaryLanguage: null,
          shortDescription:
            'Specifications for distributed tracing and context propagation',
          supportUrl: null,
          projectTags: [
            {
              title: 'OpenTelemetry',
              slug: 'opentelemetry',
            },
          ],
          team: [
            {
              name: 'Erika Arnold',
              avatarUrl:
                'https://avatars2.githubusercontent.com/u/6353483?s=460&u=0d00224e95bd623517640e2cea1b12b15d7aea95&v=4',
              githubUrl: 'https://github.com/erabug',
              role: 'Contributor',
            },
            {
              name: 'Justin Foote',
              avatarUrl:
                'https://avatars1.githubusercontent.com/u/3170392?s=460&v=4',
              githubUrl: 'https://github.com/justinfoote',
              role: 'Contributor',
            },
            {
              name: 'Zeke Rosenberg',
              avatarUrl:
                'https://avatars2.githubusercontent.com/u/5413110?s=460&v=4',
              githubUrl: 'https://github.com/zrosenberg',
              role: 'Contributor',
            },
            {
              name: 'Victor Soares',
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/21367523?s=460&u=3583c3abb055f9c127101ba2cc4589e17aefb847&v=4',
              githubUrl: 'https://github.com/victorNewRelic',
              role: 'Contributor',
            },
            {
              name: 'Tyler Yahn',
              avatarUrl:
                'https://avatars1.githubusercontent.com/u/5543599?s=460&u=f34eb596f4aeb4bff9eb2d57975df03f724a7968&v=4',
              githubUrl: 'https://github.com/MrAlias',
              role: 'Contributor',
            },
          ],
          mainContent: {
            mdx: {
              compiledMdx:
                'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/w3c-distributed-tracing-wg",\n  "date": "05/01/2020",\n  "title": "W3C Distributed Tracing Working Group",\n  "projectConfig": "src/data/projects/w3c-distributed-tracing-wg.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "How New Relic is Involved"), mdx("p", null, "New Relic is a participant in the ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://www.w3.org/2018/distributed-tracing/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "W3C Distributed Tracing Working Group"), "."));\n}\n;\nMDXContent.isMDXComponent = true;',
            },
          },
        },
      },
      {
        node: {
          id: '2a382f8b-b5b4-5e70-bbb5-4bc5edb2edfb',
          acceptsContributions: false,
          name: 'pixie',
          title: 'Pixie',
          fullName: 'pixie',
          slug: 'pixie',
          isParentProject: true,
          stats: null,
          githubUrl: 'https://github.com/pixie-io/pixie',
          defaultBranch: null,
          contributingGuideUrl: null,
          iconUrl: '../images/pixie.png',
          description:
            'Pixie is an open source observability tool for Kubernetes applications.',
          ossCategory: null,
          owner: {
            login: 'pixie',
            type: 'Organization',
          },
          permalink: 'https://opensource.newrelic.com/projects/pixie',
          primaryLanguage: null,
          shortDescription:
            'Pixie is an open source observability tool for Kubernetes applications.',
          supportUrl: '',
          projectTags: [
            {
              title: 'Pixie',
              slug: 'pixie',
            },
          ],
          team: [
            {
              name: 'Zain Asgar',
              avatarUrl: 'https://avatars.githubusercontent.com/u/2660846?v=4',
              githubUrl: 'https://github.com/zasgar',
              role: 'Maintainer',
            },
            {
              name: 'Michelle Nguyen',
              avatarUrl: 'https://avatars.githubusercontent.com/u/1484035?v=4',
              githubUrl: 'https://github.com/aimichelle',
              role: 'Maintainer',
            },
            {
              name: 'Natalie Serrino',
              avatarUrl: 'https://avatars.githubusercontent.com/u/5460125?v=4',
              githubUrl: 'https://github.com/nserrino',
              role: 'Contributor',
            },
            {
              name: 'Omid Azizi',
              avatarUrl: 'https://avatars.githubusercontent.com/u/16814284?v=4',
              githubUrl: 'https://github.com/oazizi000',
              role: 'Contributor',
            },
            {
              name: 'Phillip Kuznetsov',
              avatarUrl: 'https://avatars.githubusercontent.com/u/5456019?v=4',
              githubUrl: 'https://github.com/philkuz',
              role: 'Contributor',
            },
            {
              name: 'Yaxiong Zhao',
              avatarUrl: 'https://avatars.githubusercontent.com/u/49417456?v=4',
              githubUrl: 'https://github.com/yzhao1012',
              role: 'Contributor',
            },
            {
              name: 'Vihang Mehta',
              avatarUrl: 'https://avatars.githubusercontent.com/u/1444638?v=4',
              githubUrl: 'https://github.com/vihangm',
              role: 'Contributor',
            },
            {
              name: 'Nick Lanam',
              avatarUrl: 'https://avatars.githubusercontent.com/u/314133?v=4',
              githubUrl: 'https://github.com/NickLanam',
              role: 'Contributor',
            },
            {
              name: 'James Bartlett',
              avatarUrl: 'https://avatars.githubusercontent.com/u/10334089?v=4',
              githubUrl: 'https://github.com/JamesMBartlett',
              role: 'Contributor',
            },
            {
              name: 'Pete Stevenson',
              avatarUrl: 'https://avatars.githubusercontent.com/u/809015?v=4',
              githubUrl: 'https://github.com/etep',
              role: 'Contributor',
            },
            {
              name: 'Ryan Cheng',
              avatarUrl: 'https://avatars.githubusercontent.com/u/22607368?v=4',
              githubUrl: 'https://github.com/chengruizhe',
              role: 'Contributor',
            },
            {
              name: 'Hannah Troisi',
              avatarUrl: 'https://avatars.githubusercontent.com/u/66266496?v=4',
              githubUrl: 'https://github.com/htroisi',
              role: 'Contributor',
            },
          ],
          website: {
            url: 'https://px.dev/',
          },
          mainContent: {
            mdx: {
              compiledMdx:
                'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/pixie",\n  "date": "05/02/2022",\n  "title": "Pixie",\n  "projectConfig": "src/data/projects/pixie.json"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "What is Pixie?"), mdx("p", null, mdx("a", {\n    parentName: "p",\n    "href": "https://docs.px.dev/about-pixie/pixie-ebpf/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Pixie uses eBPF"), " automatically collect telemetry data. Use Pixie to:"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/network-monitoring",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Monitor your network")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/infra-health",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Inspect the health of your infrastructure")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/service-performance",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "See service maps and service LET metrics")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/request-tracing",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "View individual full-body application requests")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/profiler",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Continuously profile your applications"))), mdx("p", null, "For more information, check out Pixie\'s ", mdx("a", {\n    parentName: "p",\n    "href": "https://docs.px.dev/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "documentation"), "."), mdx("h2", null, "How is New Relic Involved?"), mdx("p", null, "Pixie was contributed by New Relic to the ", mdx("a", {\n    parentName: "p",\n    "href": "https://www.cncf.io/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Cloud Native Computing Foundation (CNCF)"), " as a ", mdx("a", {\n    parentName: "p",\n    "href": "https://www.cncf.io/sandbox-projects/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Sandbox project"), " in June 2021. New Relic is a CNCF ", mdx("a", {\n    parentName: "p",\n    "href": "https://www.cncf.io/about/members/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Platinum Member"), "."));\n}\n;\nMDXContent.isMDXComponent = true;',
            },
          },
        },
      },
    ],
  },
  openTelemetry: {
    nodes: [
      {
        id: '257bba96-f187-5c14-925b-24a2456e0c39',
        acceptsContributions: false,
        name: 'open-telemetry',
        title: 'OpenTelemetry',
        fullName: 'open-telemetry',
        slug: 'open-telemetry',
        isParentProject: true,
        stats: null,
        githubUrl: 'https://github.com/open-telemetry',
        iconUrl: '../images/open-telemetry-icon.jpg',
        description:
          'OpenTelemetry makes robust, portable telemetry a built-in feature of cloud-native software.',
        ossCategory: null,
        owner: {
          login: 'open-telemetry',
          type: 'Organization',
        },
        permalink: 'https://opensource.newrelic.com/projects/open-telemetry',
        primaryLanguage: null,
        shortDescription:
          'OpenTelemetry makes robust, portable telemetry a built-in feature of cloud-native software.',
        supportUrl: null,
        projectTags: [
          {
            title: 'OpenTelemetry',
            slug: 'opentelemetry',
          },
        ],
        team: [
          {
            name: 'Victor Soares',
            avatarUrl:
              'https://avatars3.githubusercontent.com/u/21367523?s=460&u=3583c3abb055f9c127101ba2cc4589e17aefb847&v=4',
            githubUrl: 'https://github.com/victorNewRelic',
            role: '',
          },
          {
            name: 'John Watson',
            avatarUrl:
              'https://avatars3.githubusercontent.com/u/858731?s=460&v=4',
            githubUrl: 'https://github.com/jkwatson',
            role: 'Java Maintainer',
          },
          {
            name: 'Tyler Yahn',
            avatarUrl:
              'https://avatars1.githubusercontent.com/u/5543599?s=460&u=f34eb596f4aeb4bff9eb2d57975df03f724a7968&v=4',
            githubUrl: 'https://github.com/MrAlias',
            role: 'Go Maintainer',
          },
          {
            name: 'Alan West',
            avatarUrl:
              'https://avatars0.githubusercontent.com/u/3676547?s=460&u=e51a590905c98e54c0ce86cb024f14f0836d0792&v=4',
            githubUrl: 'https://github.com/alanwest',
            role: '.NET',
          },
          {
            name: 'Erik Lucus',
            avatarUrl:
              'https://avatars3.githubusercontent.com/u/4761745?s=460&v=4',
            githubUrl: 'https://github.com/elucus',
            role: '.NET',
          },
          {
            name: 'Bryan Clement',
            avatarUrl:
              'https://avatars0.githubusercontent.com/u/1342804?s=460&v=4',
            githubUrl: 'https://github.com/lykkin',
            role: 'C++',
          },
          {
            name: 'Johannes Tax',
            avatarUrl:
              'https://avatars3.githubusercontent.com/u/16337442?s=460&u=a85de161008fedf3539c622c2163090036e02e69&v=4',
            githubUrl: 'https://github.com/pyohannes',
            role: 'C++',
          },
          {
            name: 'Michael Lang',
            avatarUrl:
              'https://avatars3.githubusercontent.com/u/18387?s=460&v=4',
            githubUrl: 'https://github.com/mwlang',
            role: 'Ruby',
          },
          {
            name: 'Jason Plumb',
            avatarUrl:
              'https://avatars1.githubusercontent.com/u/54085190?s=460&u=b8812ef576c38434643500d5c57e79164cc4ee7d&v=4',
            githubUrl: 'https://github.com/breedx-nr',
            role: 'Java',
          },
          {
            name: 'Abhi Arora',
            avatarUrl:
              'https://avatars0.githubusercontent.com/u/779638?s=460&u=84c03a03b1c5ccdf6d28e0e74f670679a92c87df&v=4',
            githubUrl: 'https://github.com/abhihub',
            role: 'Java',
          },
        ],
        mainContent: {
          mdx: {
            compiledMdx:
              'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/open-telemetry",\n  "date": "05/01/2020",\n  "title": "OpenTelemetry",\n  "projectConfig": "src/data/projects/open-telemetry.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "How New Relic is Involved"), mdx("p", null, "Details to follow."));\n}\n;\nMDXContent.isMDXComponent = true;',
          },
        },
      },
    ],
  },
  w3cDistributedTracingWg: {
    nodes: [
      {
        id: '68e7bd85-21a3-51ba-85fd-1abb3ab9f205',
        acceptsContributions: false,
        name: 'distributed-tracing-wg',
        title: 'W3C Distributed Tracing Working Group',
        fullName: 'w3c-distributed-tracing-wg',
        slug: 'w3c-distributed-tracing-wg',
        isParentProject: true,
        stats: null,
        githubUrl: 'https://github.com/w3c/distributed-tracing-wg/',
        iconUrl: '../images/w3c-icon.jpg',
        description:
          'Defining common standards for propagating traces and context between tracing tools.',
        ossCategory: null,
        owner: {
          login: 'w3c',
          type: 'Organization',
        },
        permalink:
          'https://opensource.newrelic.com/projects/w3c-distributed-tracing-wg',
        primaryLanguage: null,
        shortDescription:
          'Specifications for distributed tracing and context propagation',
        supportUrl: null,
        projectTags: [
          {
            title: 'OpenTelemetry',
            slug: 'opentelemetry',
          },
        ],
        team: [
          {
            name: 'Erika Arnold',
            avatarUrl:
              'https://avatars2.githubusercontent.com/u/6353483?s=460&u=0d00224e95bd623517640e2cea1b12b15d7aea95&v=4',
            githubUrl: 'https://github.com/erabug',
            role: 'Contributor',
          },
          {
            name: 'Justin Foote',
            avatarUrl:
              'https://avatars1.githubusercontent.com/u/3170392?s=460&v=4',
            githubUrl: 'https://github.com/justinfoote',
            role: 'Contributor',
          },
          {
            name: 'Zeke Rosenberg',
            avatarUrl:
              'https://avatars2.githubusercontent.com/u/5413110?s=460&v=4',
            githubUrl: 'https://github.com/zrosenberg',
            role: 'Contributor',
          },
          {
            name: 'Victor Soares',
            avatarUrl:
              'https://avatars3.githubusercontent.com/u/21367523?s=460&u=3583c3abb055f9c127101ba2cc4589e17aefb847&v=4',
            githubUrl: 'https://github.com/victorNewRelic',
            role: 'Contributor',
          },
          {
            name: 'Tyler Yahn',
            avatarUrl:
              'https://avatars1.githubusercontent.com/u/5543599?s=460&u=f34eb596f4aeb4bff9eb2d57975df03f724a7968&v=4',
            githubUrl: 'https://github.com/MrAlias',
            role: 'Contributor',
          },
        ],
        mainContent: {
          mdx: {
            compiledMdx:
              'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/w3c-distributed-tracing-wg",\n  "date": "05/01/2020",\n  "title": "W3C Distributed Tracing Working Group",\n  "projectConfig": "src/data/projects/w3c-distributed-tracing-wg.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "How New Relic is Involved"), mdx("p", null, "New Relic is a participant in the ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://www.w3.org/2018/distributed-tracing/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "W3C Distributed Tracing Working Group"), "."));\n}\n;\nMDXContent.isMDXComponent = true;',
          },
        },
      },
    ],
  },
  adoptOpenJdk: {
    nodes: [
      {
        id: '841503d0-cfdb-5afd-91f8-49c40605cd64',
        acceptsContributions: false,
        name: 'adopt-open-jdk',
        title: 'Adopt OpenJDK',
        fullName: 'adopt-open-jdk',
        slug: 'adopt-open-jdk',
        isParentProject: true,
        stats: null,
        githubUrl: 'https://github.com/AdoptOpenJDK',
        iconUrl: '../images/adopt-open-jdk-icon.jpg',
        description:
          'The Community and code behind the Build Farm which produces high quality, FREE OpenJDK (Java) binaries.',
        ossCategory: null,
        owner: {
          login: 'AdoptOpenJDK',
          type: 'Organization',
        },
        permalink: 'https://opensource.newrelic.com/projects/adopt-open-jdk',
        primaryLanguage: null,
        shortDescription: 'Open Java binaries',
        supportUrl: null,
        projectTags: [
          {
            title: 'Tools',
            slug: 'tools',
          },
        ],
        team: [
          {
            name: 'Ben Evans',
            avatarUrl:
              'https://avatars0.githubusercontent.com/u/81539?s=88&u=ec037a0a4945011f224bf734faf54fd99fd1c8d8&v=4',
            githubUrl: 'https://github.com/kittylyst',
            role: '',
          },
          {
            name: 'Jason Plumb',
            avatarUrl:
              'https://avatars1.githubusercontent.com/u/54085190?s=460&u=b8812ef576c38434643500d5c57e79164cc4ee7d&v=4',
            githubUrl: 'https://github.com/breedx-nr',
            role: '',
          },
          {
            name: 'Jason Clark',
            avatarUrl:
              'https://avatars0.githubusercontent.com/u/130504?s=460&v=4',
            githubUrl: 'https://github.com/jasonrclark',
            role: '',
          },
          {
            name: 'Tony Mancill',
            avatarUrl:
              'https://avatars2.githubusercontent.com/u/1195611?s=460&v=4',
            githubUrl: 'https://github.com/tmancill',
            role: '',
          },
          {
            name: 'Cameron Hotchkies',
            avatarUrl:
              'https://avatars3.githubusercontent.com/u/1108009?s=460&u=83cf85d93292fb59d04aeebb7b58a784930172a7&v=4',
            githubUrl: 'https://github.com/cameronhotchkies',
            role: '',
          },
          {
            name: 'Rich Vanderwal',
            avatarUrl:
              'https://avatars1.githubusercontent.com/u/1462042?s=460&u=91b3cd118aad9ce2be981483e9fc033e3c094077&v=4',
            githubUrl: 'https://github.com/rvanderwal-newrelic',
            role: '',
          },
        ],
        mainContent: {
          mdx: {
            compiledMdx:
              'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/adopt-open-jdk",\n  "date": "05/01/2020",\n  "title": "Adopt OpenJDK",\n  "projectConfig": "src/data/projects/adopt-open-jdk.json"\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");\n    return mdx("div", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "How New Relic is Involved"), mdx("p", null, "New Relic is a sponsor of ", mdx("a", _extends({\n    parentName: "p"\n  }, {\n    "href": "https://adoptopenjdk.net",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }), "AdoptOpenJDK"), " and participates in technical work related to the project, including:"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, "Performance Regression testing"), mdx("li", {\n    parentName: "ul"\n  }, "Java Flight Recorder (JFR) and Java Mission Control (JMC)"), mdx("li", {\n    parentName: "ul"\n  }, "Beta testing"), mdx("li", {\n    parentName: "ul"\n  }, "Build tooling")), mdx("p", null, "We also use Adopt\'s binaries extensively in our own JVM-based services and recommend them as the preferred upgrade path from Oracle\'s binaries."));\n}\n;\nMDXContent.isMDXComponent = true;',
          },
        },
      },
    ],
  },
  pixie: {
    nodes: [
      {
        id: '2a382f8b-b5b4-5e70-bbb5-4bc5edb2edfb',
        acceptsContributions: false,
        name: 'pixie',
        title: 'Pixie',
        fullName: 'pixie',
        slug: 'pixie',
        isParentProject: true,
        stats: null,
        githubUrl: 'https://github.com/pixie-io/pixie',
        defaultBranch: null,
        contributingGuideUrl: null,
        iconUrl: '../images/pixie.png',
        description:
          'Pixie is an open source observability tool for Kubernetes applications.',
        ossCategory: null,
        owner: {
          login: 'pixie',
          type: 'Organization',
        },
        permalink: 'https://opensource.newrelic.com/projects/pixie',
        primaryLanguage: null,
        shortDescription:
          'Pixie is an open source observability tool for Kubernetes applications.',
        supportUrl: '',
        projectTags: [
          {
            title: 'Pixie',
            slug: 'pixie',
          },
        ],
        team: [
          {
            name: 'Zain Asgar',
            avatarUrl: 'https://avatars.githubusercontent.com/u/2660846?v=4',
            githubUrl: 'https://github.com/zasgar',
            role: 'Maintainer',
          },
          {
            name: 'Michelle Nguyen',
            avatarUrl: 'https://avatars.githubusercontent.com/u/1484035?v=4',
            githubUrl: 'https://github.com/aimichelle',
            role: 'Maintainer',
          },
          {
            name: 'Natalie Serrino',
            avatarUrl: 'https://avatars.githubusercontent.com/u/5460125?v=4',
            githubUrl: 'https://github.com/nserrino',
            role: 'Contributor',
          },
          {
            name: 'Omid Azizi',
            avatarUrl: 'https://avatars.githubusercontent.com/u/16814284?v=4',
            githubUrl: 'https://github.com/oazizi000',
            role: 'Contributor',
          },
          {
            name: 'Phillip Kuznetsov',
            avatarUrl: 'https://avatars.githubusercontent.com/u/5456019?v=4',
            githubUrl: 'https://github.com/philkuz',
            role: 'Contributor',
          },
          {
            name: 'Yaxiong Zhao',
            avatarUrl: 'https://avatars.githubusercontent.com/u/49417456?v=4',
            githubUrl: 'https://github.com/yzhao1012',
            role: 'Contributor',
          },
          {
            name: 'Vihang Mehta',
            avatarUrl: 'https://avatars.githubusercontent.com/u/1444638?v=4',
            githubUrl: 'https://github.com/vihangm',
            role: 'Contributor',
          },
          {
            name: 'Nick Lanam',
            avatarUrl: 'https://avatars.githubusercontent.com/u/314133?v=4',
            githubUrl: 'https://github.com/NickLanam',
            role: 'Contributor',
          },
          {
            name: 'James Bartlett',
            avatarUrl: 'https://avatars.githubusercontent.com/u/10334089?v=4',
            githubUrl: 'https://github.com/JamesMBartlett',
            role: 'Contributor',
          },
          {
            name: 'Pete Stevenson',
            avatarUrl: 'https://avatars.githubusercontent.com/u/809015?v=4',
            githubUrl: 'https://github.com/etep',
            role: 'Contributor',
          },
          {
            name: 'Ryan Cheng',
            avatarUrl: 'https://avatars.githubusercontent.com/u/22607368?v=4',
            githubUrl: 'https://github.com/chengruizhe',
            role: 'Contributor',
          },
          {
            name: 'Hannah Troisi',
            avatarUrl: 'https://avatars.githubusercontent.com/u/66266496?v=4',
            githubUrl: 'https://github.com/htroisi',
            role: 'Contributor',
          },
        ],
        website: {
          url: 'https://px.dev/',
        },
        mainContent: {
          mdx: {
            compiledMdx:
              'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "path": "/projects/pixie",\n  "date": "05/02/2022",\n  "title": "Pixie",\n  "projectConfig": "src/data/projects/pixie.json"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("h2", null, "What is Pixie?"), mdx("p", null, mdx("a", {\n    parentName: "p",\n    "href": "https://docs.px.dev/about-pixie/pixie-ebpf/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Pixie uses eBPF"), " automatically collect telemetry data. Use Pixie to:"), mdx("ul", null, mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/network-monitoring",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Monitor your network")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/infra-health",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Inspect the health of your infrastructure")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/service-performance",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "See service maps and service LET metrics")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/request-tracing",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "View individual full-body application requests")), mdx("li", {\n    parentName: "ul"\n  }, mdx("a", {\n    parentName: "li",\n    "href": "https://docs.px.dev/tutorials/pixie-101/profiler",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Continuously profile your applications"))), mdx("p", null, "For more information, check out Pixie\'s ", mdx("a", {\n    parentName: "p",\n    "href": "https://docs.px.dev/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "documentation"), "."), mdx("h2", null, "How is New Relic Involved?"), mdx("p", null, "Pixie was contributed by New Relic to the ", mdx("a", {\n    parentName: "p",\n    "href": "https://www.cncf.io/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Cloud Native Computing Foundation (CNCF)"), " as a ", mdx("a", {\n    parentName: "p",\n    "href": "https://www.cncf.io/sandbox-projects/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Sandbox project"), " in June 2021. New Relic is a CNCF ", mdx("a", {\n    parentName: "p",\n    "href": "https://www.cncf.io/about/members/",\n    "target": "__blank",\n    "rel": "noopener noreferrer"\n  }, "Platinum Member"), "."));\n}\n;\nMDXContent.isMDXComponent = true;',
          },
        },
      },
    ],
  },
  sitePage: {
    nodes: [
      {
        fields: {
          contentEditLink:
            'https://github.com/newrelic/opensource-website/tree/develop/src/pages/code-of-conduct.mdx',
        },
        component:
          '/Users/mfrederick/Desktop/NewRelic/github.newrelic/opensource-website/src/pages/code-of-conduct.mdx',
        path: '/code-of-conduct/',
      },
    ],
  },
};
