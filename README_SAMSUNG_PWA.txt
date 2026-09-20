Samsung Internet PWA 測試版 v7

為什麼 v6 還有網址列：
- v6 沒有 Service Worker。
- Samsung Internet 的 PWA 辨識條件包含 Service Worker。
- 所以「加入主畫面」可能只建立普通網站捷徑，而不是 standalone PWA。

v7 做了什麼：
- 新增 service-worker.js
- Service Worker 不使用 Cache Storage
- 不預下載任何 MP3
- 不做離線功能
- 所有請求只直接傳到網路
- manifest display = standalone

GitHub Pages 結構：

/
├── index.html
├── exhibits.txt
├── manifest.webmanifest
├── service-worker.js
├── icon-192.png
├── icon-512.png
├── bk.jpg
├── p1.jpg
├── p2.jpg
└── vedio/
    ├── p1.mp3
    └── p2.mp3

Samsung Internet 重新測試：
1. 把 v7 全部上傳 GitHub Pages。
2. 先刪掉手機桌面上先前建立的舊「展品導覽」捷徑。
3. 用 Samsung Internet 打開 GitHub Pages 網址。
4. 重新整理一次，讓 Service Worker 完成註冊。
5. 再從 Samsung Internet 選單選「加入主畫面／安裝」。
6. 關閉瀏覽器。
7. 從手機桌面的「展品導覽」圖示開啟。
8. 正確 standalone 模式下，不應再顯示一般網址列與瀏覽器底部工具列。

注意：
- 手機最上面的時間、5G、電量狀態列仍可能保留，這是正常的。
- 這版沒有 Cache API，不會透過 Service Worker 把 30 個 MP3 存進手機。
