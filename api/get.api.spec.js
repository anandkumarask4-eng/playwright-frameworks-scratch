import {test, expect} from '@playwright/test';

   
test('api request detaild', async function ({request}) {
     
    const resp = await request.get(  "https://reqres.in/api/users?page=2")

    const respbody = await resp.body();

     const respjson = await resp.json()

    console.log(resp.json);
})