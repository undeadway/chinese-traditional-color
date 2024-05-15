const fs = require("fs");
const methods = require("./methods");
const data = require("./../res/data.json");

const rgbVals = [];
const cymkVals = [];

for (const item of data) {
    const { items, name } = item;
    rgbVals.push(`/* 节气：${item.cnName} */`);
    cymkVals.push(`/* 节气：${item.cnName} */`);
    for (const color of items) {
        const rgb = methods.rgbToHex(... color.value.rgb);
        const cymk = methods.createCymk(color.value);
        const cssName = `  --ctc_${name}_${color.name}`;
        const rgbVal = `${cssName}: { color: #${rgb}; }`;
        const rgbBgVal = `${cssName}-bg: { background-color: #${rgb}; }`;
        const cymkVal = `${cssName}: { color: ${cymk}; }`;
        const cymkBgVal = `${cssName}-bg: { background-color: ${cymk}; }`;

        rgbVals.push(`/* 颜色：${color.cnName} */`);
        rgbVals.push(rgbVal);
        rgbVals.push(rgbBgVal);
        cymkVals.push(`/* 颜色：${color.cnName} */`);
        cymkVals.push(cymkVal);
        cymkVals.push(cymkBgVal);
    }
}

const rgbFile = `:root {\r\n${rgbVals.join("\r\n")}\r\n}`;
const cymkFile = `:root {\r\n${cymkVals.join("\r\n")}\r\n}`;

fs.writeFileSync(`${__dirname}/../dist/chinese-traditional-color.rgb.css`, rgbFile);
fs.writeFileSync(`${__dirname}/../dist/chinese-traditional-color.cymk.css`, cymkFile);