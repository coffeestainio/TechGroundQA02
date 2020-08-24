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
        browser.url('/');
    });

    it('should let me search for San Jose', () => {
        
        Header.search('San Jose', 'San José, San José, Costa Rica')
        expect(WeatherTodayPage.labelCurrentWeather).toHaveText('Rain')

    });

    it.skip('should let me see different units', () => {
        let farTemp = WeatherTodayPage.labelTempValue.getText()
        farTemp = getValueFromString(farTemp)

        chaiExpect(farTemp).to.be.equal('66')

        Header.changeUnitTo('°C');

        let celTemp = WeatherTodayPage.labelTempValue.getText()
        celTemp = getValueFromString(celTemp)      
        
        chaiExpect(celTemp).to.be.equal('19')
        chaiExpect(celTemp < farTemp).to.be.true

    })

    it('should go to the next 10 days', ()=>{
        WeatherTodayPage.btnNext10Days.click()
        expect(Next10DaysPage.detailSummary).toBeElementsArrayOfSize(14)

    })
});


