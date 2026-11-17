import{test,expect} from '@playwright/test';
import { request } from 'node:http';

test("post Call Example with Token", async({request}) =>{

    const response = await request.post('https://restful-booker.herokuapp.com/auth',

        {
            headers: {
                "Content-Type":"application/json"
            },

            data:{
                "username" : "admin",
                "password" : "password123"  // if i give invalid user id then will be received bad request.
                
            }
        }
    );

    console.log(response.status());

    const responseData=await response.json();

    expect(responseData.token).not.toBeNull();
    
    //console.log(await response.json());



})



test("Post Call Example with bookingID", async({request}) =>{

    const response = await request.post("https://restful-booker.herokuapp.com/booking",
        {
            headers: {
                "Content-Type":"application/json"
            },

            data: {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
              "depositpaid" : true,
             "bookingdates" : {
             "checkin" : "2018-01-01",
             "checkout" : "2019-01-01"
    },
         "additionalneeds" : "Breakfast"
            }
        }
    );

    console.log("Status:", response.status());

    const responseData = await response.json();

    console.log(responseData);

    console.log(responseData.bookingid);
    
   /* const text = await response.text();
    console.log("Response body:", text);
    
    if (response.status() === 500) {
        console.error("Server returned 500 error. Response:", text);
    }
    
    const responseData = JSON.parse(text);
    console.log("Response data:", responseData); */
})