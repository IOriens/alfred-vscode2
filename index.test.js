const alfyTest = require('alfy-test');

const main = async () => {
  const alfy = alfyTest();

  const result = await alfy('vscode');

  console.log(result);
};

main();
