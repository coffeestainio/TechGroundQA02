const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/cart.html';
    }

    cartItemProduct(producto) { return $(`//div[text()='${producto}']/../..`)}
    buttonRemove(element) {return element.$('.cart_button')}


    getPageUrl() { return this.pageUrl }   
    
    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new CartPage();
