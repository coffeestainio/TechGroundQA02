const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnFindMyContacts () { return $('=Find my contacts') }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new HomePage();
