/**
 * iframe→親ウィンドウ 高さ自動通知
 * Wix Studio HtmlComponent 用 postMessage パターン
 *
 * 送信形式: { type: 'iframe-resize', height: <px> }
 * 親(Velo)側: $w('HtmlComponent').onMessage(e => $w(...).height = e.data.height)
 */
(function () {
  var lastH = 0;

  function measure() {
    return Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      document.documentElement.offsetHeight,
      document.body.offsetHeight
    );
  }

  function notify(force) {
    var h = measure();
    if (force || Math.abs(h - lastH) > 2) {
      lastH = h;
      try {
        parent.postMessage({ type: 'iframe-resize', height: h }, '*');
      } catch (e) {}
    }
  }

  // 初回 & 各種ライフサイクル
  if (document.readyState !== 'loading') {
    notify(true);
  } else {
    document.addEventListener('DOMContentLoaded', function () { notify(true); });
  }
  window.addEventListener('load', function () { notify(true); });
  window.addEventListener('resize', function () { notify(false); });

  // フォント・画像の遅延ロード対策
  setTimeout(function () { notify(true); }, 200);
  setTimeout(function () { notify(true); }, 800);
  setTimeout(function () { notify(true); }, 2000);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { notify(true); });
  }

  // 動的なコンテンツ変化(画像load後など)
  if (window.ResizeObserver) {
    try {
      var ro = new ResizeObserver(function () { notify(false); });
      ro.observe(document.documentElement);
    } catch (e) {}
  }

  // 画像load個別フック
  function hookImages() {
    Array.prototype.forEach.call(document.images, function (img) {
      if (!img.complete) {
        img.addEventListener('load', function () { notify(false); });
        img.addEventListener('error', function () { notify(false); });
      }
    });
  }
  if (document.readyState !== 'loading') hookImages();
  else document.addEventListener('DOMContentLoaded', hookImages);
})();
