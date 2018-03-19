var path = require('path');
var os = require('os');
var fs = require('fs');
var filetail = require('file-tail')

///////  Creating Module //////
var exports = module.exports = {};

var logFile = "";
var configFile = "";
var configFileName = "log.config";

// // LogReader Class
exports.logReader = function() {
    return console.log("Module Successfully Imported");
};
// Begins the process of polling the logFile for changes for the purpose of finding a Decklist to validate.
// void 
exports.beginReporting = function() {
    pollForChange();
};

// Stops the application from polling the logFile.
// void 
exports.stopReporting = function() {
    return "Method is unimplemented";
};

// /*
// Basic file copy method.
// */
copyFile = function(configFile, location) {

    let readStream = fs.createReadStream(configFile);

    readStream.once('error', (err) => {
        console.log(err);
    });

    readStream.once('end', () => {
        console.log('log.config file is in place');
    });

    readStream.pipe(fs.createWriteStream(location));
};

// /*
// To obtain the games actions in a log file, you must add a log.config file that has been provided 
// in the folder to a specific location in the file structure. 
// TODO: Allow it to verify permissions.
// */
exports.setLogFile = function() {
    console.log("Set Log File");

    let filename = configFileName;
    let configFile = path.join(__dirname, filename);
    let locationDir = path.join(configFile, filename);

    fs.access(locationDir, (err) => {
        if (err)
            fs.mkdirSync(locationDir);

        copyFile(configFile, path.join(locationDir, filename));
    });

};

// /*
// Updates the logFile field with the most current appropriate Hearthstone log file.
// This method also determines the correct pathing for the location of this log file 
// depending on if you are on a Windows or Mac. 
//     TODO: Currently untested correct path for Windows
// */
exports.getLogFile = function() {
    console.log("Get Log File");

    if (/^win/.test(os.platform())) {
        console.log('Windows computer.');
        var programFiles = 'Program Files';
        if (/64/.test(os.arch())) {
            programFiles += ' (x86)';
        }

        // These are default locations, if the user has changed the location of their directory it will fail
        // we can support finding this in the application
        logFile = path.join('C:', programFiles, 'Hearthstone', 'Logs', 'Power.log');
        configFile = path.join(process.env.LOCALAPPDATA, '/Blizzard/Hearthstone/');

    } else {
        console.log('Mac computer.');

        logFile = path.join('/Applications/Hearthstone/Logs/Power.log');
        configFile = path.join(process.env.HOME, '/Library/Preferences/Blizzard/Hearthstone/');

    }

};

// Constructs a Decklist object from the log file that is being parsed.
// returns Decklist 
LogReader.prototype.constructDecklist = function(logFile) {
    return "This method is not implemented";
};

/*
Searches for new entries in the logFile specified to determine whether 
the log has changed and needs handling with handleChange(). These differences are 
handled line by line and passed to the  handleChange function to parse the data.
Called by beginReporting().
*/
pollForChange = function() {

    var ft = filetail.startTailing(logFile);
    ft.on('line', function(line) {
        handleChange(line);
    });

};
/*
Determines whether the log file change includes a reportable Decklist for reportDecklist(). Searches for keywords 
in the log file that contains deck information and stores it.
*/
handleChange = function(line) {

    // if (line.toLowerCase().indexOf('victory_screen_start') !== -1) {
    //     alert('yo win yourself a horse');
    // }
    // if (line.toLowerCase().indexOf('defeat_screen_start') !== -1) {
    //     alert('yo lost yo game');
    // }
    console.log(line);

};

// Reports a Decklist to ValidationManager
// for use with validateDecklist(Decklist).
// void

exports.reportDecklist = function() {
    return "This method is not implemented";
};

/*
Prints the variables stored
*/
exports.printLogLocations = function() {
    console.log("Log information");
    console.log(logFile);
    console.log(configFile);
    console.log(configFileName);
}