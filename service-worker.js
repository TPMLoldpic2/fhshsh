// 展品導覽：清除圖片快取並停止 Service Worker
// 上傳這份檔案覆蓋原本的 service-worker.js，重新整理網站一次即可。

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // 清除這個網站目前所有 Cache Storage
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      // 接管目前頁面，接著取消註冊自己
      await self.clients.claim();
      await self.registration.unregister();

      // 通知所有已開啟頁面重新載入，回到一般網路模式
      const clients = await self.clients.matchAll({ type: "window" });
      for (const client of clients) {
        client.postMessage({ type: "SERVICE_WORKER_REMOVED" });
      }
    })()
  );
});

// 在清除完成前若仍收到請求，一律直接走網路，不再新增任何快取。
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
