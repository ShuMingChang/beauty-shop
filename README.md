# beauty-shop

在逛今年前端UI/UX設計趨勢時，發現有位國外的設計師，分享了他的設計作品[[UI 設計者的網址]](https://youtu.be/lmCH_v3cngc)，滿喜歡這種簡潔且富有活動力的頁面，便試著把它實做出來了。


主要用到的工具與心得
- Vue vuex vue-router vue-cli: 主要的頁面框架
- gsap: 專案中的動態呈現都是使用這個框架來實做，效能很好且比使用css動畫來得簡潔易懂得多，可以大幅減少動畫相關的開發
- better-scroll: 介面中有關滑動場景的實做都是使用這個套件來幫忙，可以在行動端很好的運行，框架協助的部分相對比較底層，可以在介面上自由發揮
- px to viewport: 將CSS中的長度單位px轉換為vw，可以有效地解決行動端畫面大小不宜致所導致的介面位移，但在實做的過程中有發現手機端的img teg不支援vw的長度單位，是美中不足得地方

## DEMO
[Demo網址](https://shumingchang.github.io/beauty-shop/#/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
