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

## 追加行・高さ指定トラック

```CSS
.container {
	grid-auto-rows: minmax(30px, auto);
}
```
<div style="margin-top: 4em;"></div>

この3つのプロパティはまとめて覚えておくとわかりやすい。<br>
Grid Layoutは決まったセルの位置にアイテムを配置するのに適しているが、Flexboxのようなアイテム流し込みにも使える。


特に相対値やminmax()との相性がよく、中に置く要素：itemやelementにゴタゴタとサイズを持たせなくても「線」がひける


```CSS
grid-template-columns:
grid-template-rows:
grid-auto-rows:
```

<div style="margin-top: 4em;"></div>


<span class="red">grid-template-(*)</span>
は、いわゆる明示的なテンプレート（型書式）であり、デザインカンプで設計された幅や高さの比率をトレースする再現力に優れている。

だからこそLayout「何をどこに、どのように配置するか」の名を冠するわけだが。

***

具体的に考えてみよう。
HEROコンテンツは100％フルサイズ、<br>
その下に横3分割のBOXエリアがあり、<br>
画面を2分割する広いエリアがあり、<br>
最後に4分割する

これって全体を12frという分母で考えると、構成しやすいですよね。<br>

<span class="red">grid-template-(*)</span>
は、設計図起こしの方眼を引く定規で、<br>
無駄無駄無駄無駄ーッ‼︎ な
&lt;div&gt;の入れ子やmargin設定をどれだけ省けるか。

んまぁデトックスに最適⭐️

## 追加列・幅指定トラック

```CSS
grid-auto-columns:
```

ついでに暗黙的な要素の追加に、横幅を指定をしておく、もう一つの
<span class="red">grid-auto-(*)</span>

<span class="red">grid-template-columns</span>
プロパティのように必要なセルの数を事前に把握できない場合、初期値はautoで列方向へトラックを生成するが、追加されるトラックの長さを指定できる。

```CSS
grid-auto-columns: 25svw;
```

<span class="red">grid-template-(*)</span>
テンプレートと、

<span class="red">grid-auto-(*)</span>
任意の値指定

明示的・暗黙的、この区別がつきにくい場合は、いつもながら<span class="red">コリスさん</span>の翻訳記事がとてもわかりやすい。

<div style="margin-top: 2em;"></div>

::: tip
[CSS Gridでレイアウトする時はこのプロパティが重要！「grid-template-* 」と「grid-auto-*」の使い方を解説](https://coliss.com/articles/build-websites/operation/css/difference-between-grid-template-and-grid-auto.html)
:::

<div style="margin-top: 2em;"></div>


ずばり要点を引用させていただくと

>grid-template-*
>プロパティはセルの位置とサイズの両方を定義するために使用されますが、
>grid-auto-*
>プロパティはセルのサイズのみを定義するために使用されます。

<div style="margin-top: 2em;"></div>

<span class="red">grid-auto-rows:</span> , 
<span class="red">grid-auto-columns:</span>
ともに、テンプレート（-template）でトラックサイズを定義されたセル数以上のアイテムが置かれたときに、自動生成されるトラックのサイズ。<br>

***

### example - 1

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

このGridコンテナの中には
&lt;div&gt;が9つある。<br>
淡グリーン・ブルー・レッドの3行までが
明示的な
<span class="red">grid-template-rows</span>

下2行のグリーンは、暗黙的に追加された
<span class="red">grid-auto-rows:</span>

***

### example - 2

HEROコンテンツは100％フルサイズ、
その下に横3分割のBOXエリアがあり、
画面を2分割する広いエリアがあり、
最後に4分割する、と勢いで書いたのを実装してみる。

<div style="margin-top: 2em;"></div>

```CSS
.container {
	display: grid;
	grid-template:150px 90px 120px 60px / repeat(12, 1fr);
  gap:.5em;
}
```

<div style="display:grid;grid-template:150px 90px 120px 60px / repeat(12, 1fr);gap:.5em;">
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--green);grid-column: 1/13;grid-row: 1/2;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);grid-column: 1/5;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);grid-column: 5/9;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);grid-column: 9/13;grid-row: 2/3;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);grid-column: 1/7;grid-row: 3/4;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);grid-column: 7/13;grid-row: 3/4;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);grid-column: 1/4;grid-row: 4/5;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);grid-column: 4/7;grid-row: 4/5;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);grid-column: 7/10;grid-row: 4/5;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);grid-column: 10/13;grid-row: 4/5;"></div>
</div>


## grid-column: , grid-row: , grid-area:

セル数=アイテム数でないときに書くべき3つの子プロパティ<br>
いずれも位置と寸法を指定するもの



上の例でいくと4行×12列のどの番地にアイテムを配置するか、の書き方がショートハンドも含めていくつもある。

```CSS
{	grid-template:150px 90px 120px 60px / repeat(12, 1fr); }
```

```CSS
grid-column: 1/13;  OR
grid-column: 1/-1;

grid-row: 1/2;  OR
grid-row: 1 / span 1;

grid-area: 1 / 2 / 1 / 13; 
grid-area: <grid-row> / <grid-column>
```



```css
.container {
	display: grid;
	grid-template-areas:'aaa bbb ccc ddd';
	grid-auto-columns: 150px;
}
```



**grid-template:**



<div style="display:grid;grid-template:60px 150px 90px 120px  / repeat(12, 1fr);gap:.5em;">
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);"></div>
</div>






### example - 3


<div style="margin-top: 4em;"></div>









grid-auto-rows: minmax(30px, auto);












<div style="margin-top: 4em;"></div>

自動生成されるセルは30px高さ、アイテムが30pxに収まらない高さをもつと、minmaxのautoが生きて行高は伸びる
文字通り「テンプレート」と「自動」
