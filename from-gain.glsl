float round (float value) {
	return floor (value + .5);
}

float fromGain (float value) {
	return round(round(20. * (0.43429 * log(value)) * 100.) / 100. * 10.) / 10.;
}

#pragma glslify: export(fromGain)
