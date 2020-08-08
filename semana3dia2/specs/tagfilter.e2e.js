
describe('Login tests', () => { 

    before(()=>{
        browser.addCommand('logs', function()
        {
            this.click() 
            console.log('LOGGG')
        },  true)

        browser.url('/')

        var cookie = {
            key: 'usuario',
            value: 'pablousuario'
        }
        
        // browser.addCookie(cookie)
        // browser.getNamedCookie(name)
        browser.addSessionStorage(cookie)
    })

    it('should go to the register page and validate url', ()=> {  
        $('=HuManIty').waitAndClick()
        $('=HuManIty').logs()

        console.log(browser.getUrlandTitle())

        // waitAndClick($('=test'))

    });

});


