const request = require('request');
const fs = require('fs');

const downloadResource = (URL, localPath) => {
  request(URL.join(""), (error, response, body) => {
    fs.writeFile(localPath.join(""), body, err => {
      if (err) {
        console.error(err);
      }
      let fileSize = body.length;
      console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`);
    });
  });
};

downloadResource(process.argv.slice(2, 3), process.argv.slice(3));