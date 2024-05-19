# 1. 说明

![](./doc/book-cover.jpg)

根据《中国传统色：故宫里的色彩美学》一书，将书中的色彩翻译成前端代码 。

## 1.1. 关于颜色名

因为原书中所有颜色的命名非常文艺，不好翻译，至少我不认为我有能力去翻译。 

![](./doc/CTC.png)

所以所有颜色全部写成汉语拼音。

不过，节气名参照中国气象局的翻译 <sup id="a0"><a href="#f0">注0</a></sup>（略有修改）。

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

同时，为了避免颜色名同音，加上了节气的名称。   
再加上`CTC` 命名空间（前缀），构成完整的名称。  
CTC 即 **C**hinese **T**radtional **C**olor 的缩写。

CSS 的格式：`--CTC_节气_颜色名`

例：
```
--CTC_AutumnBeginning_qunqing
```

JS 的格式如：`CTC.节气.颜色名`

例：
```
CTC.AutumnBeginning.qunqing
```

### 1.1.1. 关于读音

因为这里的颜色名都是从书上抄下来的，具体怎么读我也不清楚。  
所以不管是否真有这个词，均以字面的汉字读音来命名变量名。

下面列举一些特殊情况。

#### 1.1.1.1. 多音字

如果颜色名中有多音字，读音选择参考如下

