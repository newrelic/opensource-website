var request = require('request');
const fs = require('fs');

fs.readdir("../src/data/projects", (err, files) => {
  files.forEach((file, i) => {
    const rawdata = fs.readFileSync(`../src/data/projects/${file}`);
    const project = JSON.parse(rawdata);
    if (project.iconUrl && project.iconUrl.startsWith('http')) {
      request({method: 'HEAD', uri:project.iconUrl}, function (error,  response) {
        if (!error && response.statusCode == 200) {
          console.log(`${file} Ok`);
        } else {
          console.log(`${file} contains an invalid URL. Setting to null.`);
          project.iconUrl = null;
          const newFileContent = JSON.stringify(project, null, 2);
          fs.writeFileSync(`../src/data/projects/${file}`, newFileContent);
          //console.log(`Writing to ${file}:\n${newFileContent}`);
        }
      });
    } else {
      console.log(`Skipping ${file}`);
    }

  });
});
