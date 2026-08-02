---
title: "CSS Grid "
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


