import puppeteer from 'puppeteer';

// here browserWSEndpoint and debugging port will be used
//const browserWSEndpoint = 'ws://localhost:9222/devtools/browser/c9678309-a1ac-49b7-881e-af4b10688475';

// Add browser
(async () => {
  try {
    const endpoint=browser.wsEndpoint();
    const browser=await puppeteer.connect({
      browserWSEndpoint:endpoint

    })
    console.log('Browser connected successfully!');

    // Do the browser related works
    const page = await browser.newPage();
    await page.goto('https://example.com');
    console.log('Page opened:', await page.title());

    // Close the browser
    await browser.disconnect();
  } catch (error) {
    console.error('Failed to connect to the browser:', error);
  }
})();