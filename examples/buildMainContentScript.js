const path = require('path');
const fs = require('fs');
const _ = require('lodash');

function buildContentMdx(project) {
  return `---
path: "/projects/${project.fullName}"
date: "05/01/2020"
title: "${project.title}"
projectConfig: "src/data/projects/${project.slug}.json"
---

## Getting Started

Go to the project's [README](${project.githubUrl}) for setup and usage details.

<!--

import { Link } from 'gatsby';

<div className="responsive-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/7wnav6Fu9T0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<Link to="/cta">Install</Link>

## [Optional] Features

### [Optional] Feature 1

### [Optional] Feature 2

## [Required] Getting Started

### [Optional] Code example highlighting an extension or customization point

This is how you extend ${project.title} in following way.

\`\`\`js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// I'm a comment;
const aMadeUpFunction = () => {
if (myArray.length !== 100) {
  myArray.map((item, i) => item * i);
} else {
  return null
}
};
\`\`\`
### [Optional] More details about the project

## [Optional] What people are saying

Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet,
consectetur adipiscing elit.

> [name="Leslie Webb"] Vitae enim egestas egestas at gravida arcu, amet in. Facilisis at
massa amet, aliquet dui semper. Sit placerat sed et ornare faucibus
egestas sit nisl, diam.

> [name="Bildad the Shuhite"] Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
vestibulum. Maecenas faucibus mollis interdum. Maecenas sed diam
eget risus varius blandit sit amet non magna.
-->`;
}

fs.readdir('../src/data/projects', (err, files) => {
  files.forEach((file, i) => {
    const name = file.substring(0, file.length - 5);

    const rawdata = fs.readFileSync(`../src/data/projects/${file}`);
    const project = JSON.parse(rawdata);
    if (!fs.existsSync(`../src/data/project-main-content/${name}.mdx`)) {
      const mdxContent = buildContentMdx(project);
      fs.writeFileSync(
        `../src/data/project-main-content/${name}.mdx`,
        mdxContent
      );
      console.log(`Wrote ../src/data/project-main-content/${name}.mdx`);
    } else {
      console.log(`skipping ../src/data/project-main-content/${name}.mdx`);
    }
  });
});
