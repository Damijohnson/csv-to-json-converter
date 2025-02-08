const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('dataset.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Write to JSON file
    fs.writeFileSync('dataset.json', JSON.stringify(results, null, 2));
    console.log('Conversion complete! Check dataset.json');
  }); 