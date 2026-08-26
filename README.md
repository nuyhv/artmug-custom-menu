# Artmug Custom Menu (GitHub Pages)

## 파일
- `index.html`: 메뉴 구조
- `style.css`: 메뉴 디자인
- `script.js`: 부모 아트머그 페이지로 `postMessage` 전송

## 아트머그 본문에 넣을 iframe

```html
<iframe
  src="https://YOUR-ID.github.io/YOUR-REPO/"
  width="200"
  height="340"
  frameborder="0"
  scrolling="no"
  style="
    position:fixed;
    right:40px;
    top:50%;
    transform:translateY(-50%);
    z-index:1000;
    border:0;
    background:transparent;
  "
></iframe>
```

## 아트머그 본문에서 한 번 추가할 수신 코드

`artmug-receiver.html`의 내용을 본문 HTML 마지막에 넣으면 됩니다.

주의:
- `script.js`의 `TARGET_ORIGIN`은 실제 아트머그 페이지의 부모 origin에 맞춰야 합니다.
- `artmug-receiver.html`의 `ALLOWED_ORIGINS`는 GitHub Pages 실제 주소로 바꿔주세요.
