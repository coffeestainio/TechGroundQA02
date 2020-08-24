const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

     get txtFirstName () {return $('[data-selenium-id=txtFirstName]')};
     get txtLastName () {return $('[data-selenium-id=txtLastName]')};

}

module.exports = new HomePage();
