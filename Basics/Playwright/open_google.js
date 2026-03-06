const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  console.log('Google opened successfully');
  
  // Keep the browser open for 10 seconds, then close
  await new Promise(resolve => setTimeout(resolve, 10000));
  await browser.close();
})();
