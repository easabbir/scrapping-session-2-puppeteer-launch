import puppeteer from 'puppeteer';

async function connectToBrowser() {
  const browserWSEndpoint = 'ws://localhost:9222/devtools/page/15D666D216B9E25073C7501F34E1DC89'; // এখানে <your-websocket-id> প্রতিস্থাপন করুন

  const browser = await puppeteer.connect({
    browserWSEndpoint,
  });

  const pages = await browser.pages();
  const page = pages[0]; 
  const title = await page.title();
  const url = page.url();
  
  console.log({ title, url });

  await browser.disconnect();
}

connectToBrowser().catch(console.error);