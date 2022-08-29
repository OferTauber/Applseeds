import { portsData } from './portsData.js';

const ports = portsData.features;

const run = () => {
  let i = 0;
  let k = 0;

  for (i = 0; i < ports.length; i++) {
    // for (i = 0; i < 5; i++) {
    const id1 = ports[i].id;
    for (k = i + 1; k < ports.length; k++) {
      // for (k = i + 1; k < 5; k++) {
      const id2 = ports[k].id;

      if (id1 === id2) {
        console.log(id1);
        return;
      }
    }
  }
};

run();
