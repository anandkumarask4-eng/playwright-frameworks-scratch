import { test, expect } from "allure-playwright";

test('Handle radio button and checkbox', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/basic-controls.html');

    const firstName = page.locator('#firstName');
    await firstName.fill('Anand');

    const lastName = page.locator('#lastName');
    await lastName.fill('Kumar');

    const femaleRadio = page.locator('#femalerb');
    await femaleRadio.check();
    await expect(femaleRadio).toBeChecked();

    const checkBox = page.locator('#englishchbx');
    await checkBox.check();
    await expect(checkBox).toBeChecked();

    const status = await checkBox.isChecked();
    expect(status).toBeTruthy();
});