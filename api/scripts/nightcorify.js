#!/usr/bin/env node

const ffmpeg = require('fluent-ffmpeg');

// ffmpeg -i ./lipdub.mp3 -af asetrate=44100*1.3,aresample=44100 output.mp3
const nightcorify = (input, output) =>
  new Promise(resolve =>
    ffmpeg(input)
      .audioFilters(
        'asetrate=44100*1.4',
        'aresample=44100',
        'atempo=0.91',
      )
      //.on('start', function() { console.log('👨🏻‍🔬 Nightcorification begun...'); })
      //.on('progress', function({ percent }) { console.log(`Processing: ${percent}% done`); })
      //.on('stderr', function(error) { console.error('Stderr output : ' + error); })
      //.on('error', function(error) { console.error('Cannot process file : ' + error.message); })
      .on('end', () => resolve(output))
    .save(output)
  );

module.exports = nightcorify;
