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
`;
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
