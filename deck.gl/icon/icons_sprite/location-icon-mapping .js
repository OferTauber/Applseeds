const width = 128 / 2;
const height = 128 / 2;
const size = 64;
const loop = size * 4;

const iconMapping = {
  'marker-1': {
    x: 0 * width,
    y: 0 * height,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-2': {
    x: width * 1,
    y: height * 0,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-3': {
    x: width * 2,
    y: height * 0,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-4': {
    x: width * 3,
    y: height * 0,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-5': {
    x: width * 0,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-6': {
    x: width * 1,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-7': {
    x: width * 2,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-8': {
    x: width * 3,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-9': {
    x: width * 0,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-10': {
    x: width * 1,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-20': {
    x: width * 2,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-30': {
    x: width * 3,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-40': {
    x: width * 0,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-50': {
    x: width * 1,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-60': {
    x: width * 2,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-70': {
    x: width * 3,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-80': {
    x: width * 0,
    y: height * 4,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-90': {
    x: width * 1,
    y: height * 4,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-100': {
    x: width * 2,
    y: height * 4,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-1-partner': {
    x: loop * 2,
    y: 0,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-2-partner': {
    x: loop + width * 1,
    y: height * 0,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-3-partner': {
    x: loop + width * 2,
    y: height * 0,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-4-partner': {
    x: loop + width * 3,
    y: height * 0,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-5-partner': {
    x: loop + width * 0,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-6-partner': {
    x: loop + width * 1,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-7-partner': {
    x: loop + width * 2,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-8-partner': {
    x: loop + width * 3,
    y: height * 1,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-9-partner': {
    x: loop + width * 0,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-10-partner': {
    x: loop + width * 1,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-20-partner': {
    x: loop + width * 2,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-30-partner': {
    x: loop + width * 3,
    y: height * 2,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-40-partner': {
    x: loop + width * 0,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-50-partner': {
    x: loop + width * 1,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-60-partner': {
    x: loop + width * 2,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-70-partner': {
    x: loop + width * 3,
    y: height * 3,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-80-partner': {
    x: loop + width * 0,
    y: height * 4,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-90-partner': {
    x: loop + width * 1,
    y: height * 4,
    width: size,
    height: size,
    anchorY: 128,
  },
  'marker-100-partner': {
    x: loop + width * 2,
    y: height * 4,
    width: size,
    height: size,
    anchorY: 128,
  },

  marker: {
    x: 3 * width,
    y: 4 * height,
    width: size,
    height: size,
    anchorY: 128,
  },
};
export default iconMapping;