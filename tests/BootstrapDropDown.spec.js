import{test, expect} from '@playwright/test';

test('Handle Bootstrap Drop_Down', async({page}) =>{

    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html')

    // click drop down
    // const course = await page.locator('#course').click();

    //   await page.locator('#course').selectOption('java');
    //   await page.waitForTimeout(2000);

    //   await page.locator('#course').selectOption('net');
    //   await page.waitForTimeout(5000);

//     const idName = await page.locator('#ide');
//    // await expect(idName.length).toBe(5);

//     const Names = ['Eclipse', 'IntelliJ IDEA', 'Visual Studio', 'NetBeans'];

//     for(const value of Names){

//         await idName.selectOption(value);
//         console.log("Selected", 'value');

   const options = await page.$$('#ide')

   for(let option of options){
     
      const value=await option.textContent();
      console.log("Value is ", value);
   }

        await page.waitForTimeout(5000);
    
});