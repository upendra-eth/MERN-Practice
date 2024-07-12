const fs = require('fs');

const content = 'Hello, world!';

fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully');
});
