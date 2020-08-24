const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/lenses');
    }

    selectBrandAndName(lens) {
        $(`=${lens.brand}`).click()
        $(`//a[@class='product-link' and contains(.,'${lens.name}')]`).click()
    }

}

module.exports = new HomePage();
