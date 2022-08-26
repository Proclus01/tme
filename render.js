const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const render = async (filename) => {
    const filePath = path.join(process.cwd(), filename);

    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously', // only to execute code we've only authored
        resources: 'usable'
    });

    return dom;
};

module.exports = render;