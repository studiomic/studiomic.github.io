---
title: "CSS Grid の基本"
date: "2026-08-02 15:57:00"
slug: 'css-grid-1'
type: ""
---

# CSS Grid の基本

## CSS Grid の定義

```CSS
.container {
	display: grid;
}
```

## トラックリストを定義する

```CSS
.container {
	grid-template-columns: 50% 50%;
	grid-template-rows: 50svh 30svh 20svh;
}
```

## 追加行・高さ指定トラック定義

```CSS
.container {
	grid-auto-rows: minmax(30px, auto);
}
```
<div style="margin-top: 4em;"></div>

この3つのプロパティはまとめて覚えておくとわかりやすい。<br>
Grid Layoutは決まったセルの位置にアイテムを配置するのに適しているが、Flexboxのようなアイテム流し込みにも使える。


```CSS
grid-template-columns:
grid-template-rows:
grid-auto-rows:
```

<div style="margin-top: 4em;"></div>

<b class="red">grid-template-(*)</b>
は、いわゆる<b>明示的</b>なテンプレート（型書式）であり、デザインカンプで設計された幅や高さの比率をトレースする再現力に優れている。


だからこそLayout「何をどこに、どのように配置するか」の名を冠するわけだが。

<hr>

具体的に考えてみよう。
HEROコンテンツは100％フルサイズ、<br>
その下に横3分割のBOXエリアがあり、<br>
画面を2分割する広いエリアがあり、<br>
最後に4分割する

これって全体を12frという分母で考えると、構成しやすいですよね。<br>
<b class="red">grid-template-(*)</b>
は、設計図起こしの方眼を引く定規で、

無駄無駄無駄無駄ーッ‼︎ な
&lt;div&gt;の入れ子やmargin設定をどれだけ省けるか。


<div style="margin-bottom: 4em;"></div>



ついでに5分割や複雑な構成が入ってくるんですが・・・という場合は

<strong>grid-template-(#)</strong>







## 追加列・幅指定トラック定義

```CSS
grid-auto-columns:
```

ついでに暗黙的な

<div style="margin-bottom: 4em;"></div>


全体を設計して、明示的

```CSS
	grid-template-columns:
	grid-template-rows:
	
```

grid-auto-rows:




<div style="margin-bottom: 4em;"></div>

### example

```CSS
.container {
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 150px 90px 60px;
	grid-auto-rows: minmax(30px, auto);
	gap: 1em;
}
```

<div style="display: grid;grid-template-columns: 50% 50%;grid-template-rows: 150px 90px 60px;grid-auto-rows: minmax(30px, auto);gap:1em">
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--green);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--green);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);"></div>
</div>