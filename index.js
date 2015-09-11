var fs = require('fs'),
  path = require('path'),
  dir = require('node-dir'),
  Q = require('q'),
  _ = require('lodash'),
  argv = require('yargs').argv,
  dummyjson = require('dummy-json');

// set up OPTIONS
var OPT = {
  directory: argv.dir || '01_ProductListing-StarWars',
  template: argv.template || 'product-array-template',
};
OPT.path = argv.path || __dirname + '/../' + OPT.directory;

var template = fs.readFileSync('./templates/' + OPT.template + '.hbs', {
  encoding: 'utf8'
});

var fileNamesArray = [];
var deferred = Q.defer();

console.log('Creating JSON from directory:\n', OPT.directory, '\nUsing template:\n', OPT.template);

function readFiles() {
  dir.readFiles(OPT.path,
    function(err, content, filename, next) {
      if (err) throw err;
      fileNamesArray.push(filename);
      next();
    },
    function(err, files) {
      if (err) throw err;
      var filesMap = _.map(fileNamesArray, function(fileName) {
        var pathArray = fileName.split('/');
        var fileName = pathArray[pathArray.length - 1];
        return {
          file: fileName,
          options: OPT
        };
      });
      deferred.resolve(filesMap);
    });
  return deferred.promise;
}

function generateFilenames(fileNamesArray) {
  console.log('filenames array', fileNamesArray);
  deferred.resolve(filesMap);
  return deferred.promise;
}

function writeFile(filesMap) {
  console.log('writing', filesMap);
  var result = dummyjson.parse(template, {
    data: {
      items: filesMap
    }
  });
  fs.writeFile("./tmp/" + OPT.directory + ".json", result, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

readFiles()
  .then(writeFile);