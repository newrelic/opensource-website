const path = require('path');
const fs = require('fs');
const _ = require('lodash');

fs.readdir("../src/data/project-stats", (err, files) => {
  files.forEach((file, i) => {
    const name = file.substring(0, file.length-5);

    if (!fs.existsSync(`../src/data/projects/${name}.json`)) {
      console.log(name);
    }
  });
});

