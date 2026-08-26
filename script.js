(() => {
  const TARGET_ORIGIN = "https://artmug.kr";

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

  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      sendToArtmug(button.dataset.section);
    });
  });

  document.querySelector("[data-action='qna']")?.addEventListener("click", sendQna);
})();
