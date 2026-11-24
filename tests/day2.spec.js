import {test} from '@playwright/test'

test('login page', async({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    await page.goto("https://www.redbus.in/");
    await page.waitForTimeout(3000);
    const URL = await page.url();

    console.log(URL);
    const pageTitile = await page.title();
    console.log(pageTitile);
    await page.screenshot({path : 'redbus.png'});
    await page.goto("https://www.saucedemo.com/");
    await page.screenshot({path : 'saucedemo.png'});
    await page.waitForTimeout(3000);
    await page.goBack();
    await page.goBack();
    await page.goForward();
    await page.goForward();
    await page.reload();
})


test.only('fixtures', async({browser})=>{
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://www.flipkart.com/");
    const page2 = await context1.newPage();
    await page2.goto("https://www.amazon.in/");
    const page3 = await context1.newPage();
    await page3.goto("https://www.saucedemo.com/");

    const context2 = await browser.newContext();
    const myntra = await context2.newPage();
    await myntra.goto("https://www.myntra.com/");

})