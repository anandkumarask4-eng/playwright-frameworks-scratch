import{test, expect} from '@playwright/test';

test('Iframe handle', async({page}) =>{

    await page.goto('https://ui.vision/demo/webtest/frames/');

    // total count how mnay frames is there

    const allframes = await page.frames();
    console.log('Number of frames', allframes.length);

    // frame-1

    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1'});
    // await frame1.fill("[name='mytext1']", 'WelCome to frame-1');

    // // frame -2
    // const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2'});
    // await frame2.fill("[name='mytext2']", 'WelCome to frame-2');

    // //frame -3
    // const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
    // await frame3.fill("[name='mytext3']", 'WelCome to frame-3');
//approach -2

const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
inputbox.fill('Hello');
    await page.screenshot({
        path:'fullpage.png',
        fullPage: true
    });
    await page.waitForTimeout(5000);
})