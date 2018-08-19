// スナップショットをとる
const puppeteer = require("puppeteer");

// 即時関数
(async () => {
    // ブラウザを取得
    const browser = await puppeteer.launch();

    // pageを作成
    const page = await browser.newPage();

    // urlにアクセス
    await page.goto("http://localhost:8080/index.html");

    // スナップショットを撮る
    const date = new Date();
    const path = `screenshot/image-${
        date.getFullYear()
    }-${
        date.getMonth() + 1
    }-${
        date.getDate()
    }-${
        date.getHours()
    }-${
        date.getMinutes()
    }-${
        date.getSeconds()
    }-${
        date.getMilliseconds()
    }.png`;
    await page.screenshot({ path });

    // ブラウザを閉じる
    await browser.close();
})();