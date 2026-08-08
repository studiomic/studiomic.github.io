---
title: "FlexboxとGridの違いをわかりやすく解説"
date: "2026-08-08 23:57:00"
slug: 'column-2'
type: "column"
---
<style>
strong {
	color: var(--green);
	font-size: 1.2em;
}
</style>

# FlexboxとGridの違いをわかりやすく解説

名は体を表す、その名称と意味を考えるとわかりやすいのだが。


Flexboxは**BOX**、CSS Grid Layoutは**Layout**、この違いは市販の家具と、居室に造り付けの棚ほどの違いがある。

<div style="margin-top: 2em;"></div>

どちらも確かにitem、ものを入れるための「収納」だが、Flexboxはそれ自体もアイテムである2段、3段、扉つきのカラーボックスのようなもので、BOXを並べていくことでしか成立しない。

<div style="margin-top: 2em;"></div>

***

<div style="display:flex;">
<h3>H3-Title</h3><p>paragraph-Text</p>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--green);padding: 1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--green);padding: 1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);padding: 1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);padding: 1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);padding:1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);padding: 1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);padding: 1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);padding: 1em;"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);padding: 1em;"></div>
</div>

***

きれいにレイアウトされたFlexboxばかり見ていて忘れているが、基本は&lt;h3&gt;も&lt;p&gt;も&lt;div&gt;もとにかく横並びに「部屋のスペース」がある限り流し込んでいき、「部屋の角」がきたら、段を変えて積んでいく。

そういうと引越しのダンボール箱搬入作業みたいだが、技術や仕様は通り過ぎてみるとわかる、これはfloatの進化系だ。我々は各自サイズを有するBOXを効率よく美しく並べたかった。

<div style="margin-top: 2em;"></div>

ふ。急に愚痴を言いたくなってきた。

CR+LF、改行コードと呼ばれるこの2つの略字は、キャリッジリターンは行末から行頭へ、ラインフィードは紙を1行分上へ回してタイプライターのキーヘッドが当たる位置を変える、レバーやダイヤル操作に由来しているが、

floatは、マジでキャリッジリターンもまともに出来ないヌケサクだったな。あの効率の悪さ。悪夢だった。

clear: both;
clear: left;
clear: right;

こういう無駄な足掻きをせずに、縦なら縦、横なら横へと、要素を整列させてくれるFlexboxはとにかく便利で軽快だ。

<div style="margin-top: 3em;"></div>

ただし決まったスペースの部屋に、良さげな配分になりそうな家具をサイズを基準に選んで置いていくようなものだ。itemありき。

***

対して造り付けの棚は、中身がなくても棚板や仕切りは収納するものを想定してサイズを決める。一律の高さにしなくて良いし、幅が狭い列があってもいい。またその中にsubgridという別組の仕切りを置けるのも強みだが、それはさておき、オーダーメイドで設計した棚の使い心地が、CSS Grid Layout では最初から約束されている。

<div style="margin-top: 3em;"></div>

オーダーメイドと同じく学習コストは高めかもしれない。ショートハンドがありすぎるのも、慣れるまではむしろ混乱の元なのでは、という気もする。<br>
チュートリアルが本質の話よりも、書き方先行で進んでしまう残念さもある。



