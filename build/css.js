const fs = require("fs");
const methods = require("./../src/methods");
const data = require("./../res/data.json");

const scssVals = [];
const scssExportsVals = [];
const cssVals = [];

for (const item of data) {
	const { items, name } = item;

	scssVals.push(`/* 节气：${item.cnName} */`);
	cssVals.push(`	/* 节气：${item.cnName} */`);

	for (const color of items) {
		const rgb = methods.rgbToHex(... color.value.rgb);
		const cmyk = methods.createCmyk(color.value);
		const cssName = `CTC_${name}_${color.name}`;

		const scssRgbVal = `$${cssName}:#${rgb};`;
		const scssCmykVal = `$${cssName}-cmyk:${cmyk};`;

		const cssRgbVal = `	--${cssName}:#${rgb};`;
		const cssCmykVal = `	--${cssName}-cmyk:${cmyk};`;

		cssVals.push(`	/* 颜色：${color.cnName} */`);
		cssVals.push(cssRgbVal);
		cssVals.push(cssCmykVal);

		scssVals.push(`/* 颜色：${color.cnName} */`);
		scssVals.push(scssRgbVal);
		scssVals.push(scssCmykVal);

		scssExportsVals.push(`/* 颜色：${color.cnName} */`);
		scssExportsVals.push(`	${cssName}: $${cssName};`);
		scssExportsVals.push(`	${cssName}-cmyk: $${cssName}-cmyk;`);
	}
}

const scssFile = `${scssVals.join("\r\n")}

:export {
${scssExportsVals.join("\r\n")}
}`;
const scssFileName = `${__dirname}/../dist/chinese-traditional-color.scss`;
fs.writeFileSync(scssFileName, scssFile);

const cssFile = `:root {
${cssVals.join("\r\n")}
};`;

const cssFileName = `${__dirname}/../dist/chinese-traditional-color.css`;
fs.writeFileSync(cssFileName, cssFile);