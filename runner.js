const fs = require('fs');
const path = require('path');

class Runner {
    constructor() {
        // store a reference to every file we discover in the directory
        this.testFiles = [];
    }

    async runTests() {
        // iterate through the test files we've collected in an array
        // and run the absolute path of the file

        for (let file of this.testFiles) {
            // store our helper functions in an array
            const beforeEaches = [];

            // define our own global beforeEach function like from mocha
            global.beforeEach = (fn) => {
                beforeEaches.push(fn);
            };

            // define our own 'it' function like from mocha and declare it globally
            global.it = (description, fn) => { // args = string description, function

                // run the beforeEaches array with our helper functions first
                beforeEaches.forEach(func => func());

                // then run our intended function for testing
                try {
                    fn();
                    console.log(`OK - ${description}`);
                } catch (err) {
                    console.log(`X - ${description}`);
                    console.log('\t', err.message);
                }
                
            };

            // execute the file using node
            try {
                require(file.name);
            } catch(err) {
                console.log('x - Error Loading File', file.name);
                console.log(err);
            }
            
        }
    }

    async collectFiles(targetPath){
        // iterate through all the different folders of a project
        // and add it to the this.files array

        // use the fs module to inspect target path and find files and folders in targetPath
        const files = await fs.promises.readdir(targetPath);

        // check to see if it's a directory or file, then either walk or inspect
        for  (let file of files) {
        
            // give us a long absolute path to the filename we're working on
            const filepath = path.join(targetPath, file);

            // lstat returns stats object that we can use to determine if file or folder
            const stats = await fs.promises.lstat(filepath);

            if (stats.isFile() && file.includes('.test.js')) { // check if it ends with .test.js
                
                this.testFiles.push({name: filepath});

            } else if (stats.isDirectory()) { // join it to files array we're iterating over
                
                const childFiles = await fs.promises.readdir(filepath);

                // take everything from child files and add it back to files array
                files.push(...childFiles.map(f => path.join(file, f))); // f means file
            }
        }
    }
}

module.exports = Runner;