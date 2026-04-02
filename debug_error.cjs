const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('pageerror', err => {
    console.error('PageError occurred:', err);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Console Error:', msg.text());
    }
  });

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000);
  await browser.close();
})();
