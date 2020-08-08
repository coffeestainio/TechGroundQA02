const axios = require('axios');

getGoogle = () => {
    return axios
        .get("https://www.google.com")
        .then(data => console.log('Resultado' , data.status))
        .catch(err => {
            console.log(err);
            return null;
        });
 };

describe('Login tests', () => { 

    it('should go to the register page and validate url', ()=> {   
        console.log('Go to base URL')
        browser.call(()=> getGoogle())
        console.log('Go to other page')
    });


    it('should go to the register page and validate url', ()=> {  
        browser.url('/') 
        console.log('Go to base URL')
        var ele = $('.ion-heart')
        browser.execute((ele)=> {
            ele.click()
        }, ele)
        console.log('Go to other page')
        browser.debug()
    });

});