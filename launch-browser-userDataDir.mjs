import puppeteer from "puppeteer";

async function launchBrowser (){
    const browser = await puppeteer.launch({
        userDataDir: './my-awesome-profile'
    })

    const version = await browser.version();
    console.log({version});
    await browser.close();

} 

launchBrowser().catch(console.error)