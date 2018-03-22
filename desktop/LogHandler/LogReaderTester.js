/////////////////////////////////
/////////// Testing  ////////////

var LogReader = require('./LogReader.js');

var report;
var decklist;

LogReader.getLogFile();

LogReader.manualLogLocation();

LogReader.beginReporting();

var interval = setInterval(function() {
    var bool = LogReader.report();
    if (bool) {
        decklist = LogReader.reportDecklist();
        for (var i in decklist) {
            console.log(decklist[i]);
        }
        clearInterval(interval);
    }
}, 5000);



/*
// Functionality is currently unsupported
// To solve log.config errors download another 
// hs deck tracker that will correctly configure 
// the files
*/
// LogReader.logReader();
// LogReader.getLogFile();
// LogReader.setLogFile();
// LogReader.printLogLocations();