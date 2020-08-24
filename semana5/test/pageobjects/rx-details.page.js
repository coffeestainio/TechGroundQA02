const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnEnterManually() { return $('[data-selenium-id=btnEnterManually]')}
    
}

module.exports = new HomePage();
