(() => {
  const TARGET_ORIGIN = "https://artmug.kr";
  const menu = document.querySelector(".artmug-menu");
  let lastHeight = 0;

  function sendToArtmug(section) {
    if (!window.parent || window.parent === window) {
      return;
    }

    window.parent.postMessage(
      {
        type: "artmug-custom-menu",
        action: "section",
        section,
      },
      TARGET_ORIGIN,
    );
  }

  function sendQna() {
    if (!window.parent || window.parent === window) {
      return;
    }

    window.parent.postMessage(
      {
        type: "artmug-custom-menu",
        action: "qna",
      },
      TARGET_ORIGIN,
    );
  }

  function sendHeight() {
    if (!window.parent || window.parent === window || !menu) {
      return;
    }

    const height = Math.ceil(menu.getBoundingClientRect().height);

    if (!Number.isFinite(height) || height <= 0 || height === lastHeight) {
      return;
    }

    lastHeight = height;

    window.parent.postMessage(
      {
        type: "resize",
        height,
      },
      TARGET_ORIGIN,
    );
  }

  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      sendToArtmug(button.dataset.section);
    });
  });

  document.querySelector("[data-action='qna']")?.addEventListener("click", sendQna);

  if (typeof ResizeObserver !== "undefined" && menu) {
    new ResizeObserver(sendHeight).observe(menu);
  }

  window.addEventListener("load", sendHeight);
  window.addEventListener("resize", sendHeight);

  if (document.fonts?.ready) {
    document.fonts.ready.then(sendHeight);
  }

  requestAnimationFrame(sendHeight);
})();
