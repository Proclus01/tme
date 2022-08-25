#!/usr/bin/env node
// After configuring package.json run npm link in terminal
const Runner = require('./runner');
const fs = require('fs');

const runner = new Runner();

// helper function for running async/await
const run = async () => {
    await runner.collectFiles(process.cwd()); // current working directory

    runner.runTests();
};

run();