const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => {
        if (msg.type() === 'error' || msg.type() === 'warning') {
            console.log(`[${msg.type().toUpperCase()}] ${msg.text()}`);
        }
    });

    page.on('pageerror', error => {
        console.log(`[PAGE ERROR] ${error.message}`);
    });

    try {
        await page.goto('http://localhost:3000/article/sushi-sake-pairing-guide', { waitUntil: 'networkidle0' });
        const html = await page.content();
        console.log(`Loaded page. HTML length: ${html.length}`);
    } catch (e) {
        console.log(`[NAVIGATION ERROR] ${e.message}`);
    } finally {
        await browser.close();
    }
})();
