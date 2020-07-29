const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const assert = require('assert');

describe('My Login application', () => {
    
    it('[JIRA-001] should login with valid credentials', () => {
        LoginPage.open();
        
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        SecurePage.flashAlert.waitForDisplayed()
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('[JIRA-002] should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        SecurePage.flashAlert.waitForDisplayed()
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


