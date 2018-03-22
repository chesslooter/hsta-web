var path = require('path');
var os = require('os');
var fs = require('fs');

var Farseer = require('farseer').default;
var farseer = new Farseer();

/*
// Creating Module
*/
var exports = module.exports = {};

/*
// Variables
*/
// Location of the logFile output while Hearthstone is being played
var logFile = "";
// Location the config file needs to be placed to receive log output
var configFileLoc = "";
// Name of the file that configures the Hearthstone log output
var configFileName = "log.config";
// Name of the file tail that tracks the changes in the logFile
var ft;
// Array of Card IDs to be sent
var decklist = [];
// Array of Card IDs to be removed from decklist
var antiDecklist = [];
// Tells the program the decklist is ready to be called
var reportDecklist = false;

/*
// Searches for new entries in the logFile specified to determine whether 
// the log has changed and needs handling. These differences are 
// handled line by line and passed to the  handleChange function to parse the data.
// Polling begins by calling beginReporting().
*/
farseer.on('zone-change', function(data) {
    handleChange(data);
});

farseer.on('game-start', function(data) {
    console.log("Game Start");
    decklist = [];
    antiDecklist = [];
});

farseer.on('game-over', function(data) {
    console.log("Game End");
    decklist = decklistDifferential(decklist, antiDecklist);
    reportDecklist = true;
    stopReporting();
});

/*
// Determines whether the log file change includes a reportable Decklist for reportDecklist(). Searches for keywords 
// in the log file that contains deck information and stores it.
*/
handleChange = function(data) {

    if (data.fromTeam == "FRIENDLY" && data.fromZone == "DECK" && data.toTeam == "FRIENDLY" && data.toZone == "HAND") {
        constructDecklist(data.cardId);
    }
    if (data.fromTeam == "FRIENDLY" && data.fromZone == "HAND" && data.toTeam == "FRIENDLY" && data.toZone == "DECK") {
        constructAntiDecklist(data.cardId);
    }
    if (data.fromTeam == "OPPOSING" && data.fromZone == "HAND" && data.toTeam == "FRIENDLY" && data.toZone == "DECK") {
        constructAntiDecklist(data.cardId);
    }

};

/*
// Constructs a Decklist object from the log file that is being parsed.
// Adds each ID of cards drawn throughout the game to the decklist
*/
constructDecklist = function(cardId) {
    decklist.push(cardId);
};

/*
// Constructs a anti-Decklist object from the log file that is being parsed.
// Adds the ID of cards that are added to the deck so that we can remove these
// from the final decklist.
*/
constructAntiDecklist = function(cardId) {
    antiDecklist.push(cardId);
};

/*
// Removes the cards that were added to the decklist that were not 
// originally in the deck
*/
decklistDifferential = function(decklist1, decklist2) {

    for (var i in decklist2) {
        for (var j in decklist1) {
            if (decklist1[j] === decklist2[i]) {
                decklist1 = decklist1.splice(j, 1);
            }
        }
    }
    return decklist1;

};

/*
// Check if the module can successfully be called from the tester.
*/
exports.logReader = function() {
    return console.log("Module Successfully Imported");
};

/*
// Calls the pollForChange method which begins the process for handling changes to the log file.
*/
exports.beginReporting = function() {
    console.log("starting");
    farseer.start();
};

/*
// Stops the application from polling the logFile.
*/
stopReporting = function() {
    farseer.stop();
};

/*
// Reports true or false. 
// True = decklist is ready to pull
// False = still collecting data
*/
exports.report = function() {
    return reportDecklist;
}

/*
// Reports a Decklist to ValidationManager
*/
exports.reportDecklist = function() {
    return decklist;
};

/*
// Set test log file location for testing without Hearthstone client
*/
exports.setLogFileLocation = function(logLocation) {
    logFile = logLocation;
}

/*
// Need the config.log file placed to get logs for the game output. 
// This wont be necesary once we get the automatic file placement working 
*/
exports.manualLogLocation = function() {
    console.log("Place the log.config file included in the directory location specified below");
    console.log(configFileLoc);
    console.log("If that doesn't work on your machine, download the OS appropriate application below and run it once")
    console.log("https://hsdecktracker.net/")
}

/*
// Prints the variables stored
*/
exports.printLogLocations = function() {
    console.log("Log Information");
    console.log(logFile);
    console.log(configFileLoc);
    console.log(configFileName);
}

/////////////////////////////////////////////////////////
// Copy file work. Will be saved for Iter2 most likely //
/////////////////////////////////////////////////////////

/*
// Basic file copy method.
// Copies file to dir2.
*/
var copyFile = (file, dir2) => {

    //gets file name and adds it to dir2
    var f = path.basename(file);
    var source = fs.createReadStream(file);
    var dest = fs.createWriteStream(path.resolve(dir2, f));

    source.pipe(dest);
    source.on('end', function() { console.log('Successfully copied'); });
    source.on('error', function(err) { console.log(err); });
};

/*
// To obtain the games actions in a log file, you must add a log.config file that has been provided 
// in the folder to a specific location in the file structure. 
// TODO: Allow it to verify permissions.
*/
exports.setLogFile = function() {
    console.log("Set Log File");

    let filename = configFileName;
    let ourConfigFile = path.join(__dirname, filename);

    // console.log(configFileLoc);
    // console.log(ourConfigFile);

    mkdirp(configFileLoc, function(err) {
        if (err) console.error(err)
        else console.log('Successfully created directory')
    });

    copyFile(ourConfigFile, configFileLoc);
};

// /*
// Updates the logFile field with the most current appropriate Hearthstone log file.
// This method also determines the correct pathing for the location of this log file 
// depending on if you are on a Windows or Mac. 
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
        configFileLoc = path.join(process.env.LOCALAPPDATA, '/Blizzard/Hearthstone/');

    } else {
        console.log('Mac computer.');

        logFile = path.join('/Applications/Hearthstone/Logs/Power.log');
        configFileLoc = path.join(process.env.HOME, '/Library/Preferences/Blizzard/Hearthstone/');

    }

};