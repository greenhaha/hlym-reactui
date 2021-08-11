---
title: Divider 分割线
group:
  title: 布局组件
  path: /basis
nav:
  title: 组件库
  path: /components
---

# Divider 分割线

区隔内容的分割线。

## 何时使用
* 对不同章节的文本段落进行分割。
* 对行内文字/链接进行分割，例如表格的操作列。

## 代码演示
### 基础用法
<code src="./demo/basic.tsx"></code>

<code src="./demo/orientation.tsx"></code>

<code src="./demo/vertical.tsx"></code>

## API

| 属性     | 说明             | 类型                   | 默认值    |
| -------- | ---------------- | ---------------------- | --------- |
| className | 分割线样式类     | string                | -     |
| style  | 分割线样式对象 | CSSProperties        | -        |
| type     | 水平还是垂直类型     | `horizontal`  \| `vertical` | `horizontal` |
| orientation  | 分割线标题位置 | `left` \| `center` \| `right`  | `center `   |
| dashed  | 是否虚线 | boolean        | false        |
| plain | 文字是否显示为普通正文样式     | boolean                | false     |
