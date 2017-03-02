float round (float value) {
	return floor (value + .5);
}

float toGain (float value) {
	if (value <= -40.) {
		return 0.;
	}

	return round(exp(value / 8.6858) * 10000.) / 10000.;
}

#pragma glslify: export(toGain)
