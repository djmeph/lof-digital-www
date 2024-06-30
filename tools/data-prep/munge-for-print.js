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

  // -========== -========== EVENT.JSON FEED PARSE ==========- ==========-

  // This file comes from our platform at https://whatwherewhen.lakesoffire.org.
  // This data shaping script reflects the shape of that input file.
  let rawEventsArray = JSON.parse(
    readFileSync(filePath.replace('tpl.tsv', 'events.json'))
  ).coalesce.coalesce;

  // 2024-06-30: As of this writing, detecting emojis is a huge pain.
  // The same logic to detect them also picks up numbers.
  // The following logic is a workaround that identifies all emoji
  // and numeric matches, filters out numbers, and then generates a
  // regular expression that will replace all and only the emojis
  // detected in the event titles and descriptions.
  // It seems overkill but it's the only solution I could find that
  // doesn't require a lot of manual review to data or source code.
  const emojiMatchPattern = /\p{Emoji}/gu;
  const ellipsisPattern = /…/g;
  let emojiReplacePattern = '';
  let emojiMatches = [];

  // Populate the emojiReplacePattern
  rawEventsArray.map((evt) => {
    const titleMatch = evt.title.match(emojiMatchPattern);
    const descriptionMatch = evt.event_description.match(emojiMatchPattern);
    if (titleMatch !== null) {
      emojiMatches.push(titleMatch);
    }
    if (descriptionMatch !== null) {
      emojiMatches.push(descriptionMatch);
    }
  });

  // Deduplicate the emoji array and strip out numbers
  emojiReplacePattern = new RegExp(
    '[' +
      [
        ...new Set(
          emojiMatches.flat().filter((val) => val.match(/^[^*#0-9]$/u))
        ),
      ].join('') +
      ']',
    'g'
  );

  rawEventsArray = rawEventsArray.map((evt) => {
    evt.title = evt.title
      .replace(emojiReplacePattern, '')
      .replace(/^[ \t]+/, '')
      .replace(ellipsisPattern, '...');

    evt.event_description = evt.event_description
      .replace(emojiReplacePattern, '')
      .replace(/^[ \t]+/, '')
      .replace(ellipsisPattern, '...');

    return evt;
  });

  // This log left as a memorial, to honor the drafts of logic this idiotic
  // forward-compatibility-breaking defect in the UTF-8 character specification
  // stripped from my time, my wrists, and my brain.
  //console.log(`+++ Replacing all detected emojis: ${emojiReplacePattern}`);

  // ========== EVENTS ==========
  let eventsArray = rawEventsArray
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((evt) => {
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
  let scheduleArray = rawEventsArray
    .flatMap((evt) => {
      return evt.event_times.map((event_time) => {
        // Yes, this date formatting logic is ugly;
        // I know it.
        // I love it all the same because it works.

        // Calculate the start message
        const start = new Date(event_time.starting);
        let sched_start_human =
          '' +
          (start.getHours() % 12) +
          ' ' +
          (start.getHours() % 12 < start.getHours() ? 'PM' : 'AM');
        sched_start_human =
          sched_start_human == '0 AM' ? 'Midnight' : sched_start_human;

        // Calculate the end message
        const end = new Date(event_time.ending);
        let sched_end_human =
          '' +
          (end.getHours() % 12) +
          ' ' +
          (end.getHours() % 12 < end.getHours() ? 'PM' : 'AM');
        sched_end_human =
          sched_end_human == '0 AM' ? 'Midnight' : sched_end_human;

        // Calculate the duration and handle all-day events
        let sched_duration = (end - start) / 1000 / 60 / 60;
        if (event_time.all_day) {
          sched_start_human = 'All day';
          sched_end_human = '';
          sched_duration = '24';
        }

        return {
          evt_hosting_location: evt.hosting_location,
          evt_title: evt.title,
          sched_day_of_week: event_time.day_of_week,
          sched_duration_hrs: sched_duration,
          sched_end_dt: new Date(event_time.ending),
          sched_end_human: sched_end_human,
          sched_id: event_time.event_time_id,
          sched_start_dt: new Date(event_time.starting),
          sched_start_human: sched_start_human,
          site: evt.site_id == null ? '' : `Site ${evt.site_id}`,
          tag_alcohol: evt.alcohol ? tagPath + 'tag_alcohol.svg' : '',
          tag_all_day: event_time.all_day ? tagPath + 'tag_all_day.svg' : '',
          tag_crafting: evt.crafting ? tagPath + 'tag_crafting.png' : '',
          tag_fire_art: evt.fire_art ? tagPath + 'tag_fire_art.png' : '',
          tag_food: evt.food ? tagPath + 'tag_food.png' : '',
          tag_red_light: evt.red_light ? tagPath + 'tag_red_light.png' : '',
          tag_sober: evt.sober ? tagPath + 'tag_sober.png' : '',
          tag_spectacle: evt.spectacle ? tagPath + 'tag_spectacle.png' : '',
          evt_description: evt.event_description.replaceAll(/[\r\n \t]+/g, ' '),
        };
      });
    })
    .sort((a, b) => {
      return a.sched_start_dt - b.sched_start_dt;
    });

  writeFileSync(
    outPath.replace('tpl', 'schedule'),
    stringify(scheduleArray),
    null,
    'utf8'
  );
  // ========== END ==========
};

main();
