---
title: "auto-fit / auto-fill"
date: "2026-08-05 18:17:00"
end : "2026-08-06 02:57:00"
slug: 'css-grid-2'
---

# auto-fill と auto-fit

直訳は（空白を）埋める、充填するなどの **fill** と フィットする **fit**<br>
実際のソースで比較してみましょう。

おそらく多くのPC、Macのブラウズ幅で結果は同じに見える例が2つ続きます。


## auto-fill

```css
.container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(5svw, 1fr));
	grid-auto-rows: minmax(2em, auto);
	gap: 1em;
}
```

<div style="margin-top: 2em;"></div>


<div style="display:grid;grid-template-columns: repeat(auto-fill, minmax(5svw, 1fr));grid-auto-rows:2em;gap:1em">
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


## auto-fit

```css
.container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(5svw, 1fr));
	grid-auto-rows: minmax(2em, auto);
	gap: 1em;
}
```

<div style="display:grid;grid-template-columns: repeat(auto-fit, minmax(5svw, 1fr));grid-auto-rows:2em;gap:1em">
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

<div style="margin-top: 2em;"></div>

## 同じに見える理屈

は、**minmax()**のminに5svwと画面サイズ広がるほど値が広がる単位を指定しているためで、試しにウルトラワイドモニターでW:2560pxブラウズすると、なんと9つのセルが<br>
4列・4列・1列 = 計3行に表示された。

## 違いのわかりやすい例


### auto-fit

```css
.container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(1svw, 1fr));
	grid-auto-rows: minmax(2em, auto);
	gap: 1em;
}
```


<div style="display:grid;grid-template-columns: repeat(auto-fit, minmax(1svw, 1fr));grid-auto-rows:2em;gap:1em">
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

<div style="margin-top: 2em;"></div>


### auto-fill

```css
.container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(1svw, 1fr));
	grid-auto-rows: minmax(2em, auto);
	gap: 1em;
}
```

<div style="display:grid;grid-template-columns: repeat(auto-fill, minmax(1svw, 1fr));grid-auto-rows:2em;gap:1em">
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

<div style="margin-top: 2em;"></div>

トラックサイズを
**minmax(1svw, 1fr)**
に変更したので、セル数9=9svw + gap数8=8em と必ず1行に入りきる例になり


auto-fitでは最大値：1frが活かされ全幅にフィットするまでセル列サイズが伸び、auto-fillでは最小値：1svwのまま、アイテムの数だけ埋められていく形になりました。

<hr>

直訳は（空白を）埋める、充填するなどの **fill**<br>
ラテン語系は具体例を想像しないと身につかないですねぇ・・・<br>
今回は（あぁ壁にレンガを張っていくイメージか、たしかに埋めてく）と感じてましたが、この場合、Fill in your name.（空欄に記入してください）に近いのかな。

<div style="margin-top: 2em;"></div>


## ユースケース

やたらと「カードレイアウト」で喩えられるGrid Layoutだが、サンプルを書きながら
**auto-fit**
は提携先の企業やサービスのバナーなど横並びにずらりと並べ、最小・最大サイズを維持しつつ折り返しあり、なレイアウトには適していると感じました。

「カードレイアウト」にも一見
**auto-fit**
が合っていそうだけど、ある意味リキッドデザインほどに可変式になってくるので、全体から受ける印象を変えない意味では、左右余白のガーターを1frでとって、Content部分はあまり大きさに変化なくした方が無難な気も。

