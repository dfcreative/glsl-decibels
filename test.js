const createOutput = require('gl-shader-output')
const assert = require('assert')
const glsl = require('glslify')
const db = require('decibels')
const almost = require('almost-equal')

let toGainFrag = glsl(`
precision highp float;

#pragma glslify: toGain = require('./to-gain.glsl')

uniform float value;

void main () {
	gl_FragColor = vec4(toGain(value));
}
`);

let fromGainFrag = glsl`
precision highp float;

#pragma glslify: fromGain = require('./from-gain.glsl')

uniform float value;

void main () {
	gl_FragColor = vec4(fromGain(value));
}
`


let toGain = createOutput(toGainFrag)
let fromGain = createOutput(fromGainFrag)


assert.ok(almost(toGain({value: -10})[0], db.toGain(-10), 1e-4))
assert.ok(almost(fromGain({value: 13})[0], db.fromGain(13), 1e-4))
