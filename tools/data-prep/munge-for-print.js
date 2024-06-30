const csv = require('csvtojson');
const { readFileSync, writeFileSync } = require('fs');

const filePath = '/src/tools/data-prep/2024/in/WWW Content 2024 - tpl.tsv';
const outPath = '/src/tools/data-prep/2024/out/print-tpl.json';
const tagPath =
  '/Users/rosssmith/Documents/LOF/LoF 2024/WhatWhereWhen/print/assets/event-icons/';

var stringify = (input) => {
  return JSON.stringify(input, null, 2).replaceAll('’', "'");
};

var main = async () => {
  // ========== ART ==========
  let artArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'art')
  );

  writeFileSync(
    outPath.replace('tpl', 'art'),
    stringify(artArray),
    null,
    'utf8'
  );

  // ========== RADIO SGC PROGRAMMING ==========
  let radioArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'radio')
  );

  writeFileSync(
    outPath.replace('tpl', 'radio'),
    stringify(radioArray),
    null,
    'utf8'
  );

  // ========== THEME CAMPS ==========
  // Sort the camps first by neighborhood, then by name
  let campsArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'camps')
  );

  campsArray = campsArray.sort((a, b) => {
    sort1 = a.neighborhood.localeCompare(b.neighborhood);
    sort2 = a.name.localeCompare(b.name);

    return sort1 == 0 ? sort2 : sort1;
  });

  writeFileSync(
    outPath.replace('tpl', 'camps'),
    stringify(campsArray),
    null,
    'utf8'
  );

  // ========== MUTANT VEHICLES ==========
  let vehiclesArray = await csv({ delimiter: '\t' }).fromFile(
    filePath.replace('tpl', 'vehicles')
  );

  vehiclesArray = vehiclesArray.sort((a, b) => a.name.localeCompare(b.name));

  writeFileSync(
    outPath.replace('tpl', 'vehicles'),
    stringify(vehiclesArray),
    null,
    'utf8'
  );

  // ========== EVENTS ==========
  // This file comes from our platform at https://whatwherewhen.lakesoffire.org.
  // This data shaping script reflects the shape of that input file.
  let rawEventsArray = JSON.parse(
    readFileSync(filePath.replace('tpl.tsv', 'events.json'))
  ).coalesce.coalesce;

  let eventsArray = rawEventsArray.map((evt) => {
    return {
      site: evt.site_id == null ? '' : `Site ${evt.site_id}`,
      evt_title: evt.title,
      evt_hosting_location: evt.hosting_location,
      evt_description: evt.event_description.replaceAll(/[\r\n \t]+/g, ' '),
      tag_alcohol: evt.alcohol ? tagPath + 'tag_alcohol.svg' : '',
      tag_all_day:
        evt.event_times.filter((time) => time.all_day).length ==
        evt.event_times.length
          ? tagPath + 'tag_all_day.svg'
          : '',
      tag_crafting: evt.crafting ? tagPath + 'tag_crafting.png' : '',
      tag_fire_art: evt.fire_art ? tagPath + 'tag_fire_art.png' : '',
      tag_food: evt.food ? tagPath + 'tag_food.png' : '',
      tag_red_light: evt.red_light ? tagPath + 'tag_red_light.png' : '',
      tag_sober: evt.sober ? tagPath + 'tag_sober.png' : '',
      tag_spectacle: evt.spectacle ? tagPath + 'tag_spectacle.png' : '',
    };
  });

  writeFileSync(
    outPath.replace('tpl', 'events'),
    stringify(eventsArray),
    null,
    'utf8'
  );

  // ========== SCHEDULE ==========
  // ========== END ==========
};

main();
