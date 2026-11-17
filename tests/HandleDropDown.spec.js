import{test,expect} from '@playwright/test';

test('Handle DropDown Element', async({page}) =>{

    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');

    // handle drop down

    
    await page.locator('#course').selectOption({ label: 'Java' });
})

  