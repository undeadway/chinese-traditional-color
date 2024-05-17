
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
	}
};