# 说明

![](./doc/book-cover.jpg)

根据《中国传统色：故宫里的色彩美学》一书，将书中的色彩翻译成前端代码 。

## 关于变量名

因为原书中所有颜色的命名非常文艺，不好翻译，至少我不认为我有能力去翻译。 

![](./doc/CTC.png)

所以所有颜色全部写成汉语拼音。

### 多音字

𬘬

不过，节气名参照中国气象局的 [二十四节气翻译](https://www.cma.gov.cn/2011xzt/essjqzt/jqhz/jqhz02/201312/t20131213_233952.html) （略有修改）。

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

同时，为了避免颜色名同音，加上了节气的命名空间（前缀）。   
再加上`ctc` 前缀，构成完整的名称。

CSS 的格式：`--ctc_节气__颜色名`

例：
```
--ctc_AutumnBeginning_qunqing
```

JS 的格式如：`CTC.节气.颜色名`

例：
```
CTC.AutumnBeginning.qunqing
```

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
	color: var(--ctc_AutumnBeginning_qunqing);
	background:var(--ctc_SringBeginning_huangbaiyou);
}
</style>
</html>
```

#### CMYK

CTC 通过 `device-cmyk` 来支持 CMYK 。  
关于 `device-cmyk` ，请参考：[https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/device-cmyk](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/device-cmyk) 。  
**所以，在使用 CMYK 模式前，请确认您的系统是否支持 `device-cmyk` 。**

CMYK 则是在普通变量名后面，加入 `-cmyk` 后缀即可。
如：
```
	color: var(--ctc_AutumnBeginning_qunqing-cmyk);
```

### 在 JS 中使用 CTC

#### 全局 API

可以直接在 CTC 命名空间下使用，如：

```
const color = CTC.getColorByName("群青");
```

| API 名称 | 参数 | 返回值 |
| --- | --- | --- |
| getColorByName | 参数可以是中文名或英文名<br/>1. 中文名（例：群青）<br/>2. 英语名（例：qunqing） | 颜色的对象 |
| getColorMapBySolarTerm | 参数有以下三种形式：<br/>1. 编号，从 0（立春） 开始<br />2. 中文名（例：立秋）<br />3. 英文名（例：AutumnBeginning） | 颜色对象的对象 |
| getAllColorCnNameList | 无 | 所有颜色的中文名数组 |
| getAllSolarTermCnNameList | 无 | 所有节气中文名的数组，顺序为：立春、雨水、惊蛰... |
| getAllSolarTermNameList | 无 | 所有节气名称（命名空间的名称）的数组，顺序为：立春、雨水、惊蛰... |
| getColorNameByCnName | 中文名（例：群青） | 英文名（例：qunqing） |
| getColorCnNameByName | 英文名（例：qunqing） | 中文名（例：群青） |

#### 颜色对象 API

首先获得颜色对象：

```
const obj = CTC.getColorByCnName("群青");
```

在通过 API 获得相关结果

| API 名称 | 参数 | 返回值 |
| --- | --- | --- |
| getRgb | 无 | { r: 46, g: 89, b: 167 } |
| getCmyk | 无 | { c: 85, y: 65, m: 0, k: 0 } |
| getHexRgb | 无 | #2E59A7 |