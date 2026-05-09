const fs = require("fs");
function readFile() {
    fs.readFile("text.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
        } else {
            console.log("File Content:");
            console.log(data);
        }
    });
}
function writeFile(content) {
    fs.writeFile("text.txt", content, (err) => {
        if (err) {
            console.log("Error writing file");
        } else {
            console.log("File created successfully");
        }
    });
}
function deleteFile() {
    fs.unlink("text.txt", (err) => {
        if (err) {
            console.log("Error deleting file");
        } else {
            console.log("File deleted successfully");
        }
    });
}
function makeDirectory() {
    fs.mkdir("NewFolder", (err) => {
        if (err) {
            console.log("Error creating directory");
        } else {
            console.log("Directory created");
        }
    });
}
function removeDirectory() {
    fs.rmdir("NewFolder", (err) => {
        if (err) {
            console.log("Error removing directory");
        } else {
            console.log("Directory removed");
            }
    });
}
module.exports = {
    readFile,
    writeFile,
    deleteFile,
    makeDirectory,
    removeDirectory
};