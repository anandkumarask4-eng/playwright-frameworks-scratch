import{test, expect} from '@playwright/test';


test.skip('Test-1verify with annotation', async({page})=>{

    console.log('Test is passd');
})

test.skip('Test-2 verify', async({page}) =>{

    console.log('pass second test case!')
})

test('test3', async({page,browserName}) =>{
    console.log('this is test3')
    if(browserName==='chromium')
    {
        test.skip();
    }
})