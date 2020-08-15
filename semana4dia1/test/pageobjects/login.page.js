const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/index.html';
    }

    getPageUrl() { return this.pageUrl }

    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('[data-test=username]') }
    get inputPassword () { return $('[data-test=password]') }
    get btnSubmit () { return $('#login-button') }
    get imgLogo () { return $('.login_logo') }
    get imgBot () { return $('img.bot_column') }
    
    // maybe this should be on the base page
    get lblError () { return $('[data-test=error]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    getValueFromElements() {
        return this.inputUsername.getValue()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new LoginPage();
