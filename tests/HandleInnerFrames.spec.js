const{test, expect} = require ('@playwright/test');

test('Handle inner farmes', async({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frames3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'})
   // frames3.locator("[name='mytext3']").fill('Welcome to anand');

   //nested frames
    const childframes = await frames3.childFrames();
     await childframes[0].getByRole('radio', { name: 'Hi, I am the UI.Vision IDE' }).check();

    await page.waitForTimeout(5000);
})