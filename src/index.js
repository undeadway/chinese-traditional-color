const data = require("./../res/data.json");
const methods = require("./methods");

const colorMap = {};
const solarTermMap = {};
const solarTermsList = [];

for (const solarTerm of data) {

    const { cnName, items } = solarTerm;
    const colorList = [];

    const solarTermObj = {
        getName () {
            return cnName;
        },
        getColor (condition) {
            return colorMap[condition] || colorList[condition] || null;;
        },
        getColorList () {
            return colorList;
        }
    };
    solarTermMap[cnName] = solarTermObj;
    solarTermsList.push(solarTermObj);

    for (const color of items) {

        const { rgb: [ r, g, b ], cmyk: [ c, m, y, k], } = color.value;

        const colorObj = {
            toString () {
                return `${color.cnName} #${methods.rgbToHex(r,g, b)}`;
            },
            getName () {
                return color.cnName;
            },
            getRgb () {
                return { r, g, b };
            },
            getCmyk () {
                return { c, m, y, k };
            },
            getHexRgb () {
                return `#${methods.rgbToHex(r,g, b)}`;
            }
        };

        colorMap[color.cnName] = colorObj;
        colorList.push(colorObj);
    }
}

exports = module.exports = {
    getColorByName (colorName) {
        return colorMap[colorName] || null;
    },
    getSolarTerm (condition) {
        return solarTermMap[condition] || solarTermsList [condition] || null;
    },
    getSolarTermList () {
        return solarTermsList;
    }
}