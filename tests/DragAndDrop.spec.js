import{test, expect} from '@playwright/test';

test('Drag and Drop', async({page}) =>{

    await page.goto('https://jqueryui.com/droppable/');

    //select dra and drop

    const iframe = page.frameLocator('.demo-frame');
    
    const draggable = iframe.locator('#draggable');
    const droppable = iframe.locator('#droppable');

    await draggable.dragTo(droppable);

    await expect(droppable).toHaveClass(/ui-droppable/);

    await page.waitForTimeout(5000);
})