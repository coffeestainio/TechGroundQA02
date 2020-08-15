const chaiExpect = require('chai').expect
const LoginPage = require('../../pageobjects/login.page')
const InventoryPage = require('../../pageobjects/inventory.page')
const AccountKeyword = require('../../keywords/account.keyword')

// constants for test validations
const LOCKED_USER_ERROR = 'Epic sadface: Sorry, this user has been locked out.';
const USER_NOT_EXIST_ERROR = 'Username and password do not match any user in this service';

const badUsers = [ {user: 'locked_out_user', error: LOCKED_USER_ERROR} ,
                   {user: 'randomeUser', error: USER_NOT_EXIST_ERROR}]

describe('Login Page functionality', () => {

    before(()=>{
        LoginPage.open();
    })

    beforeEach(()=>{
        AccountKeyword.logout()
    })

    badUsers.forEach((testUser) => {
        it(`should not be able to login with a ${testUser.user}`, () => {
            LoginPage.login(testUser.user, 'secret_sauce');
    
            expect(browser).toHaveUrlContaining(LoginPage.getPageUrl())
            expect(LoginPage.lblError).toHaveTextContaining(testUser.error)
        });
    })    

    it('should be able to login', () => {
        LoginPage.login('standard_user', 'secret_sauce');

        chaiExpect(InventoryPage.isUserOnInventoryPage()).to.be.true
        expect(InventoryPage.imgProduct).not.toHaveAttributeContaining('src','jpgWithGarbageOnItToBreakTheUrl')
    });

    it('should be able to login with problem user', () => {
        LoginPage.login('problem_user', 'secret_sauce');
        chaiExpect(InventoryPage.isUserOnInventoryPage()).to.be.true
        expect(InventoryPage.imgProduct).toHaveAttributeContaining('src','jpgWithGarbageOnItToBreakTheUrl')
    });

    it('should be able to login with performance_glitch_user user', () => {
        LoginPage.login('performance_glitch_user', 'secret_sauce');
        chaiExpect(InventoryPage.isUserOnInventoryPage()).to.be.true
    });

});

describe('Login Page functionality - Logout', () => {

    before(()=>{
        AccountKeyword.login()
    })

    it ('should let me logout', () => {
        AccountKeyword.logout()
        expect(browser).toHaveUrlContaining(LoginPage.getPageUrl())
        chaiExpect(InventoryPage.isUserOnInventoryPage()).to.be.false
    })

})
