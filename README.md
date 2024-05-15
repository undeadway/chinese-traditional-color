# 说明

![](./doc/book-cover.jpg)


根据《中国传统色：故宫里的色彩美学》一书，将书中的色彩翻译成前端代码 。

## 关于变量名

![](./doc/CTC.png)

因为原书中所有颜色的命名非常文艺，不好翻译，至少我不认为我有能力去翻译。  
所以所有颜色（包括节气）全部写成汉语拼音。

另外，为了避免颜色名同音，加上了节气的命名空间（前缀）。   
不过，节气名参照中国气象局的[二十四节气翻译](https://www.cma.gov.cn/2011xzt/essjqzt/jqhz/jqhz02/201312/t20131213_233952.html)，略作修改。


| 中文 | 中国气象局翻译 | 变量名 |
| --- | --- | --- |
| 立春 | the Beginning of Spring | SringBeginning |
| 雨水 | Rain Water | RainWater |
| 惊蛰 | the Waking of Insects | WakingInsects |
| 春分 | the Spring Equinox | SpringEquinox |
| 清明 | Pure Brightness | PureBrightness |
| 谷雨 | Grain Rain | GrainRain |
| 立夏 | the Beginning of Summer | SummerBeginning  |
| 小满 | Lesser Fullness of Grain | LesserFullness |
| 芒种 | Grain in Beard | GrainBeard |
| 夏至 | the Summer Solstice | SummerSolstice |
| 小暑 | Lesser Heat | LesserHeat |
| 大暑 | Greater Heat | GreaterHeat |
| 立秋 | the Beginning of Autumn | AutumnBeginning |
| 处暑 | the End of Heat | HeatEnd |
| 白露 | White Dew | WhiteDew |
| 秋分 | the Autumn Equinox | AutumnEquinox |
| 寒露 | Cold Dew | ColdDew |
| 霜降 | Frost's Descent | FrostDescent |
| 立冬 | the Beginning of Winter | WinterBeginning |
| 小雪 | Lesser Snow | LesserSnow |
| 大雪 | Greater Snow | GreaterSnow |
| 冬至 | the Winter Solstice | WinterSolstice |
| 小寒 | Lesser Cold | LesserCold |
| 大寒 | Greater Cold | GreaterCold |

再加上`ctc` 前缀，构成完整的名称。

CSS 的格式：`--ctc_节气__颜色名`

例：
```
--ctc_liqiu_qunqing
```

JS 的格式如：`CTC.节气.颜色名`

因为 JS 包含了 RGB 和 CYMK 两种解决方案，所以还需要再加上 `.GRB` 或者 `.CYMK` 来区分，如：

例：
```
CTC.liqiu.qunqing.RGB // #2E59A7
CTC.liqiu.qunqing.CYMK // [ 85, 65, 0, 0 ]
```

**浏览器如何支持 CYMK，请自行解决。**

# 安装

## 浏览器

想要直接使用 CSS ，直接导入相关的 CSS 文件即可。

```
 <link rel="localization" href="https://gitee.com/undeadway/chinese-traditional-color/raw/master/dist/index.css" />
```

要使用 JS 相关的功能，直接导入相关的 JS 文件即可。

```
<script src="https://gitee.com/undeadway/chinese-traditional-color/raw/master/dist/index.js">
```

## npm

1. npm 安装 chinese-traditional-color
```
npm install chinese-traditional-color
```

2. 导入相关代码

CSS：
```
import 'chinese-traditional-color/dist/index.css';
```

JS：

```
import CTC from "chinese-traditional-color";
window.CTC = CTC;
```

## 使用

### CSS
直接在 html 文件中使用相关名称引用即可

```
<html>
<div class="demo">abc</div>
<style>
.demo {
    color: var(--ctc_liqiu_qunqing);
}
</style>
</html>
```

### 在 JS 中引用

RGB
```
<script>
console.log(CTC.liqiu.qunqing.GRB);
</script>
```