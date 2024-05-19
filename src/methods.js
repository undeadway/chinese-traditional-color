
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
		// 明度计算公式请参阅 doc/Brightness_Calculation_Formula.svg
		r = Math.pow(r / 255, 2.2);
		g = Math.pow((g * 1.5 / 255), 2.2);
		b = Math.pow((b * 0.6 / 255), 2.2);

		const molecule = r + g + b; // 分子
		const denominator = 1 // 分母
							+ Math.pow(1.5, 2.2)
							+ Math.pow(0.6, 2.2);

		let value = molecule / denominator;

		value = Math.sqrt(value, (1 / 2.2));

		return value;
	}
};