const CTC = require("./../src/index");

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

case1();
case2();