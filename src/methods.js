
exports = module.exports = {
	rgbToHex (r, g, b) {
		r = Number(r).toString(16).toUpperCase();
		g = Number(g).toString(16).toUpperCase();
		b = Number(b).toString(16).toUpperCase();

		return `${r}${g}${b}`;
	},
	createCmyk ({ cmyk, rgb }) {
		return `device-cmyk(${cmyk[0]}% ${cmyk[1]}% ${cmyk[2]}% ${cmyk[3]}% / 1, rgb(${rgb[0]} ${rgb[1]} ${rgb[2]}))`;
	}
};