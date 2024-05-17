
exports = module.exports = {
	rgbToHex (r, g, b) {
		r = Number(r).toString(16).toUpperCase();
		g = Number(g).toString(16).toUpperCase();
		b = Number(b).toString(16).toUpperCase();

		r = r.padStart(2, "0");
		g = g.padStart(2, "0");
		b = b.padStart(2, "0");

		return `${r}${g}${b}`;
	},
	createCmyk ({ cmyk: [ c, m, y, k ], rgb: [r, g, b] }) {
		return `device-cmyk(${c}% ${m}% ${y}% ${k}% / 1, rgb(${r} ${g} ${b}))`;
	},
	calcBrightness (r, g, b) {
		r = Math.pow(r / 255, 2.2);

		g = g / 255 * 1.5;
		g = Math.pow(g, 2.2);

		b = b / 255 * 0.6;
		b = Math.pow(b, 2.2);

		const molecule = r + g + b;
		let denominator = 1;
		denominator += Math.pow(1.5, 2.2);
		denominator += Math.pow(0.6, 2.2);

		let value = molecule / denominator;

		value = Math.sqrt(value, (1 / 2.2));

		return value;
	}
};