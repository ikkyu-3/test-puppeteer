const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto("http://localhost:8080/index.html");

    const hoge = "テスト";
    const result = await page.evaluate(str => {
        return test(str); // testは、引数を返す
    }, hoge);

    console.log(`result: ${result}`); // "テスト"と表示される

    await browser.close();
})();