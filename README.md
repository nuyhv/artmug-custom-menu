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
  height="410"
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

`height="410"`은 로딩 전 임시 높이입니다. 메뉴가 실제 콘텐츠 높이를 측정해 부모 페이지로
전달하므로, 메뉴 항목이 늘어나도 아트머그 본문에 붙인 수신 코드가 iframe 높이를 자동으로
조정합니다. 아트머그가 iframe을 `#custom_code` 안에 `display:none`으로 넣는 경우에도
최신 수신 코드가 해당 래퍼를 자동으로 표시합니다.

## 아트머그 본문 앵커

메뉴의 `data-section` 값과 동일한 `id`를 각 섹션을 감싸는 기존 요소에 붙입니다.
빈 요소를 새로 만들기보다 실제 섹션 컨테이너에 붙이는 편이 안전합니다.

```html
<div id="process">
  <h2>진행 과정</h2>
  <!-- 진행 과정 내용 -->
</div>

<div id="type">
  <h2>타입 안내</h2>
  <!-- 타입 안내 내용 -->
</div>

<div id="caution">
  <h2>주의사항</h2>
  <!-- 주의사항 내용 -->
</div>

<div id="collab">
  <h2>협업 작가</h2>
  <!-- 협업 작가 내용 -->
</div>

<div id="sample">
  <h2>일러스트 샘플</h2>
  <!-- 샘플 이미지 -->
</div>

<div id="apply">
  <h2>작업 신청서</h2>
  <!-- 신청서 iframe -->
</div>
```

최상단에는 다음처럼 지정합니다.

```html
<div id="top">
  <!-- 본문 시작 -->
</div>
```

`id`가 저장 후 유지되지 않는 환경에서는 기존 방식인 `<a name="process"></a>`도
수신 코드가 보조적으로 지원합니다.

## 아트머그 본문에서 한 번 추가할 수신 코드

`artmug-receiver.html`의 최신 내용을 본문 HTML 마지막에 넣으면 됩니다.
이전 버전의 수신 코드를 이미 붙였다면 반드시 교체해야 `id` 앵커와 자동 높이가 적용됩니다.

주의:
- `script.js`의 `TARGET_ORIGIN`은 실제 아트머그 페이지의 부모 origin에 맞춰야 합니다.
- `artmug-receiver.html`의 `ALLOWED_ORIGINS`는 GitHub Pages 실제 주소로 바꿔주세요.
