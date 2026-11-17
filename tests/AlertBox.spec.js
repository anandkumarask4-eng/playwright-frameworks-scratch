import{test, expect} from '@playwright/test';

test('Handle alert box', async({page}) =>{

    await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');

    // alert box
    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!')

        await dialog.accept();

       
    })

    await page.click('#alertBox');
    await page.waitForTimeout(5000);
})