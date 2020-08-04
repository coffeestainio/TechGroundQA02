const assert = require('chai').expect;

describe('Login tests', ()=>{ 

    it('should go to the register page and validate url', ()=> {

        browser.url('/#/login')
        expect(browser).toHaveUrl(`/#/login`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})

        let email = $('input[type="email"]')
        expect(email).not.toHaveClassContaining('pablo')

    });
    
    it.only('should be able to submit login', ()=> {
        
        let email = $('input[type="email"]')
        let password = $('//input[@type="password"]')
        let button = $('.btn=Sign in')

        email.setValue('pablo@test.com')
        password.setValue('testtest')
        button.click()  
    })

    it('should redirect to the dashboard', ()=> {
        expect(browser).toHaveUrl(`${browser.config.baseUrl}/#/`) 
    })
});