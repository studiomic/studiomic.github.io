---
title: "CODE5"
date: "2025-06-08 19:00:00"
slug: 'cssGrid-5'
type: ""
---

## 親コンテナ・プロパティ

## Grid コンテナ

```css
display: grid;
```


## grid-template

```css
grid-template-columns:
```

```css
grid-template-rows:
```

```css
grid-template-areas:
  "head head head"
  ". main ."
  "foot foot foot";
```

ショートハンド：<br>
-columns:
-rows:
-areas:
3つのプロパティを省略記法で一括指定できる<br>
一般によく使う2つのプロパティ行・列を指定する場合


```css
grid-template: <grid-template-rows> / <grid-template-columns>;
```

```css
grid-template: repeat(3, 1fr); / repeat(4, 1fr);
```

<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(4, 1fr);gap: 1em;margin: 0 auto;width: 400px;height: 300px;">
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

::: details

### Grid Container

```css
.container {
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  gap: 1em;
  margin: 0 auto;
  width: 400px;
  height: 300px;
}

```
### SRC

```html
<div style="display: grid;grid-template: repeat(3, 1fr) / repeat(4, 1fr);gap: 1em;margin: 0 auto;width: 400px;height: 300px;">
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
```


:::
















## gap

column-gap

row-gap

gap






justify-items

align-items

place-items

justify-content

align-content

place-content

grid-auto-columns

grid-auto-rows

grid-auto-flow


        