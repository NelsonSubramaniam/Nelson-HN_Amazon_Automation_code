import {test} from "@playwright/test"

test('Merge', async ({page})=>{

    await page.goto("https://www.ilovepdf.com")
    await page.waitForTimeout(3000)
    console.log("Merge Test sceanrio 1")
})