import{test, expect} from '@playwright/test';

test('alert handle frames',async({page}) =>{

    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');

    //alert box

    page.on('dialog', async dialog=>{
        if(dialog.type() ==='alert'){
            expect(dialog.message()).toContain('I am an alert box!');
            await dialog.dismiss();
        }
//confirm box
        else if(dialog.type() === 'confirm'){
            expect(dialog.message()).toContain('Press a button!');
            await dialog.dismiss();
        }

//promptBox
        else if(dialog.type() === 'prompt'){
            expect(dialog.message()).toContain('Please enter your name:');
            await dialog.accept('Anand');
           // await dialog.dismiss();
        }
    })
    await page.click('#alertBox');
    await page.click('#confirmBox');

    await page.click('#promptBox');
    await page.waitForTimeout(5000);
})