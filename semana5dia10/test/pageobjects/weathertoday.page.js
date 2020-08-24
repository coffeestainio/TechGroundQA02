const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WeatherTodayPage extends Page {
    /**
     * define selectors using getter methods
     */
    get labelCurrentWeather() {return $('[data-testid=wxPhrase]') }
    get labelTempValue() {return $('[@data-testid=TemperatureValue]') } 
    get btnNext10Days() {return $('=Next 10 Days')}

}

module.exports = new WeatherTodayPage();
