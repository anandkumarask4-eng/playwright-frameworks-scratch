import { test, expect } from '@playwright/test';

// iframe is a HTML document that embded another webpages inside the current webpages.
//element inside the iframe belong to different document. we cannot interact wih direct
// using to page object. in playwright we use framelocator() or contentframe() to access to iframe
//before interacting with Element.

test('handle is frame', async({page}) =>{

    await page.goto('')
})