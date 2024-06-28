const csv = require('csvtojson');
const { writeFileSync } = require('fs');

const filePath = '/src/tools/data-prep/2024/in/WWW Content 2024 - tpl.tsv';
const outPath = '/src/tools/data-prep/2024/out/digital-www.json';

var main = async () => {
  const artArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'art')
  );
  const radioArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'radio')
  );
  const campsArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'camps')
  );
  const vehiclesArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'vehicles')
  );

  writeFileSync(
    outPath,
    JSON.stringify(
      {
        art: artArray,
        radio: radioArray,
        camps: campsArray,
        vehicles: vehiclesArray,
      },
      null,
      2
    ),
    'utf8'
  );
};

main();
