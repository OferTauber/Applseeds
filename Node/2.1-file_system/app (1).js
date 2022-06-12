const fs = require('fs');

fs.writeFileSync('ofer.txt', "This is Ofer's text file");
fs.copyFile('./ofer.txt', 'copy_ofer.txt', (err) => {
  if (err) {
    console.log(err);
  }
});

fs.rename('copy_ofer.txt', "This is a copy of Ofer's text file.txt", (err) => {
  if (err) {
    console.log(err);
  }
});

fs.writeFileSync('copy_ofer.txt', "This is a copy of Ofer's text file.txt");

console.log('__dirname: ', __dirname);
console.log(fs.readdirSync(__dirname));
const files = fs.readdirSync(__dirname);
files.forEach((file) => {
  console.log(file);
});
