var myLogReader = require('./LogReader.js');

myLogReader = new LogReader(44);
myLogReader.getLogFile();
myLogReader.printLogLocations();