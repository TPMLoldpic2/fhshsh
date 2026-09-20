視障展品導覽 v6 — 輕量 PWA

GitHub Pages 根目錄請放：

/
├── index.html
├── exhibits.txt
├── manifest.webmanifest
├── icon-192.png
├── icon-512.png
├── bk.jpg
├── p1.jpg
├── p2.jpg
└── vedio/
    ├── p1.mp3
    └── p2.mp3

這版 PWA 的目的：
- 加到手機主畫面後，以 standalone 模式開啟。
- standalone 模式通常不顯示一般瀏覽器網址列與底部瀏覽工具列。
- 不使用 Service Worker。
- 不做離線快取。
- 不預先儲存全部 MP3。
- MP3 仍然在使用者按「聽展品描述」時才從網路載入。

GitHub Pages 上傳後：
1. 先用一般瀏覽器開 GitHub Pages 網址。
2. Android / Samsung Internet / Chrome：
   從瀏覽器選單選「安裝應用程式」、「加入主畫面」或相近名稱。
3. iPhone：
   從分享選單選「加入主畫面」。
4. 之後從手機主畫面的「展品導覽」圖示開啟。
5. 請確認開啟後網址列已消失，才是 standalone 模式。

注意：
- 直接在瀏覽器網址列打開仍然會看到瀏覽器 UI，這是正常的。
- 必須從「已加入主畫面的圖示」開啟，才會得到 standalone 體驗。
