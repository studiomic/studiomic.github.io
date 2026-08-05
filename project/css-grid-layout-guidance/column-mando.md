---
title: "アイテムなんて饅頭だ"
date: "2026-08-02 15:57:00"
slug: 'column-1'
type: "column"
---
<style>
strong {
	color: var(--green);
	font-size: 1.2em;
}
</style>

# アイテムなんて饅頭だ

私がCSS Gridに夢中な理由はいくつかある。


まず愚にもつかない理由が、World Wide Webに最初に書いてあげたものが、「Hello World！」ではなく、私の場合は「9Grid」だった。

<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(3, 1fr);gap: 1em;margin: 2em auto;width: 300px;height: 300px;">
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--blue);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--aka);"></div>
  <div style="border: 1px solid var(--vp-c-neutral);background: var(--vp-c-green-2);"></div>
</div>



インターネットなど碌にやったこともなく、9つのGIFアニメーションは同時に開始して、同時にフィニッシュすれば〔1枚の絵ができあがる〕という間違ったパズルの計算をしていた。

実際にレンタルサーバーを借りてアップロードしてみると、アナログ電話回線によるダイヤルアップ接続で、ブラウザは左上端からゆっくりと、右下端へと実に牛歩としかいえない鈍足でゆるゆると目視できる
**animation-delay?!**
を見せつけてくれた・・・。

9つのGIFアニメーションはそれなりに時間をかけてつくったので、一応、惜しかった。
あぁぁぁっ！と叫んだあと、「おら、MacromediaのFlashっての買ってくる！」と新宿へ走った。


<div style="margin-top: 4em;"></div>


という昔々の話はどうでもいいのだが、
**Grid**
という単語に妙な郷愁を憶えてしまう体質の上に。

そもそも50万以上した最初のノートPCを買った理由が「おら、カラー画面で表計算をしたい」だった表計算マニア。<br>
Lotus123<br>
Lotus Improv<br>
そして現在はMacのバンドル・Numbers

<div style="margin-top: 4em;"></div>

## Grid と表計算アプリは似てるよね

CSS Grid layout は可変つきの方眼紙、はじめて格子状のレイアウトを与えられたわけで、大事なのはトラック、セル、横何番目・縦何番目という、どちらかといえば表計算（Excel・Numbers）のような概念が先にあった方がいい。

と私は思うのだけど、見かけるチュートリアルは何故か
**item**,
**item**,と繰り返される。<br>
不思議だった。


## CSS Grid は板チョコレートがいちばん似てるよね

格子状ではあるが、正方形のものばかり並べるでなし、隣接した
**セル**
に跨って
**item**
をPutすることもできる。


手がベタベタしそうな想像を傍へ置けば、板チョコレートの割り振り方が<br>
**grid-template-columns:**
と
**grid-template-rows:**
だ。

**gap**
という溝までそっくり。

## だがしかし、菓子折りなのだ。

土産物の名菓は、たいてい一律サイズの菓子を12個入りだとか、20枚入りだとか、3×4列だとか単純なスペース割りの箱で出来ているが。


和菓子だ、銘菓だをデパ地下で選ぶとき、1種類のものだけを贈ろうとは思わず、バランスよくバリエーションを持たせて（悦んでもらいたい）とガラスケースにへばりついている。

そして、箱をも選ぶのだ。

羊羹と乾いた菓子と、厚いものも薄いものも誂えたようにきっちりと収められる素敵な紙の箱。


<div style="margin-top: 4em;"></div>


上質な菓子をより引き立たせて魅せる、箱職人が、私たちWebデザイナーの仕事だ。

<div style="margin-top: 4em;"></div>


やっと夢の箱、内側に置く仕切りを可変で誂えられる素敵仕様を手にしたというのに、なぜ饅頭の説明をしているのか。<br>
あぁそうか。MDNへ「グリッドレイアウトの基本概念」を読みにいくと、グリッドセルより先に「アイテムの配置」という見出しが目に入る。なるほど。<br>
そこで眼が覚めてしまった。

<div style="margin-top: 3em;"></div>

**デザイナー、設計者であるなら、その饅頭を机に戻して、定規を持て。**

<div style="margin-top: 3em;"></div>

そういう気分になったらしく、生来は横着でせっかちで「ありもの買い」の私が自分のためのチートシートをつくろうと思った。<br>

イラスト図解のない、<ruby>生<rt>き</rt></ruby>のソースのみで。<br>
[GRID: A simple visual cheatsheet for CSS Grid Layout](https://grid.malven.co/)


ほど端的で気の利いたものは無理だろうが、書くことで再学習したいという欲と、<br>
CSS Grid Layoutには時間を使っても惜しくないという確信もある。

<div style="margin-top: 4em;"></div>

Netscape NavigatorとInternet Explorerのブラウザ戦争の頃、Table Design、もしくはTable Layoutで散々Webサイトを制作し、長らくUI担当に明け暮れていた時期はfloat三昧、ついこの間まで便利この上ないと思っていたFlexboxはさすがにまだ憶えているが、floatの使い方など忘れてしまっている。

<div style="margin-top: 3em;"></div>

が、遥かな昔日にも「上質な菓子をより引き立たせて魅せる、箱職人が、私たちデザイナーの仕事だ」とばかりに、


<div style="margin-top: 13em;"></div>


初歩的なチュートリアルや図解つきアフィリエイトサイトの記事にもお世話になった。<br>
出だしはそれで良かったが、何処かでボタンのかけ違えのような違和感を感じはじめ、イラスト化された説明を実装しても、結果は違うけど？というお粗末な案件もあった。

<div style="margin-top: 3em;"></div>

最近はめっきり、じゃない、めっぽう良記事




<div style="margin-top: 14em;"></div>



「Twitter Bootstrap」


<div style="margin-top: 4em;"></div>





Boot


<div style="margin-top: 4em;"></div>






<br>
猫も杓子も使っているExcelの仕組みに準えて


<div style="margin-top: 4em;"></div>



1997年頃、ワールドワイドWebに




CSS Gridの初歩的なチュートリアルやガイドはたくさんあり、私も書きました。しかし、ほとんどのチュートリアルで十分な解説と実際の使用例が提供されていないため、minmax()関数に対する誤解があることに気がつきました。




