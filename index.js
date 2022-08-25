#!/usr/bin/env node
// After configuring package.json run npm link in terminal
const Runner = require('./runner');

const runner = new Runner();

// helper function for running async/await
const run = async () => {
    const results = await runner.collectFiles(process.cwd()); // current working directory

    console.log(results);
};

run();