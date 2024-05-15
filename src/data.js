const data = require("./../res/data.json");
const methods = require("./methods");

const output = {};
const solarTermsCnNameList = [];
const solarTermsNameList = [];
const cnNamesList = [];
const cnNamesMap = {};

const stColorMapList = []; // 按节气分的列表（index）
const colorsMap = {}; // 所有颜色的直接 map
const namesMap = {}; // 中 => 英

for (const item of data) {
    const outMap = {};
    const { items, name, cnName } = item;
    solarTermsCnNameList.push(cnName);
    solarTermsNameList.push(name);
    const nameList = [];
    const stColorMap = {};
    for (const color of items) {
        const { rgb: [ r, g, b ], cymk: [ c, y, m, k], } = color.value;
        cnNamesList.push(color.cnName);
        nameList.push(color.cnName);

        namesMap[color.cnName] = color.name;
        stColorMap[color.name] = colorsMap[color.name] = {
            getRgb () {
                return {
                    r, g, b
                }
            },
            getCymk () {
                return {
                    c, y, m, k
                }
            },
            getHexRgb () {
                return `#${methods.rgbToHex(rgb)}`;
            }
        }
    }
    stColorMapList.push(stColorMap);
    cnNamesMap[cnName] = nameList;
    output[name] = outMap;
}

exports = module.exports = {
    getColorByCnName (cnName) {
        const colorName = namesMap[cnName];
        return cnNamesMap[colorName];
    },
    getColorByName () {

    },
    getColorListBySolarTerm (input) {
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
    getAllSolarTermNameList () {
        return [].concat(solarTermsList);
    }
};