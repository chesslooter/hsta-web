var path = require('path');
var os = require('os');
var fs = require('fs');

var filetail = require('file-tail')


// // LogReader Class
function LogReader(id) {
    this.id = id;
    this.logFile = "";
    this.configFile = "";
    this.configFileName = "log.config";
}
// Begins the process of polling the logFile for changes for the purpose of finding a Decklist to validate.
// void 
LogReader.prototype.beginReporting = function() {
    this.pollForChange();
};
// // Stops the application from polling the logFile.
// // void 
// LogReader.prototype.stopReporting = function() {

// };

LogReader.prototype.getDataLocation = function() {
    return 'C:/Program Files (x86)/Hearthstone/Hearthstone_Data/output_log.txt';
};
LogReader.prototype.getConfigLocation = function() {
    if (/^win/.test(os.platform())) {
        return process.env.LOCALAPPDATA + '/Blizzard/Hearthstone/' + this.configFileName;
    } else {
        return process.env.HOME + 'Library/Preferences/Blizzard/Hearthstone/s' + this.configFileName;
    }
};
LogReader.prototype.configExist = function() {
    return fs.existsSync(this.getConfigLocation());
};
LogReader.prototype.createConfig = function(callback) {
    if (this.configExist()) return;
    fs.renameSync(process.cwd() + '/' + this.configFileName, this.getConfigLocation());
};

LogReader.prototype.setLogFile = function() {

    this.createConfig();


    // this.getLogFile();

    // console.log('config file path: %s', this.configFile);
    // console.log('log file path: %s', this.logFile);

    // var localConfigFile = path.join(__dirname, 'log.config');
    // fs.createReadStream(localConfigFile).pipe(fs.createWriteStream(this.configFile));
    // console.log('Copied log.config file to force Hearthstone to write to its log file.');
};
// // Updates the logFile field with the most current appropriate Hearthstone log file.
// // void
LogReader.prototype.getLogFile = function() {

    if (/^win/.test(os.platform())) {
        console.log('Windows platform detected.');
        var programFiles = 'Program Files';
        if (/64/.test(os.arch())) {
            programFiles += ' (x86)';
        }
        this.logFile = path.join('C:', programFiles, 'Hearthstone', 'Hearthstone_Data', 'output_log.txt');
        this.configFile = path.join(process.env.LOCALAPPDATA, 'Blizzard', 'Hearthstone', 'log.config');
    } else {
        console.log('OS X platform detected.');
        this.logFile = path.join(process.env.HOME, 'Library', 'Logs', 'Unity', 'Player.log');
        this.configFile = path.join(process.env.HOME, 'Library', 'Preferences', 'Blizzard', 'Hearthstone');
    }

};

LogReader.prototype.printLogLocations = function() {
    console.log(this.id);
    console.log(this.logFile);
    console.log(this.configFile);
}

// // Constructs a Decklist object from the log file that is being parsed.
// // returns Decklist 
// LogReader.prototype.constructDecklist = function(logFile) {

// };
// Searches for differences between prevLogFile and logFile to determine whether the log has changed and needs handling with handleChange().
//void 
LogReader.prototype.pollForChange = function() {

    var ft = filetail.startTailing(this.configFile);
    ft.on('line', this.handleChange);

};
// Determines whether the log file change includes a reportable Decklist for reportDecklist(). Updates the prevLogFile field.
//void 
LogReader.prototype.handleChange = function(line) {

    if (line.toLowerCase().indexOf('victory_screen_start') !== -1) {
        alert('yo win yourself a horse');
    }
    if (line.toLowerCase().indexOf('defeat_screen_start') !== -1) {
        alert('yo lost yo game');
    }
    console.log(line);

};

// // Reports a Decklist to ValidationManager
// // for use with validateDecklist(Decklist).
// // void

// LogReader.prototype.reportDecklist = function() {

// };

/////////////////////////////////
/////////// Testing  ///////////
myLogReader = new LogReader(44);
myLogReader.setLogFile();
// myLogReader.getLogFile();
// myLogReader.printLogLocations();
// myLogReader.beginReporting();


///////  Creating Module //////
// module.exports.LogReader = LogReader;
// module.exports.readLogs = function(id) {
//     return new LogReader(id);
// };