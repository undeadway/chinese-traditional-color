const fs = require("fs");
const methods = require("./methods");
const data = require("./../res/data.json");

const vals = [];

for (const item of data) {
	const { items, name } = item;
	vals.push(`	/* 节气：${item.cnName} */`);
	for (const color of items) {
		const rgb = methods.rgbToHex(... color.value.rgb);
		const cymk = methods.createCymk(color.value);
		const cssName = `	--ctc_${name}_${color.name}`;

		const rgbVal = `${cssName}:#${rgb};`;
		const rgbBgVal = `${cssName}-cymk:${cymk};`;

		vals.push(`	/* 颜色：${color.cnName} */`);
		vals.push(rgbVal);
		vals.push(rgbBgVal);
	}
}

const file = `:root {
${vals.join("\r\n")}
}`;

fs.writeFileSync(`${__dirname}/../dist/chinese-traditional-color.css`, file);