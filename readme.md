# glsl-decibels

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Convert values to and from decibels.

## Usage

[![NPM](https://nodei.co/npm/glsl-decibels.png)](https://nodei.co/npm/glsl-decibels/)

```glsl
varying float value;

#pragma glslify: toGain = require('glsl-decibels/to-gain')
#pragma glslify: fromGain = require('glsl-decibels/from-gain')

void main() {
  float dbValue = fromGain(value);
  float gainValue = toGain(dbValue);
}
```

## Related

* [audiojs/decibels](https://github.com/audiojs/decibels) — js decibels converter
