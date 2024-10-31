import puppeteer from 'puppeteer';

async function launchBrowser() {
  const browser = await puppeteer.launch();
  const version = await browser.version();
  console.log({ version });
  await browser.close();
}

launchBrowser().catch(console.error);