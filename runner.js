const fs = require('fs');

class Runner {
    constructor() {
        // store a reference to every file we discover in the directory
        this.files = [];
    }

    async collectFiles(targetPath){
        // iterate through all the different folders of a project
        // and add it to the this.files array

        // use the fs module to inspect target path and find files and folders in targetPath
        const files = await fs.promises.readdir(targetPath);

        return files;
    }
}

module.exports = Runner;