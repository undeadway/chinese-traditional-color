const data = require("./../res/data.json");
const methods = require("./methods");

const output = {};
const solarTermsCnNameList = [];
const solarTermsNameList = [];
const cnNamesList = [];
const cnNamesMapList = {};

const solarTermMap = {};

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

    const solarTermObj = {
        getColorByName,
        getAllColors () {
            return getColorMapBySolarTerm(color.name);
        }
    };

    solarTermMap[name] = solarTermObj;

    cnNamesMap[name] = cnName;
    namesMap[cnName] = name;

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

function getName (name) {
    let colorName = namesMap[name];
    if (!colorName) {
        colorName = name;
    }
    return colorName;
}

function getColorByName (name) {
    const colorName = getName(name);
    const color = colorsMap[colorName] || null;
    return color;
}

function getColorMapBySolarTerm (input) {
    if (isNaN(input)) {
        if (solarTermsCnNameList.indexOf(input) < 0) { // 英文
            input = solarTermsNameList.indexOf(input);
        } else { // 中文
            input = solarTermsCnNameList.indexOf(input);
        }
    }
    const obj = stColorMapList[input];
    return obj || null;
}

exports = module.exports = {
    getColorByName,
    getColorMapBySolarTerm,
    getAllSolarTermCnNameList () {
        return [].concat(solarTermsCnNameList);
    },
    getAllSolarTermNameList () {
        return [].concat(solarTermsNameList);
    },
    getSolarTermByName (name) {
        const colorName = getName(name);
        return solarTermMap[colorName];

    }
};