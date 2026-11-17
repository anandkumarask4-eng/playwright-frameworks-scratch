import{test, expect} from '@playwright/test';

test('File uploaded', async({page}) =>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles('tests/uploadFiles/test1.docx');

})