視障展品導覽 v5

GitHub repository / GitHub Pages 目錄請照這個結構：

/
├── index.html
├── exhibits.txt
├── bk.jpg
├── p1.jpg
├── p2.jpg
└── vedio/
    ├── p1.mp3
    └── p2.mp3

重要：
1. index.html 與 exhibits.txt 一定要放「同一層」。
2. 不要把 exhibits.txt 放進 vedio 資料夾。
3. MP3 全部放進 vedio/。
4. 第 1 件會自動讀：
   p1.jpg
   vedio/p1.mp3
5. 第 2 件會自動讀：
   p2.jpg
   vedio/p2.mp3

exhibits.txt 目前內容：
編號<TAB>年代<TAB>照片
1<TAB>1920年代<TAB>公館自來水源地
2<TAB>1999年<TAB>正氣橋

這版 index.html 使用：
new URL("./exhibits.txt", document.baseURI)

因此即使 GitHub Pages 網址像：
https://帳號.github.io/資料夾名稱/

也會讀：
https://帳號.github.io/資料夾名稱/exhibits.txt

如果讀不到，頁面會直接顯示它實際嘗試讀取的完整網址，方便檢查 GitHub 上檔案是否真的存在。
