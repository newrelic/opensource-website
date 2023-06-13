/* eslint-disable no-console */
const prettyPrintJson = (json) => console.log(JSON.stringify(json, null, 2));

const prettyPrint = (message) => console.log(message);

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

module.exports = {
  prettyPrintJson,
  prettyPrint,
  sleep,
};
