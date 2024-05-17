const CTC = require("./../src/index");
const method = require("./../src/methods");

/*
 * 测试1. 测试通过 index 和 名称取出的 solar Tarm 是否一致
 */
function case1 () {
    const solarTermValList = [  "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
        "立夏", "小满", "芒种", "夏至", "小暑", "大暑",
        "立秋", "处暑", "白露", "秋分", "寒露", "霜降",
        "立冬", "小雪", "大雪", "冬至", "小寒", "大寒" ];

    for (let i = 0; i < solarTermValList.length; i++) {
    const solarTerm1 = CTC.getSolarTerm(i);
    const solarTermName = solarTermValList[i];
    const solarTerm2 = CTC.getSolarTerm(solarTermName);

    console.log(solarTerm1.getName(), solarTerm1 === solarTerm2);
    }
}

function case2() {
    const solarTermList = CTC.getSolarTermList();
    for (const solarTerm of solarTermList) {
        const solarTermName= solarTerm.getName();
        const solarTerm2 = CTC.getSolarTerm(solarTermName);

        console.log(solarTerm.getName(), solarTerm === solarTerm2);
    }
}

    const xxx = [

    ];


function testCase(rgbs, index) {
    console.log("===================");
    const solarTerm = CTC.getSolarTerm(index);

    const colorList = solarTerm.getColorList();

    for (let i = 0; i < colorList.length; i++) {
        const color = colorList[i];

        const hex1 = "#" + method.rgbToHex(... rgbs[i]);
        const hex2 = color.getHexRgb();

        console.log(index, solarTerm.getName(), i, color.getName(), hex1, hex2, hex1 === hex2);
    }
}

case1();
case2();

testCase([
    [255, 247, 153],
    [255, 238, 111],
    [236, 212, 82],
    [182, 160, 20],
    [213, 235, 225],
    [177, 213, 200],
    [153, 188, 172],
    [128, 164, 146],
    [139, 112, 66],
    [119, 80, 57],
    [95, 67, 33],
    [66, 37, 23],
    [243,166,148],
    [238,121,89],
    [186,81,64],
    [193,44,31]
], 0);

testCase([
    [249, 211, 227],
    [236, 176, 193],
    [221, 118, 148],
    [167, 98, 131],
    [190,177,170],
    [180,146,115],
    [164,95,68],
    [107,84,88],
    [229,168,75],
    [225,138,59],
    [152,79,49],
    [124,70,30],
    [192,214,149],
    [169,190,123],
    [119,150,73],
    [79,111,70]
], 1);

testCase([
    [186,91,73],
    [166,64,54],
    [158,42,34],
    [124,25,30],
    [246,190,200],
    [240,145,160],
    [220,107,130],
    [195,92,93],
    [254,220,94],
    [250,192,61],
    [219,155,52],
    [198,121,21],
    [154,167,177],
    [107,121,142],
    [69,70,94],
    [44,47,59]
], 2);

testCase([
    [235,238,232],
    [235,237,223],
    [224,224,208],
    [199,198,182],
    [210,175,157],
    [188,131,107],
    [178,109,93],
    [154,102,85],
    [234,85,20],
    [210,57,24],
    [200,22,29],
    [167,33,38],
    [50,113,174],
    [0,113,117],
    [40,72,82],
    [18,38,79]
], 3);

testCase([
    [166,85,157],
    [138,24,116],
    [108,33,109],
    [66,34,86],
    [190,194,179],
    [157,157,130],
    [145,145,119],
    [121,131,108],
    [211,204,214],
    [155,142,169],
    [126,82,127],
    [102,61,116],
    [203,92,131],
    [184,53,112],
    [167,55,102],
    [144,55,84]
], 4);

testCase([
    [220,199,225],
    [187,161,203],
    [166,126,183],
    [125,82,132],
    [168,191,143],
    [104,148,92],
    [76,128,69],
    [68,106,55],
    [174,208,238],
    [110,155,197],
    [53,78,107],
    [19,57,62],
    [189,130,83],
    [148,86,53],
    [128,76,46],
    [91,50,34]
], 5);