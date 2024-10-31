import puppeteer from 'puppeteer';

async function extractTitleAndUrl() {
    const browser = await puppeteer.launch({
      headless: true, 
      //userDataDir: './user_data',
      executablePath: '/usr/bin/google-chrome',
    });
  
    const page = await browser.newPage();
    const url = 'https://example.com';
    await page.goto(url);
  
    const title = await page.title();
    console.log({ title, url });
  
    await browser.close();
  }
  
  extractTitleAndUrl().catch(console.error);