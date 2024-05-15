const data = require("./../res/data.json");
const methods = require("./methods");

const output = {};
const solarTermsCnNameList = [];
const solarTermsNameList = [];
const cnNamesList = [];
const cnNamesMapList = {};

const stColorMapList = []; // 按节气分的列表（index）
const colorsMap = {}; // 所有颜色的直接 map
const namesMap = {}; // 中 => 英
const cnNamesMap = {}; // 英 => 中

for (const item of data) {
    const outMap = {};
    const { items, name, cnName } = item;
    solarTermsCnNameList.push(cnName);
    solarTermsNameList.push(name);
    const nameList = [];
    const stColorMap = {};
    for (const color of items) {
        const { rgb: [ r, g, b ], cmyk: [ c, m, y, k], } = color.value;
        cnNamesList.push(color.cnName);
        nameList.push(color.cnName);

        cnNamesMap[color.name] = color.cnName;
        namesMap[color.cnName] = color.name;
        stColorMap[color.name] = colorsMap[color.name] = {
            getName () {
                return color.name;
            },
            getCnName () {
                return color.cnName;
            },
            getRgb () {
                return {
                    r, g, b
                }
            },
            getCmyk () {
                return {
                    c, m, y, k
                }
            },
            getHexRgb () {
                return `#${methods.rgbToHex(r,g, b)}`;
            }
        }
    }
    stColorMapList.push(stColorMap);
    cnNamesMapList[cnName] = nameList;
    output[name] = outMap;
}

exports = module.exports = {
    getColorByName (name) {
        let colorName = namesMap[name];
        if (!colorName) {
            colorName = name;
        }
        return colorsMap[colorName];
    },
    getColorMapBySolarTerm (input) {
        if (isNaN(input)) {
            if (solarTermsCnNameList.indexOf(input) < 0) { // 英文
                input = solarTermsNameList.indexOf(input);
            } else { // 中文
                input = solarTermsCnNameList.indexOf(input);
            }
        }
        return stColorMapList[input];
    },
    getAllColorCnNameList () {
        return [].concat(cnNamesList);
    },
    getAllSolarTermCnNameList () {
        return [].concat(solarTermsCnNameList);
    },
    getAllSolarTermNameList () {
        return [].concat(solarTermsNameList);
    },
    getColorNameByCnName (cnName) {
        return namesMap[cnName];
    },
    getColorCnNameByName (name) {
        return cnNamesMap[name];
    }
};