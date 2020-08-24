const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NextTenDaysPage extends Page {
    /**
     * define selectors using getter methods
     */

    get detailSummary() {return $$('[data-testid=DetailsSummary]') }

}

module.exports = new NextTenDaysPage();
