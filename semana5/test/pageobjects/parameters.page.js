const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

     get iconAddLeftEye () {return $(`//p[text()='Add Left Eye']`)};
     get iconAddRightEye () {return $(`//p[text()='Add Right Eye']`)};

    selectPower(eye, power){
        if (power > 0)
            power = 'positive-' + power
        else
            power = 'negative-' + power
        
        console.log('POWER', power)

        browser.debug()

        let eyeArea = $(`[data-selenium-id="dirParameters${eye}Eye"]`)
        eyeArea.$('.select-power').click()
        $(`//input[contains(@id,'${eye}-${power}')]/..`).click()
    }

    selectBaseCurve(eye, bc){
        $(`[name=baseCurve-${eye}]`).selectByVisibleText(bc)
    }
    
}

module.exports = new HomePage();
