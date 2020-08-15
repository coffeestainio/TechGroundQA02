const LoginPage = require('../../pageobjects/login.page');
const Header = require('../../pageobjects/header.page')

describe('Login Page design', () => {
    it('should display all the login page components', () => {
        LoginPage.open();

        expect(LoginPage.btnSubmit).toBeDisplayed()
        expect(LoginPage.inputUsername).toBeDisplayed()
        expect(LoginPage.inputPassword).toBeDisplayed()
        expect(LoginPage.imgLogo).toBeDisplayed()
        expect(LoginPage.imgBot).toBeDisplayed()

        expect(Header.iconMenu).not.toBeDisplayed()

        // LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // expect(SecurePage.flashAlert).toBeExisting();
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});


