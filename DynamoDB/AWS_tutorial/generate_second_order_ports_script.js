import { portsData } from './portsData.js';
import * as fs from 'fs';

const ports = portsData.features.map((port) => {
  const { id, properties } = port;

  return { id, ...properties };
});

// while (ports.length > CHANCK_SIZE) {
//   const chank = ports.splice(0, CHANCK_SIZE);
//   chanks.push({ chankNum: count, ports: chank });
//   count++;
// }
// chanks.push({ chankNum: count, ports });

try {
  fs.writeFileSync('second_order_ports.json', JSON.stringify(ports));
} catch (err) {
  console.error(err);
}