| 多音字 | 涉及颜色名 | 拼音 | 变量名 | 参考来源 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 曾 | 曾青 | zénɡ qīnɡ<br /> cénɡ qīnɡ  | zengqing |[https://www.zdic.net/hans/曾青](https://www.zdic.net/hans/曾青)<br />[https://www.zysj.com.cn/zhongyaocai/cengqing/index.html](https://www.zysj.com.cn/zhongyaocai/cengqing/index.html) | 因为从两个地方查出了两种读法，所以暂时以第一种作为变量名 |
| 壳 | 栗壳 | lì ké | like | | |
| 校 | 玄校 | xuán xiào  | xuanxiao |[https://www.zdic.net/hans/玄校](https://www.zdic.net/hans/玄校) | |

#### 1.1.1.2. 生僻字

因为采用了拼音，而原书中有一些生僻字，无法直接读湖，这里将我认为的生僻字和读音列出，供参考。  
如果颜色名有单独的词汇，则直接给出词汇读音。  
如果是原书从某些古诗词、文章中引用的，则直接使用字面读音。

| 生僻字 | 涉及颜色名 | 拼音 | 变量名 | 参考来源 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 缃 | 缃叶 | xiāng yè | xiangye | [https://www.zdic.net/hans/缃叶](https://www.zdic.net/hans/缃叶) | |
| 缊、韨 | 缊韨 | wēn fú | wenfu | [https://www.zdic.net/hans/缊韨](https://www.zdic.net/hans/缊韨) | |
| 綪、茷 | 綪茷 | qiàn fá | qianfa | [https://www.zdic.net/hans/綪茷](https://www.zdic.net/hans/綪茷) | |
| 籥 | 夏籥 | xià yuè | xiayue | [https://www.zdic.net/hans/夏籥](https://www.zdic.net/hans/夏籥) | |
| 雘 | 丹雘<br />青雘 | dān wò<br />qīng wò | danwo<br />qingwo | [https://www.zdic.net/hans/丹雘](https://www.zdic.net/hans/丹雘)<br />[https://www.zdic.net/hans/青雘](https://www.zdic.net/hans/青雘) | |
| 緺 | 青緺 | qīng guā | qinggua | [https://www.zdic.net/hans/青緺](https://www.zdic.net/hans/青緺) | |
| 赪 | 赪紫<br />赪霞<br />赪尾 | chēng zǐ<br />chēng xiá<br />chēng wěi | chengzi<br />chengxia<br />chengwei | [https://www.zdic.net/hans/赪](https://www.zdic.net/hans/赪)<br />[https://www.zdic.net/hans/赪霞](https://www.zdic.net/hans/赪霞)<br />[https://www.zdic.net/hans/赪尾](https://www.zdic.net/hans/赪尾) | 未找到“赪紫”单独成词的的例子 |
| 茈 | 茈藐 | zǐ miǎo | zimiao | [https://www.zdic.net/hans/茈](https://www.zdic.net/hans/茈) | 未找到“茈藐”单独成词的的例子 |
| 紶 | 紫紶 | zǐ qū | ziqu | [https://www.zdic.net/hans/紶](https://www.zdic.net/hans/紶) | 未找到“紫紶”单独成词的的例子 |
| 緅、絺 | 緅絺 | zōu chī | zouchi | [https://www.zdic.net/hans/緅](https://www.zdic.net/hans/緅)<br />[https://www.zdic.net/hans/絺](https://www.zdic.net/hans/絺) |未找到“緅絺”单独成词的的例子 |
| 罽 | 丹罽 | dān jì | danji | [https://www.zdic.net/hans/罽](https://www.zdic.net/hans/罽) | 未找到“丹罽”单独成词的的例子 |
| 芰 | 芰荷 | jì hé | jihe | [https://www.zdic.net/hans/芰荷](https://www.zdic.net/hans/芰荷) | |
| 埒 | 金埒 | jīn liè | jinlie | [https://www.zdic.net/hans/金埒](https://www.zdic.net/hans/金埒) |
| 䒌、靘 | 䒌靘 | mìng qìng | mingqing | [https://www.zdic.net/hans/䒌](https://www.zdic.net/hans/䒌)<br />[https://www.zdic.net/hans/靘](https://www.zdic.net/hans/靘) | 未找到“䒌靘”单独成词的的例 |
| 璆 | 璆琳 | qiú lín | qiulin | [https://www.zdic.net/hans/璆琳](https://www.zdic.net/hans/璆琳) | |
| 赩 | 赩炽 | xì chì | xichi | [https://www.zdic.net/hans/赩炽](https://www.zdic.net/hans/赩炽) | |
| 繎 | 大繎 | dà rán | danran | [https://www.zdic.net/hans/繎](https://www.zdic.net/hans/繎) | 未找到“大繎”单独成词的的例子 |
| 頩 | 玉頩 | yù pīng | yuping | [https://www.zdic.net/hans/頩](https://www.zdic.net/hans/頩) | 未找到“玉頩”单独成词的的例子 |
| 骍 | 骍刚 | xīng gāng | xinggang | [https://www.zdic.net/hans/骍刚](https://www.zdic.net/hans/骍刚) | |
| 荩、箧 | 荩箧 | jìn qiè | jinqie | [https://www.zdic.net/hans/荩箧](https://www.zdic.net/hans/荩箧) |
| 秫 | 丹秫 | dān shú | danshu | [https://www.zdic.net/hans/丹秫](https://www.zdic.net/hans/丹秫) | |
| 藘 | 茹藘 | rú lǘ | rulyu | [https://www.zdic.net/hans/茹藘](https://www.zdic.net/hans/茹藘) | |
| 饧 | 沙饧 | shā xíng | shaxing | [https://www.zdic.net/hans/沙饧](https://www.zdic.net/hans/沙饧) | |
| 麹 | 麹尘 | qū chén | quchen | [https://www.zdic.net/hans/麴塵](https://www.zdic.net/hans/麴塵) | |
| 缣 | 缣缃 | jiān xiāng | jianxiang | [https://www.zdic.net/hans/缣缃](https://www.zdic.net/hans/缣缃) | |
| 菼 | 葭菼 | jiā tǎn | jiatan | [https://www.zdic.net/hans/葭菼](https://www.zdic.net/hans/葭菼) | |
| 醽、醁 | 醽醁 | líng lù | linglu | [https://www.zdic.net/hans/醽醁](https://www.zdic.net/hans/醽醁) | |
| 翕 | 翕赩 | xī xì | xixi | [https://www.zdic.net/hans/翕赩](https://www.zdic.net/hans/翕赩) | |
| 韎、韐 | 韎韐 |  mèi gé | meige | [https://www.zdic.net/hans/韎韐](https://www.zdic.net/hans/韎韐) | |
| 繱、犗 | 繱犗 | cōng jiè | congjie | [https://www.zdic.net/hans/繱](https://www.zdic.net/hans/繱)<br />[https://www.zdic.net/hans/犗](https://www.zdic.net/hans/犗) | 未找到“赪紫”单独成词的的例子<br />未找到“赪紫”单独成词的的例子 |
| 黪 | 黪紫<br />黑黪 | cǎn zǐ<br />hēi cǎn | canzi<br />heican | [https://www.zdic.net/hans/黪](https://www.zdic.net/hans/黪) | 未找到“赪紫”单独成词的的例子<br />未找到“黑黪”单独成词的的例子 |
| 縓 | 縓缘 | quàn yuán | quanyuan | [https://www.zdic.net/hans/縓缘](https://www.zdic.net/hans/縓缘) | |
| 鞓 | 鞓红 | tīng hóng | tinghong | [https://www.zdic.net/hans/鞓红](https://www.zdic.net/hans/鞓红) | |
| 綟 | 綟绶 | lì shòu | lishou | [https://www.zdic.net/hans/綟绶](https://www.zdic.net/hans/綟绶) | |
| 䵂 | 红䵂 | hóng zhí | hongzhi | [https://www.zdic.net/hans/䵂](https://www.zdic.net/hans/䵂) | 未找到“红䵂”单独成词的的例子 |
| 驖 | 驖骊 | tiě lí | tieli | [https://www.zdic.net/hans/驖](https://www.zdic.net/hans/驖) | 未找到“驖骊”单独成词的的例子 |
| 䌦 | 䌦色 | dǎo sè | daose | [https://www.zdic.net/hans/䌦](https://www.zdic.net/hans/䌦) | |

#### 1.1.1.3. ü

因为 **ü** 不好输入，所以采用国家标准 <sup id="a1"><a href="#f1">注1</a></sup>，采用 **yu** 替代 **ü** 。
即，如“绿”的 **lü** 统一替换为 **lyu** 。

**但次用法仅限于露（lu）、绿（lu）等无法区分的情况，琚（ju）等不会产生歧义的字则不做替换。**

# 2. 安装

## 2.1. 浏览器

想要直接使用 CSS ，直接导入相关的 CSS 文件即可。

```
 <link rel="localization" href="https://gitee.com/undeadway/chinese-traditional-color/raw/master/dist/index.css" />
```

要使用 JS 相关的功能，直接导入相关的 JS 文件即可。

```
<script src="https://gitee.com/undeadway/chinese-traditional-color/raw/master/dist/index.js">
```

## 2.2. npm

1、npm 安装 chinese-traditional-color
```
npm install chinese-traditional-color
```

2、导入相关代码

CSS：
```
import 'chinese-traditional-color/dist/index.css';
```

JS：

```
import CTC from "chinese-traditional-color";
window.CTC = CTC;
```

# 3. 使用

## 3.1. CSS

直接在 html 文件中使用相关名称引用即可。

```
<html>
<div class="demo">abc</div>
<style>
.demo {
	color: var(--CTC_AutumnBeginning_qunqing);
	background:var(--CTC_SringBeginning_huangbaiyou);
}
</style>
</html>
```

### 3.1.1. CMYK

CTC 通过 `device-cmyk` 来支持 CMYK <sup id="a2"><a href="#f2">注2</a></sup>。  

**所以，在使用 CMYK 模式前，请确认您的系统是否支持 `device-cmyk` 。**

CMYK 则是在普通变量名后面，加入 `-cmyk` 后缀即可。
如：
```
	color: var(--CTC_AutumnBeginning_qunqing-cmyk);
```

## 3.2. JS

所有对象都挂载在 CTC 对象下。  
需要通过 CTC 来引用。

### 3.2.1. 全局对象

#### 3.2.1.1. 说明

全局对象，即 CTC 。

可以直接在代码的任意位置调用 `CTC` 来使用。  
如：

```
<html>
<div id="demo">abc</div>
<script>
dont demo = document.getElementById("demo");
const salorTerm = CTC.getSolarTermByName("立秋");
const color = salorTerm.getColorByName("群青");
const bgColor = CTC.getColorByName("黄白游");
demo.css({
	"color": color.getHexRgb(),
	"background"： bgColor.getHexRgb()
});
</script>
</html>
```

#### 3.2.1.2. API

| API 名称 | 用处 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getColorByName | 获得名称获得颜色对象 | 颜色的中文名（例：群青）| 颜色的对象实例<br />如果找不到，则返回 null |
| getSolarTerm | 通过节气的编号或者节气的名称获得某个节气的对象 | 参数有以下2种形式：<br/>1. 编号，从 0（立春） 开始<br />2. 名称（例：立春） | 节气名所对应对象的实例<br />如果找不到，则返回 null |
| getSolarTermList | 返回所有节气的名称列表 | 无 | 所有节气名的数组，顺序为：立春、雨水、惊蛰... |

使用方式：

```
const salorTerm = CTC.getSolarTermByName("立秋");
```

#### 3.2.2. 节气对象

节气对象是上面的代码中获得到的 `solarTerm` 的对象实例。

##### 3.2.2.1. API

| API 名称 | 作用 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getName | 获得当前节气的名称 | 无 | 当前节气的名称 |
| getColor | 获得名称获得颜色对象| 参数有以下2种形式：<br/>1. 编号，从 0（当前节气的第一个颜色） 开始<br />2. 名称（例：群青） | 颜色的对象实例<br />如果找不到，则返回 null |
| getColorList | 获得当前节气下的所有颜色的列表 | 无 | 颜色的数组<br />例：黄白游的实例、松花的实例、缃叶的实例... |

使用方式：

```
const color = solrTerm.getColorByName("群青");
```

#### 3.2.3. 颜色对象

颜色对象可以分别从 全局对象 CTC 和 节气对象 solarTerm 中获得。

获得方式如下：

```
const color1 = CTC.getColorByName("群青"); // 从全局全局对象中获得
const color2 = salorTerm.getColorByName("群青"); // 从节气对象中获得
```

##### 3.2.3.1. API

| API 名称 | 作用 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getName | 获得颜色的名称 | 无 | 颜色的名称（例：群青） |
| getRgb | 获得 RGB 值 | 无 | { r: 46, g: 89, b: 167 } |
| getCmyk | 获得 CMYK 值 | 无 | { c: 85, y: 65, m: 0, k: 0 } |
| getHexRgb | 获得 16进制数形式的 RGB 值 | 无 | #2E59A7 |
| getBrightness | 计算颜色的明度值 | 无 | 通过 RGB 明度计算公式 <sup id="a3"><a href="#f3">注3</a></sup> 来计算颜色的明度值 |

# 参考资料

<span id="f0"><a href="#a0">注0</a></span>：[24节气中英文对照](https://www.cma.gov.cn/2011xzt/essjqzt/jqhz/jqhz02/201312/t20131213_233952.html)

<span id="f1"><a href="#a1">注1</a></span>：[中国人名汉语拼音字母拼写规则](http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/201001/t20100115_75609.html)<br />　　 [“吕”字有了正式英文名“LYU”](http://edu.sina.com.cn/en/2012-10-11/094569768.shtml)

<span id="f2"><a href="#a2">注2</a></span>：[https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/device-cmyk](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/device-cmyk)


<span id="f3"><a href="#a3">注3</a></span>：![](./doc/Brightness_Calculation_Formula.svg)
