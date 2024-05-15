
exports = module.exports = {
	rgbToHex (r, g, b) {
		r = Number(r).toString(16).toUpperCase();
		g = Number(g).toString(16).toUpperCase();
		b = Number(b).toString(16).toUpperCase();

		return `${r}${g}${b}`;
	},
	createCymk ({ cymk, rgb }) {
		return `device-cmyk(${cymk[0]}% ${cymk[1]}% ${cymk[2]}% ${cymk[3]}% / 1, rgb(${rgb[0]} ${rgb[1]} ${rgb[2]}))`;
	}
};