const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () { return $('#LocationSearch_input') }
    get sectionLanguage() {return $('[data-testid=languageSelectorSection] button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    search (criteria, exactLocation) {
        this.inputSearch.waitForClickable()
        this.inputSearch.setValue(criteria)
        $(`button=${exactLocation}`).click()
    }

    changeUnitTo (unit) {

        browser.pause(2000)
        this.sectionLanguage.click()
        // $(`//div[@id="UnitSelectorTabs"]//span[text()='${unit}']`).click()

        $(`#UnitSelectorTabs`).$(`span=${unit}`).click()

    }
}

module.exports = new LoginPage();
