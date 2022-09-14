import { portsData } from './portsData.js';
import * as fs from 'fs';

const CHANCK_SIZE = 50;

const ports = portsData.features.map((port) => {
  const { type, id, geometry, geometry_name, properties } = port;
  const { portname, code, iso3, iso3_op, country } = properties;

  return {
    type,
    id,
    geometry,
    geometry_name,
    properties: { portname, code, iso3, iso3_op, country },
  };
});

const chanks = [];
let count = 0;

while (ports.length > CHANCK_SIZE) {
  const chank = ports.splice(0, CHANCK_SIZE);
  chanks.push({ chankNum: count, ports: chank });
  count++;
}
chanks.push({ chankNum: count, ports });

try {
  fs.writeFileSync('temp.json', JSON.stringify(chanks));
} catch (err) {
  console.error(err);
}

//!================================================================================================
// console.log(ports);

// import { portsData } from './portsData.js';
// import * as fs from 'fs';

// const ports = portsData.features.map((port) => {
//   const { type, id, geometry, geometry_name, properties } = port;
//   const { portname, code, iso3, iso3_op, country } = properties;

//   return {
//     type,
//     id,
//     geometry,
//     geometry_name,
//     properties: { portname, code, iso3, iso3_op, country },
//   };
// });

// portsData.features = ports;

// try {
//   fs.writeFileSync('temp.json', JSON.stringify(portsData));
// } catch (err) {
//   console.error(err);
// }

// // console.log(ports);
