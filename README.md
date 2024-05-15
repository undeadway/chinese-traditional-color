# 说明

![](./doc/book-cover.jpg)


根据《中国传统色：故宫里的色彩美学》一书，将书中的色彩翻译成前端代码 。

## 关于变量名

![](./doc/CTC.png)

因为原书中所有颜色的命名非常文艺，不好翻译。  
所以所有颜色全部写成汉语拼音。

另，为了避免颜色名同音，加上了节气的命名空间（前缀）。  
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