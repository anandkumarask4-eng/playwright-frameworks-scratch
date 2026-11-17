import{test, expect} from '@playwright/test';

test('Handle the table ', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // click on table
    const table = await page.locator('#productTable');

    // columns & Rows

     const columns = await table.locator('thead tr th')
    console.log('Number of columns:', await columns.count());
     expect(await columns.count()).toBe(4);

     const Rows = await table.locator('tbody tr')
     console.log('Number of Rows:', await Rows.count())
     expect(await Rows.count()).toBe(5);

     // select check box for product 3

     const matchedRow = Rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet '
     })

     await matchedRow.locator('input').check();


     // print all product details using loop

     await page.evaluate(()=>{
        window.scroll(0,500)

     });

     

    //  for(let i=0; i<await Rows.count();i++){

    //     const row = Rows.nth(i)
    //     const tds= row.locator('td')

    //     for(let j=0; j<await tds.count()-1;j++){
    //         console.log(await tds.nth(j).textContent())
    //     }
    //  }

     // screenshots 
     await page.screenshot({
        path: 'screenshots/homepage.png',
        fullPage:true
     });

     const pages = await page.locator('.pagination');
     console.log('Number of pages:', await pages.count());

     for(let p=0; p<await pages.count();p++){

        if(p>0)
        {
            await pages.nth(p).click();
        }
 
     for(let i=0; i<await Rows.count();i++)
    {

        const row = Rows.nth(i)
        const tds= row.locator('td')

        for(let j=0; j<await tds.count()-1;j++)
        {
            console.log(await tds.nth(j).textContent())
        }
     }
     await page.waitForTimeout(3000);
    
}

  await page.waitForTimeout(5000);
    
})

async function productTable(Rows, pages,name) {
    
}