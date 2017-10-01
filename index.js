const fs = require('fs')
const showdown  = require('showdown')
const converter = new showdown.Converter()
let inputFile = process.argv[2]

if (!inputFile) {
    console.log('Need a file name as first argument.')
    process.exit()
} else if (inputFile[0] !== '/') {
    console.log('please use full Unix path')
    process.exit()
}

fs.readFile(inputFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
    proccess.exit()
  }
  writeToNewFile(converter.makeHtml(data))
});

const writeToNewFile = (data) => {
    const suffix = "---convertedToHTML.html"
    fs.writeFile('output.html', data, 'utf8', function(err) {
        if(err) {
            return console.log(err);
            process.exit()
        }
        console.log(`New file has been saved next to the old file with the suffix ` + suffix)
        process.exit()
    }); 
}