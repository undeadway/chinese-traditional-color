const fs = require("fs");
const methods = require("./../src/methods");
const data = require("./../res/data.json");

const sass = require("sass");

const vals = [];
const exportsVals = [];

for (const item of data) {
	const { items, name } = item;
	vals.push(`/* 节气：${item.cnName} */`);
	for (const color of items) {
		const rgb = methods.rgbToHex(... color.value.rgb);
		const cmyk = methods.createCmyk(color.value);
		const cssName = `CTC_${name}_${color.name}`;

		const rgbVal = `$${cssName}:#${rgb};`;
		const cmykVal = `$${cssName}-cmyk:${cmyk};`;

		vals.push(`/* 颜色：${color.cnName} */`);
		vals.push(rgbVal);
		vals.push(cmykVal);

		exportsVals.push(`/* 颜色：${color.cnName} */`);
		exportsVals.push(`	${cssName}: $${cssName};`);
		exportsVals.push(`	${cssName}-cmyk: $${cssName}-cmyk;`);
	}
}

const file = `${vals.join("\r\n")}

:export {
${exportsVals.join("\r\n")}
}`;
const fileName = `${__dirname}/../dist/chinese-traditional-color.scss`;
fs.writeFileSync(fileName, file);

// const result = sass.compileString(input);
// console.log(result.css);
