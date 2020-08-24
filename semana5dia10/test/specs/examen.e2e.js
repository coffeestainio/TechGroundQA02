const Header = require('../pageobjects/header.page');
const WeatherTodayPage = require('../pageobjects/weathertoday.page');
const Next10DaysPage = require('../pageobjects/nexttendays.page');
const { assert } = require('chai');
const chaiExpect = require('chai').expect

function getValueFromString(text){
    return text.substring(0,text.length-1)
}

describe('My Weather application', () => {

    before( () => {
        browser.url('https://www.kiwi.com/us/landing/-/-');
    });

    it('should let me search for San Jose', () => {
        $('[data-test=SearchField-input]').click()
        $('[data-test=SearchField-input]').setValue('TXL')

        $('[data-test="PassengersField"] button').click()

        $('[data-test="PassengersRow-infants"] button[aria-label=increment]').click()
        $('[data-test="PassengersRow-adults"] button[aria-label=increment]').click()
        $('[data-test="PassengersRow-children"] button[aria-label=increment]').click()

        browser.pause(10000)

    });

});


