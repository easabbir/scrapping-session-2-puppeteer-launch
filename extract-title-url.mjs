import puppeteer from 'puppeteer';

async function extractTitleAndUrl() {
    const browser = await puppeteer.launch({
      headless: true, 
      //userDataDir: './user_data', // প্রয়োজন অনুযায়ী পরিবর্তন করুন
      //executablePath: '/path/to/chrome', // আপনার Chrome এর সঠিক পাথ দিন
    });
  
    const page = await browser.newPage();
    const url = 'https://example.com'; // আপনার কাঙ্ক্ষিত URL এখানে পরিবর্তন করুন
    await page.goto(url);
  
    const title = await page.title();
    console.log({ title, url });
  
    await browser.close();
  }
  
  extractTitleAndUrl().catch(console.error);