const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/inventory.html';
    }

    get imgProduct() { return $('img.inventory_item_img') }

    getPageUrl() { return this.pageUrl }   
    

    isUserOnInventoryPage(){
        return (
            $('.inventory_container').isExisting()
            && browser.getUrl().includes(this.pageUrl)
            )
    }

    open () {
        return super.open(pageUrl);
    }
}

module.exports = new InventoryPage();
